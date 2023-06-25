'use strict';

const Homey = require('homey');
const Helper = require('./helper');
const Logger = require('./logger');
const semver = require('semver')

/**
 *
 * For sake of consistency - this device is called the 'group' where as the devices with in this group
 * are referred to as the 'devices'
 *
 * i: capability key, x: groupedDevice key
 */
class Device extends Homey.Device {

    /**
     * Automatically runs
     * Gathers the required properties, sets our listeners, and polls
     */
    async onInit() {
        this.logger = new Logger('trace', 'device:' + this.getName());
        this.logger.setDebug(0);

        await this.load();

        try {
            await this.checkForUpdates();
            await this.initDebounces();
            await this.initGroupListener();
            await this.initInstances();
            await this.initValues();
        } catch (e) {
            this.error(e);
            throw e;
        }
    }


    /**
     * Resets our properties,
     *
     * Note how this does not include the 'events' property which needs to persist.
     * @returns {Promise<void>}
     */
    async load() {
        this.logger.trace();

        this.states = {};                                       // State of all group capabilities
        this.instances = {};
        this.audits = {};                                        // Timeout audits checking grouped devices are ready and have an instance
        this.auditTimer = 30;                                    // how often to audit device - in seconds - 0 for disabled
        this.settings = await this.getSettings();
        this.store = await this.getStore();
        this.data = await this.getData();
        this.capabilities = await this.getCapabilities();
        this.logger.setLevel(this.settings.logLevel);

        // adds a listener to all devices, so we can track when they are deleted.
        await this.watch();
    }

    /**
     * When a device is added, set our label values.
     *
     * Happens prior to the initialisation
     *
     * @returns {Promise<void>}
     */
    async onAdded() {
        this.logger.trace();
        await this.updateDevicesLabel();
        await this.updateCapabilityLabel();
    }

    /**
     * When you rename a device, it will update the logging and reset the labels.
     *
     * @param name
     * @returns {Promise<void>}
     */
    async onRenamed(name) {
        this.logger.info("Renaming device to:" + name);
        this.logger.setName(name);
        await this.updateDevicesLabel();
        await this.updateCapabilityLabel();
    }

    /**
     * Reload the settings & capability listeners
     *
     * Sets device unavailable/available while updating, regathers the latest,
     * settings empties all devices for them to rebuilt, and updates the group labels.
     * @todo combine load and refresh common functions
     *
     * @returns {Promise<boolean>}
     */
    async refresh(settings = this.settings) {
        this.logger.trace();
        try {
            this.logger.debug(settings);
            await this.destroyAllInstances();
            await this.destroyAllAudits();

            this.settings = settings;
            this.store = await this.getStore();
            this.capabilities = await this.getCapabilities();

            await this.initInstances();
            await this.initValues();
            await this.initDebounces(settings.debounceGroup);

            await this.initGroupListener();

            this.logger.setLevel(settings.logLevel);
        } catch (e) {
            this.console.log(e);
            this.error(e);
        }
        return true;
    }


    /**
     * Sets the initial value of the Group based off of the values with in the Devices.
     *
     *  Loops through all the  group capabilities, calling onStateChange, to get then set all capabilities values
     *
     * @returns {Promise<void>}
     */
    async initValues() {
        this.logger.trace();
        // Loop through each of the capabilities gathering the values and assigning them back to the group.
        for (let i in this.capabilities) {
            this.onStateChange(this.capabilities[i]);
        }
    }

    async initDebounces(wait = this.settings.debounceGroup) {
        this.debouceGroupCapabilityValue = this.debounceByFirstParam(this.setGroupCapabilityValue, wait);
    }


    /**
     * Initialises the capability listener.
     *
     * Basically : Registers every capability the group (MultipleCapabilityListener) has, so
     * when any of the group capabilities are changed, the function is called  which sets the
     * value of all of the devices to said value.
     *
     * As this is only listening for capabilities (which cant be changed in the settings), we never have to reload this.
     *
     * @returns {Promise<void>}
     */
    async initGroupListener() {
        this.logger.trace(this.capabilities);

        /**
         * Register all of the capabilities at once with a (async) call back.
         *
         * values : An object with the changed capability values, e.g. { dim: 0.5 }
         * options : An object with optional properties, per capability, e.g. { dim: { duration: 300 } }
         *
         * @todo add check if values == hue or temperature -> alter the light_mode.
         */
        return this.registerMultipleCapabilityListener(this.capabilities, async (values, options) => {
            this.logger.info('registerMultipleCapabilityListener', JSON.stringify(values));
            return this.updateDevicesCapabilities(values, options);
        }, this.settings.debounceDevices);
    }

    /**
     * Updates the devices capabilities called from the groups capability listener.
     *
     * @param values
     * @returns {Promise<boolean>}
     */
    async updateDevicesCapabilities(values) {
        this.logger.trace();
        // Loop through each devices in the group
        let i = 0;
        for (let x in this.store.devices) {
            if (await this.deviceExistsInInstance(this.store.devices[x])) {
                for (let capability in values) {
                    // if the capability still exists and is for this device @todo once we delete capabilities on repair we wont need the first check
                    if (this.store.supported[capability] && this.store.supported[capability].includes(this.store.devices[x])) {
                        if (this.instances[this.store.devices[x]].hasOwnProperty(capability)) {
                            // In theory this should delay each of the device updates and place the number of 'settings.wait' between them.
                            setTimeout(() => {
                                this.setDeviceCapabilityValue(this.instances[this.store.devices[x]], capability, values[capability]);
                            }, this.settings.wait * i++);
                        } else {
                            this.error(
                                'Unable to set ' + capability + ' to ' + values[capability],
                                {
                                    'devices': this.instances.hasOwnProperty(this.store.devices[x]),
                                    'capability': this.instances[this.store.devices[x]].hasOwnProperty(capability)
                                }
                            );
                            this.setWarning('Not all devices with in the group are ready to be updated.')
                        }
                    } else {
                        this.logger.debug('Capability not supported bu this device', this.store.devices[x], capability, this.store.supported)
                    }

                }
            }
        }
        return true;
    }

    /**
     * Returns whether a device exists in the instance.
     * @param id
     * @returns {Promise<boolean>}
     */
    async deviceExistsInInstance(id) {
        return Boolean(
            Boolean(this.instances[id]) &&
            this.instances.hasOwnProperty(id) &&
            Boolean(Object.getOwnPropertyNames(this.instances[id]).length > 0)
        );
    }


    /**
     * Sets the value of the device capability, and if it fails - wil retry.
     *
     * @param device the device instance
     * @param capability the capability of said device to update
     * @param value the value to update the capability to
     * @returns {Promise<void>}
     */
    async setDeviceCapabilityValue(device, capability, value) {
        this.logger.trace(this.settings.tries);

        for (let i = 1; i <= this.settings.tries; i++) {
            try {
                await device[capability].setValue(value);
                this.logger.info('Success: attempt ' + i + ' to set ' + device[capability].id + ' for ' + device[capability].device.name + '(' + value + ')');
                return; // escape on success.
            } catch (e) {
                // If the device doesnt exist, don't bother retrying.
                if (e.statusCode === 404) {
                    this.logger.warn('Deleted: only attempt to set ' + device[capability].id + ' for ' + device[capability].device.name + '(' + value + ')');
                    this.setWarning('Homey is attempting to alter a device which no longer exists.');
                    return;
                } else if (e.statusCode === 408) {
                    this.logger.warn('Timeout: attempt ' + i + ' to set ' + device[capability].id + ' for ' + device[capability].device.name + '(' + value + ')');
                } else {
                    this.logger.warn(e);
                    this.logger.warn('Failed: attempt ' + i + ' to set ' + device[capability].id + ' for ' + device[capability].device.name + '(' + value + ')');
                }
            }
        }
        this.setWarning('Homey was unable to communicate with ' + device[capability].device.name + ' while setting ' + device[capability].id + ' to ' + value);
    }


    /**
     * Initialises our instance - and the start the monitoring of the devices in the group
     *
     * @returns {Promise<void>}
     */
    async initInstances() {
        this.logger.trace();

        // Store our events, so we can remove them if needed.
        this.events = [];

        // Loop through each of the devices in the group
        for (let x in this.store.devices) {

            // Sanity Check
            if (this.store.devices.hasOwnProperty(x)) {

                // Initialise the instance if it has not been set.
                this.instances[this.store.devices[x]] = {};

                // Keep checking.
                await this.auditDevice(this.store.devices[x]);
            }
        }
    }

    /**
     * If device is not ready, remove and destroy
     *
     * @param device
     * @returns {Promise<void>}
     */
    async validateDeviceNotReady(device) {
        // If exists therefore - not ready.
        this.logger.info('Removing (unavailable) device instances (' + device.id + ':' + device.name + ')');

        // Listener exists but the device is not ready - so delete.
        await this.destroyDeviceInstances(device.id);

        // Reset the instance back to nothing.
        this.instances[device.id] = {};
    }

    /**
     * If the device doesnt exist in the instance, create it
     *
     * @param device
     * @returns {Promise<void>}
     */
    async validateDeviceNotExist(device) {
        this.logger.info('Creating device instances (' + device.id + ':' + device.name + ')');
        this.logger.debug(this.capabilities);

        this.instances[device.id] = {};

        // Listener doesnt exist but device is ready - so create
        for (let i in this.capabilities) {

            // There was a very good reason for setting the listener to a anon function, I believe it had to do with variable scope?
            let listener = async (value) => {
                this.onStateChange(this.capabilities[i]);
            };

            try {
                this.logger.debug('Defining the listener', device.name, this.capabilities[i])
                // @todo this is where the code for the fused devices needs to be added ( if (device.id === this.settings.capabilities[this.capabilities[i]]) { // Only link if the device is the primary device for that capability.
                // Only update the capability if the device has it, (this allows for blended groups).
                if (this.store.supported.hasOwnProperty(this.capabilities[i]) && this.store.supported[this.capabilities[i]].includes(device.id)) {
                    let result = device.makeCapabilityInstance(this.capabilities[i], listener);
                    this.instances[device.id][this.capabilities[i]] = result;
                }

            } catch (e) {
                this.logger.warn(e);
                this.error('validateDeviceInstances: error setting ' + device.id + ' capability ' + this.capabilities[i] + ' for ' + device.name + '. Is device is ready? : ' + device.ready)
            }
        }
    }

    /**
     * Manages a devices instances,
     *
     * Checks whether the device is ready and whether or not it has an instance for each of the capabilities.
     *
     * If either is not true then it will either create or destroy the capability instance accordingly.
     *
     * @param deviceId
     * @returns {Promise<*>}
     */
    async validateDeviceInstances(deviceId) {
        this.logger.trace(deviceId);
        let device, ready, exists = false;

        // requires the API, stored in memory - see getDevice() for details.
        device = await this.getDevice(deviceId);

        if (device) {

            // Whether or not the device is ready device which have not loaded (yet), are disabled, crashed will not be ready.
            ready = Boolean(device.ready);
            exists = await this.deviceExistsInInstance(deviceId)

            // XOR comparison
            if (ready !== exists) {
                if (!ready) {
                    await this.validateDeviceNotReady(device);
                } else if (!exists) {
                    await this.validateDeviceNotExist(device);
                }
            }
            await this.initValues();

        } else {

            // We don't have a device, log then throw an error which will get caught by auditDevice.
            this.logger.info('Removing (deleted) device instances (' + deviceId + ':' + device.name + ')');

            const err = new Error('device_not_found');
            err.statusCode = 404;
            err.name = 'device_not_found';

            throw err;
        }

        // Everything is great here, or not
        return device && ready && exists;
    }


    /**
     * This little function will poll a specific device with the group and check to see if they are available.
     *
     * How often they are polled depends on the current status of the device, if the device is not ready it will run 10x more frequently.
     *
     * Currently defaults to once every 30 seconds if not ready and once every 5 min if the device is ready.
     *
     * Set this.auditTimer to  0 to disable.
     *
     * @param deviceId the deviceID which to audit.
     * @returns {Promise<void>}
     */
    async auditDevice(deviceId) {
        try {
            let working = await this.validateDeviceInstances(deviceId);

            if (this.auditTimer) {
                // Check the device 10x more often if its not ready, defaults to 30 seconds / 5 min.
                this.audits[deviceId] = setTimeout(this.auditDevice.bind(this, deviceId), 1000 * (this.auditTimer + (!!working * (this.auditTimer * 9))));
            }
        } catch (e) {

            // really dont know if these are captured here or further upstream.
            if (e.statusCode === 404) {
                // if the device is not found, destroy its instance/poll. JIC - Manual delete is still required to permanently remove (see: settings).
                this.destroyDevice(deviceId);
            } else if (e.statusCode === 408) {
                this.logger.warn('Timeout: ' + deviceId + ': while attempting to auditDevice');
            } else {
                throw e;    // Otherwise use normal app error handling.
            }
        }
    }

    /**
     * When a device is deleted check to see if it will affect this group
     * and if then call the validateDeviceInstances to speed up the process of it being removed.
     *
     * @todo - perhaps all of the code checking for deleted devices should be handled here rather then with in the audit.
     *
     * @returns {Promise<void>}
     * @private
     */
    async watch() {
        this.logger.trace();

        let api = await this.homey.app.getApi();

        // Listen for devices being deleted. (Note there is another check with in the app - keeping the cache clean).
        api.devices.on('device.delete', async (device) => {
            this.logger.trace('device.delete');

            // If the deleted device is with in this group.
            if (this.store.devices && this.store.devices.length && this.store.devices.includes(device.id)) {

                this.logger.info('Detected device in group has been deleted', device.id);

                try {
                    await this.validateDeviceInstances(device.id);
                } catch (e) {
                    if (e.statusCode === 404) {
                        // if the device is not found, destroy its instance/poll.
                        // JIC - Manual delete is still required to permanently remove (see: settings).
                        this.destroyDevice(device.id);
                    } else {
                        this.logger.warn(e);
                        throw e;
                    }
                }
            }
        });
    }


    /**
     * Called when ever the state (capability values) of a device is changed.
     * Call code which determine the value off all devices, and then assign the correct value to the group (card).
     *
     * @param capability
     * @param value
     * @param device
     * @returns {Promise<void>}
     */
    async onStateChange(capability) {
        this.logger.trace();
        let values = await this.getDevicesCapabilityValues(capability);
        this.logger.debug(capability, values);
        await this.debouceGroupCapabilityValue(capability, values);
    }


    /**
     * Get all of the grouped capability values for all of the devices
     *
     * @returns {Promise<void>}
     */
    async getDevicesCapabilityValues(capability) {
        let values = [];

        // Loop through each of the devices in the group
        for (let x in this.store.devices) {

            // There is a bug where this is called while group devices is empty ..
            if (this.store.devices.hasOwnProperty(x) && this.instances.hasOwnProperty(this.store.devices[x])) {

                // Add a check that the capability exists - future proofing when we mix'n match device capabilities
                if (this.instances[this.store.devices[x]].hasOwnProperty(capability)) {

                    // Loop through each of the capabilities checking each of the devices value.
                    values.push(this.instances[this.store.devices[x]][capability].value);
                }
            }
        }
        return values;
    }


    /**
     * Assigns a card's values to the values of the supplied devices
     *
     * Based off of the capabilities and their values supplied and which methods they have assigned to them
     * setCardValues will determine what value each of the capabilities of this device should be then assigns it
     *
     * @param values
     * @param capabilities
     * @returns {Promise<boolean>}
     */
    async setGroupCapabilityValue(capability, values) {
        this.logger.debug(capability, values);

        // DEBUG force block scope variable, sanity check for memory debugging.
        let a = {key: null, value: null, method: null, type: null}

        // Aliases
        a.key = capability;                                     // Alias the capability key
        a.value = values;                                       // Alias the value
        a.method = this.settings[a.key]                         // Alias the method we are going to use

        // if the method is false - its disabled if it's set to ignore, don't update use the card behaviour.
        // or if there are no values attached to the device.
        // @todo add a check here to see if All the devices are defined before changing the value of the group.
        if (values.length && a.method !== false && a.method != null && a.method !== 'ignore') {

            // Calculate then convert our value using our function
            a.value = Helper[a.method](a.value);
            try {
                // Set the capability of the group
                // @todo - if key = light_hue or light_tempreatire - update the light_mode of the group.
                await this.setCapabilityValue(a.key, a.value);

                // Log for debugging.
                this.logger.info('Setting group capability:', a.key + ' to ' + a.value + ' :: [' + values.join(', ') + '](' + a.method + ')')
            } catch (e) {
                // Log for error
                this.error('Error on setting capability value : ' + a.key + ' ' + a.value + ' Error:' + e.message);
            }
        } else if (a.method !== 'ignore') {
            this.logger.debug('Unable to update the groups value', {
                length: values.length,
                method: a.method
            });
        }
        return true;
    }


    /**
     * Will update the devices label setting to the current devices.
     *
     * @returns {Promise<void>}
     */
    async updateDevicesLabel() {
        this.logger.trace();
        let labels = [];

        for (let x in this.store.devices) {
            let device = await this.getDevice(this.store.devices[x]);
            if (device) {
                labels.push(device.name);
            }
        }

        await this.setSettings({
            labelDevices: labels.join(', ')
        });
        return true;
    }

    /**
     * Will update the capabilities label setting to the current capabilities.
     *
     * @returns {Promise<boolean>}
     */
    async updateCapabilityLabel() {
        this.logger.trace();

        let labels = [];
        for (let i in this.capabilities) {
            labels.push(this.homey.__('capability.' + this.capabilities[i] + '.title'));
        }

        await this.setSettings({
            labelCapabilities: labels.join(', ')
        });

        return true;
    }


    /**
     * Check for application updates, and then update if required
     * @returns {Promise<*>} true if update installed, false if no update
     *
     * @todo - move to a repair option/
     */
    async checkForUpdates() {
        this.logger.trace();
        try {
            if (!semver.valid(this.store.version) || this.store.version !== this.homey.app.manifest.version) {
                if (semver.gt('3.1.15', this.store.version) ) {

                    this.logger.warn('Updating device to latest version', {
                        'current': this.store.version,
                        'new': this.homey.app.manifest.version
                    })

                    try {
                        if (this.settings.devices) {
                            this.logger.warn('Moving devices into the store.', this.settings.devices);
                            this.setStoreValue('devices', this.settings.devices)
                        }
                    } catch (e) {
                        this.logger.warn('Moving devices failed ', this.settings.devices);
                        throw e;
                    }

                    try {
                        this.logger.info('Arranging default settings for all devices')
                        await this.setSettings({
                            debounceGroup: 0,
                            debounceDevices: 0,
                            wait: 0,
                            tries: 1,
                            logLevel: 'debug'
                        });
                    } catch (e) {
                        this.logger.warn('Arranging default settings failed', e);
                        throw e;
                    }

                    this.logger.info('Adding supported store to the group.')
                    let supported = {};
                    for (let c in this.capabilities) {
                        supported[this.capabilities[c]] = [];
                        for (let i in this.store.devices) {
                            try {
                                let device = await this.homey.app.getDevice(this.store.devices[i]);
                                if (device.capabilities.includes(this.capabilities[c])) {
                                    supported[this.capabilities[c]].push(this.store.devices[i]);
                                }
                            } catch (e) {}
                        }
                    }

                    try {
                        await this.setStoreValue('supported', supported);
                        this.store = await this.getStore();
                    } catch (e) {
                        this.logger.warn('Unable to add supported values', supported , e)
                        throw e;
                    }

                    try {
                        await this.setStoreValue('version', this.homey.app.manifest.version);
                    } catch (e) {
                        this.logger.warn('Unable to update version', this.homey.app.manifest.version , e)
                        throw e;
                    }
                }
            }
        } catch (e) {
            throw e;
        }
        return false;
    }


    /**
     * Gets an API device from the APP, cache it
     *
     * Was added as storing the entire device with in a variable, in order to reduce the calls to the API
     * which appears to have a memory leak where "something" with in there is not getting GC().
     *
     * @param id
     * @returns {Promise<*>}
     */
    async getDevice(deviceId) {
        this.logger.trace();
        try {
            return await this.homey.app.getDevice(deviceId);
        } catch (e) {
            if (e.statusCode === 404) {
                this.logger.warn('Deleted: ' + deviceId + ': device no longer exists');
            } else if (e.statusCode === 408) {
                this.logger.warn('Timeout: ' + deviceId + ': while attempting to getDevice');
            } else {
                this.error(e);
            }
            return false;
        }
    }

    /**
     * After updating the settings (ie. the mode of calculation) refresh then entire group.
     * This will reset all the listeners, change the methods as well as recreate the device and capability labels.
     *
     * @todo look at adding a value for capabilities not included and forcing it to never be able to be updated
     *
     * @param oldSettings
     * @param newSettings
     * @param changedKeys
     * @returns {Promise<void>}
     */
    async onSettings({oldSettings, newSettings, changedKeys}) {
        this.logger.trace(changedKeys, oldSettings, newSettings);

        // Update the device class
        if (changedKeys.indexOf('class') > -1){
            let deviceClass = newSettings['class'];
            if (deviceClass != undefined && deviceClass != "" && deviceClass != this.getClass()){
                await this.setClass(deviceClass);
                this.logger.info('Device class changed to: ' + deviceClass);
            }
        }

        await this.refresh(newSettings);
    }

    /**
     * On Delete, destroy the capability instances.
     */
    async onDeleted() {
        this.logger.trace();
        await this.destroyAllInstances();
        await this.destroyAllAudits();
    }

    /**
     * Destroys all of the audits for the current group
     * @returns {Promise<void>}
     */
    async destroyAllAudits() {
        this.logger.trace();
        for (let a in this.audits) {
            await this.destroyDeviceAudit(a)
        }
        this.audits = {}
    }

    /**
     *
     * @param deviceId
     * @returns {Promise<void>}
     */
    async destroyDevice(deviceId) {
        this.logger.trace(deviceId);

        // Listener exists but the device is not ready - so delete.
        await this.destroyDeviceInstances(deviceId);

        // Reset the instance back to nothing.
        this.instances[deviceId] = {};

        await this.destroyDeviceAudit(deviceId);

        this.audits[deviceId] = {};
    }

    /**
     * Removes the event listeners upon the devices.
     */
    async destroyAllInstances() {
        this.logger.trace();
        // Ensure events have been set prior to attempting to delete
        if (this.hasOwnProperty('instances')) {

            // Loop ALL instances
            for (let i in this.instances) {
                await this.destroyDeviceInstances(i);
            }
            this.instances = {};
        }
        return true;
    }

    /**
     * Removes auditing for the supplied device.
     *
     * @param deviceId
     * @returns {Promise<void>}
     */
    async destroyDeviceAudit(deviceId) {
        this.logger.trace(deviceId);
        return await clearTimeout(this.audits[deviceId]);
    }

    /**
     * Removes all instances of a capability event listeners from upon a device
     * @param deviceId the ID of the device to destroy instances for.
     * @returns {Promise<void>}
     */
    async destroyDeviceInstances(deviceId) {
        this.logger.trace(deviceId);

        if (this.instances.hasOwnProperty(deviceId)) {
            for (let i in this.capabilities) {
                // Sanity there is a possible discrepancy when a device is deleted - it will 'practically immediately'
                // be removed from the devices list, however it might not be polled yet to see if it exists.
                // You can destroy a watcher if the device has been destroyed. - though im not sure why this gets called
                if (this.instances[deviceId].hasOwnProperty(this.capabilities[i])) {
                    await this.instances[deviceId][this.capabilities[i]].destroy();
                }
            }
            this.instances[deviceId] = {};
            delete this.instances[deviceId];
        }
    }


    /**
     * Will do a simple debounce on, but instead of always waiting, will do separate debounced for each different first param
     *
     * This is useful for updating the capabilities, where (for example) and dim and power useage can be sent at the same time,
     * And we still require both values to be updated.
     *
     * @param func
     * @param wait
     * @param immediate
     * @returns {function(): void}
     */
    debounceByFirstParam(func, wait, immediate) {
        let timeouts = {};
        return function () {
            let context = this, args = arguments;
            let later = function () {
                timeouts[args[0]] = null;
                if (!immediate) func.apply(context, args);
            };
            let callNow = immediate && !timeouts[args[0]];
            clearTimeout(timeouts[args[0]]);
            timeouts[args[0]] = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };

}

module.exports = Device;

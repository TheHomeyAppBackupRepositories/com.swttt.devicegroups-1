'use strict';

const Homey = require('homey');
const Logger = require('./logger');


/**
 * Global device driver all other device drivers inherit from.
 */
class Driver extends Homey.Driver {

    /**
     * Set the default values of the current group, called onPair as onInit only occurs once.
     *
     * @returns {Promise<void>}
     */
    async refresh() {
        this.logger.trace();
        // Due to an issue where the data attribute is not sent to the webAPI, we need to save it in the settings.
        // This is so that we are able to retrieve devices fom the SDK using the data attribute from the webAPI.
        let data = {id: Math.random().toString(36).substring(7)};

        this.group = {
            name: this.name,
            class: this.class,
            icon: this.appPath + '/assets/icon.svg',
            capabilities: [],
            settings: {
                labelVersion: this.version,
                labelClass: this.class,
                debounceGroup: 0,
                debounceDevices: 0,
                wait: 0,
                tries: 1,
                logLevel: 'debug'
            },
            data: data,
            // I have added a new store called supported, in addition to the original 'devices' store.
            // The devices is an array of device IDs for this group, the supported is more complex as it defines
            // which device for which capability (advance groups).
            // @todo in the future we may want to completely migrate away from devices and rely only on the supported.
            store: {
                version: this.version,
                devices: {},
                supported: {},               // Used for fused groups.
            }
        };
    }

    /**
     * Call when driver is first initialised after the app loads.
     * Sets our defaults for us, which do not change device to device.
     */
    async onInit() {
        this.logger = new Logger('trace', 'driver:' + this.manifest.id);
        this.logger.setDebug(0);
        this.logger.trace();
        this.logger.info();

        // Define the current version, Add for future backwards compatibility checks
        this.version = this.homey.app.manifest.version;

        // Define the current application root directory by its relative path from the driver.
        this.appPath = '../../../';

        // Set the path to our icons - note in order to be useful its relative.
        this.assetPath = '/app/' + this.homey.manifest.id + '/assets/icons/categories/';

        // Assign the i18n title @todo full i18n integration Homey.__("hello", { "name": "Dave" })
        if (this.name == null) {
            this.name = '📎 ' + this.homey.__('category.' + this.class + '.title') + ' ' + this.homey.__('_.Group') + '';
        }

        await this.initIcons();
    }

    async initIcons() {
        this.icons = {};

        let icons = this.manifest.icons;

        // If the icons have been assigned use them otherwise default.
        if (icons && icons.length) {
            // Loop through and add all of the category icons.
            for (let i in icons) {
                this.icons[this.assetPath + icons[i] + '.svg'] = this.appPath + 'assets/icons/categories/' + icons[i] + '.svg';
            }
        } else {
            // Add the category icon
            this.icons['/app/' + this.homey.manifest.id + '/drivers/' + this.class + '/assets/icon.svg'] = 'icon.svg';
        }

        // Add the default icons.
        this.icons['/app/' + this.homey.manifest.id + '/assets/icon.svg'] = this.appPath + 'assets/icon.svg';
    }

    /**
     * Return all of the capabilities assigned to the category selected by the user.
     *
     * Capabilities assigned to a category (deviceClass) are a throw back home v1. While
     * they are no longer 'needed' as we can use what ever capability we like with any category.
     *
     * They still are a logical way to group capabilities (for now).
     *
     * @param data
     * @param callback
     */
    // onCapabilitiesInitialised (data) {
    //     this.logger.trace();
    //     this.group.name = this.name;
    //     this.group.settings.labelClass = this.class;

    //     let categoryCapabilities = this.homey.app.library.getCategory(this.class).capabilities;

    //     let result = {};
    //     for (let i in categoryCapabilities) {
    //         result[categoryCapabilities[i]] = this.homey.app.library.getCapability(categoryCapabilities[i]);
    //     }

    //     return result;
    // }

    /**
     * Every time the capabilities change reset which capabilities are assigned to the group.
     * ALso assign the (default) method to use to aggregate the capability results
     *
     * @param data
     * @param callback
     */
    // onCapabilitiesChanged (data) {
    // this.logger.trace();
    // this.group.settings.capabilities = {};
    // this.group.capabilities = data.capabilities;
    //
    // // Set the capability method to the default
    // for (let i in data.capabilities) {
    //     this.group.settings.capabilities[data.capabilities[i]] = {}; // reset
    //     this.group.settings.capabilities[data.capabilities[i]].method = this.homey.app.library.getCapability(data.capabilities[i]).method;
    // }
    // return this.group;
    // }

    /**
     * On devices initialisation, send the group and all Homey devices to the view.
     *
     * @param data
     * @param callback
     */
    async onDevicesInitialised(data) {
        this.logger.trace();

        let result = {
            devices: [],
            group: this.group,
            selected: [],
            totalDevices: 0
        };

        try {
            // @todo disable the devices cache for this call?
            let devices = await this.homey.app.getDevices();
                result.totalDevices = Object.keys(devices).length
                devices = await this.filterDevices(devices);

            for (let i in devices) {
                let device = devices[i];
                result.devices.push({
                    id: device.id,
                    name: device.name,
                    iconObj: device.iconObj,
                    ready:  device.ready
                })
            }

            for (let d in this.group.store.devices) {
                try {
                    // @todo return false when getDevice fails, then check it.
                    let selected = await this.homey.app.getDevice(this.group.store.devices[d]);
                    result.selected.push({
                        id: selected.id,
                        name: selected.name,
                        iconObj: selected.iconObj,
                        ready:  selected.ready
                    })
                } catch (e) {
                    if (e.statusCode && e.statusCode === 404) {
                        this.logger.warn('The device %s doesnt exist', this.group.store.devices[d])
                    } else {
                        throw e;
                    }
                }
            }
        } catch (e) {
            console.error(e);
            throw e;
        }

        return result;
    }

    /**
     * Returns a filtered list of devices which are eligible to be part of this group.
     * @param devices
     * @returns {Promise<[]>}
     */
    async filterDevices(devices) {
        let values = [];
        let uri = 'homey:app:' + this.homey.app.manifest.id
        for (let i in devices) {
            if (this.filteredDevice(devices[i])) {
                values.push(devices[i]);
            }
        }
        return values;
    }

    /**
     * Return true or false as to whether a device is eligible to be part of this group
     *
     * @param device
     * @returns {boolean}
     */
    filteredDevice(device) {

        // The device must either be the right class or have the right virtual class set.
        if (device.class !== this.class && device.virtualClass !== this.class) {
            return false;
        }

        // Dont use devices which are groups
        if (device.ownerUri === 'homey:app:' + this.homey.app.manifest.id) {
            return false;
        }

        // Only show devices which are ready
        if (!device.ready) {
            return false;
        }
        return true;
    }

    /**
     * When a device is changed, all devices are sent back to us.
     *
     * This will loop through all the devices sent and assign them into the group.store.devices.
     * Also - as devices are added, their icons are added to the property to be displayed later.
     *
     * @param data
     * @param callback
     */
    async onDevicesChanged(data) {
        this.logger.trace();
        this.group.store.devices = await this.determineDevices(data.devices);
        this.logger.debug(this.group.store.devices);
        return this.group;
    }

    async determineSupported(deviceIds, capabilities) {
        let values = {};
        for (let c in capabilities) {
            values[capabilities[c]] = [];
            for (let i in deviceIds) {
                let device = await this.homey.app.getDevice(deviceIds[i]);
                if (device.capabilities.includes(capabilities[c])) {
                    values[capabilities[c]].push(deviceIds[i]);
                }
            }
        }
        this.group.store.supported = values;
        return values;
    }

    async determineClass(deviceIds, capabilities) {
        return this.class;
    }

    async determineDevices(devices) {
        let values = [];
        for (let i in devices) {
            values.push(devices[i].id);
        }
        return values;
    }

    /**
     * Will determine which capabilities this group requires
     * @param devices
     * @returns {Promise<string[]>}
     */
    async determineCapabilities(deviceIds) {
        this.logger.trace(deviceIds);
        let unsupported = [];

        // @todo - currently this is calling get device for each capability
        for (let c in this.manifest.capabilities) {
            for (let i in deviceIds) {
                let device = await this.homey.app.getDevice(deviceIds[i]);
                if (!device.capabilities.includes(this.manifest.capabilities[c])) {
                    unsupported.push(this.manifest.capabilities[c]);
                }
            }
        }

        let value = this.manifest.capabilities.filter(item => !unsupported.includes(item));
        this.logger.info(value);
        return value;
    }


    /**
     * Delete the 'ignored' setting for any capabilities which exist. So that the fall back to the json file default.
     * @returns {Promise<{labelClass: *, labelVersion: *}>}
     */
    async determineSettings(settings) {
        this.logger.trace(settings);

        // There is something crazy, where if you save the settings the settings object becomes readonly.
        // So create a copy of the properties ( not object - which is also read only).
        let output = JSON.parse(JSON.stringify(settings));
        this.manifest.capabilities.forEach(c => {

            delete output[c];         // Delete the 'setting' in-case it was previously set.
            if (!this.group.capabilities.includes(c)) {
                output[c] = 'ignore'; // Reset the default settings to ignore as we don't have that capability
            }
        });

        this.logger.debug(output);
        return output;
    }

    /**
     * On icons initialisation, send the icons back the view.
     *
     * @param data
     * @param callback
     */
    onIconsInitialised(data) {
        this.logger.trace();
        return this.icons;
    }

    /**
     * When the icon is clicked, just update the current group icons.
     *
     * 'par.svg', '../led.svg', '../../../assets/icons/light/gu.svg', '../../../temp.svg';
     *
     * @param data
     * @param callback
     */
    onIconsChanged(data) {
        this.logger.trace(data);
        this.group.icon = data.icon;

        return true;
    }


    async onGroupInitialised(data) {
        this.logger.trace();
        try {
            this.group.capabilities = await this.determineCapabilities(this.group.store.devices);
            this.group.store.supported  =  await this.determineSupported(this.group.store.devices, this.group.capabilities);
            this.group.class = await this.determineClass(this.group.store.devices, this.group.capabilities);
            this.group.settings = await this.determineSettings(this.group.settings);

            // Overwrite the default class with the one determined.
            this.group.settings.labelClass = this.group.class;
            this.logger.info(this.group.store);

            return this.group;
        } catch (e) {
            console.error(e);
            throw e;
        }
    }

    /**
     * This method is called after the group has been finalised.
     *
     * Used  for the repair and not pairing itself it reset the group store devices and  capabilities
     * then refresh the device.
     *
     * @param data
     * @param device
     * @returns {Promise<void>}
     */
    async onGroupFinalised(data, device) {

        try {
            // Update which values are in the group.
            await device.setStoreValue('devices', data.store.devices);
            await device.setStoreValue('supported', data.store.supported);

            await device.updateDevicesLabel();

            // Run through the capabilities and update them all.
            let oldCapabilities = device.capabilities;
            let newCapabilities = this.group.capabilities

            let removedCapabilities = oldCapabilities.filter(x => !newCapabilities.includes(x));
            this.logger.warn('deleted.group.finalised', removedCapabilities); // When adding capabilities  - this has all new capabilities
            for (let i in removedCapabilities) {
                if (device.hasCapability(removedCapabilities[i])) {
                    await device.removeCapability(removedCapabilities[i]);
                }
            }

            let addedCapabilities = newCapabilities.filter(x => !oldCapabilities.includes(x));
            this.logger.warn('added.group.finalised', addedCapabilities); // When adding capabilities  - this has all new capabilities
            for (let i in addedCapabilities) {
                if (!device.hasCapability(addedCapabilities[i])) {
                    await device.addCapability(addedCapabilities[i]);
                }
            }
            await device.updateDevicesLabel();
            await device.refresh();
        } catch (e) {
            this.error(e);
        }
    }




    onPair(session) {
        this.logger.trace();

        // Set our default values.
        this.refresh();

        session.setHandler("devices.initialised", async (data) => {
            this.logger.trace('devices.initialised');
            return this.onDevicesInitialised(data);
        });

        session.setHandler("devices.changed", async (data) => {
            this.logger.trace('devices.changed');
            return this.onDevicesChanged(data);
        });

        session.setHandler("icons.initialised", async (data) => {
            this.logger.trace('icons.initialised');
            return this.onIconsInitialised(data);
        });

        session.setHandler("icons.changed", async (data) => {
            this.logger.trace('icons.changed');
            return this.onIconsChanged(data);
        });

        session.setHandler("group.initialised", async (data) => {
            this.logger.trace('group.initialised');
            return this.onGroupInitialised(data);
        });

        session.setHandler("notice.initialised", async (data) => {
            return this.homey.__('notice.' + this.manifest.id );
        });
    }

    async onRepair(session, device) {
        await this.refresh();
        this.logger.debug(device.getName())

        this.group.settings = device.settings;
        this.group.store =  device.store;
        this.group.data = device.data;
        this.group.capabilities = device.capabilities;
        this.group.name = device.getName();

        session.setHandler("devices.initialised", async (data) => {
            this.logger.trace('devices.initialised');
            return this.onDevicesInitialised(data);
        });

        session.setHandler("devices.changed", async (data) => {
            this.logger.trace('devices.changed');
            return this.onDevicesChanged(data);
        });

        session.setHandler("group.initialised", async (data) => {
            this.logger.trace('group.initialised');
            return await this.onGroupInitialised(data);
        });

        session.setHandler("group.finalised", async (data) => {
            this.logger.trace('group.finalised');
            return await this.onGroupFinalised(data, device);
        });
    }

}

module.exports = Driver;

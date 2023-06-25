'use strict';

const Group = require('../../lib/group');

class UnitedDriver extends Group.Driver {

    // 📎🧷🔗
    async onInit() {
        this.class = 'other';
        this.name = '🔗 ' + 'Fused' + ' ' + this.homey.__('_.group');
        this.supported = {};
        await super.onInit();
    }

    onPair( session ) {
        super.onPair(session);

        session.setHandler("capabilities.initialised", async (data) => {
            this.logger.trace('capabilities.initialised');
            return this.onCapabilitiesInitialised(data);
        });

        session.setHandler("capabilities.changed", async (data) => {
            this.logger.trace('capabilities.changed');
            return this.onCapabilitiesChanged(data);
        });

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
    async onCapabilitiesInitialised (data) {

        let categoryCapabilities = [];
        let capabilitiesDevices = [];
        let device = {};

        for (let i in  this.group.store.devices) {

            device = await this.homey.app.getDevice(this.group.store.devices[i]);

            for (let c in device.capabilities) {
                if (!capabilitiesDevices.hasOwnProperty(device.capabilities[c])) {
                    capabilitiesDevices[device.capabilities[c]] = [];
                }
                capabilitiesDevices[device.capabilities[c]].push(device);
            }

            categoryCapabilities = categoryCapabilities.concat(device.capabilities);
        }

        let result = {};
        for (let i in categoryCapabilities) {
            result[categoryCapabilities[i]] = {
                id: categoryCapabilities[i],
                devices: capabilitiesDevices[categoryCapabilities[i]]
            }
        }

        return result;
    }

    /**
     * Every time the capabilities change reset which capabilities are assigned to the group.
     * ALso assign the (default) method to use to aggregate the capability results
     *
     * @param data
     * @param callback
     */
    onCapabilitiesChanged (data) {
        this.logger.trace(data);

        // Remove the property
        delete this.supported[data.capabilityId];

        // If the new property exists, assign it.
        if (data.deviceId  !== 0) {
            this.supported[data.capabilityId] = [data.deviceId];
        }

        this.logger.debug(this.supported);
        return this.group;
    }

    async determineSupported(deviceIds, capabilities) {
        this.group.store.supported = this.supported;
        return this.supported;
    }

    /**
     * Will determine which capabilities this group requires as well as remove any of the
     * @param devices
     * @returns {Promise<string[]>}
     */
    async determineCapabilities(data) {
        this.logger.trace(data);
        let capabilities = Object.keys(this.supported);

        // gather the capabilities from the supported keys.
        this.capabilities = capabilities;
        this.logger.info(capabilities);
        return  capabilities;
    }

    /**
     * Delete the 'ignored' setting for any capabilities which exist. So that the fall back to the json file default.
     * @returns {Promise<{labelClass: *, labelVersion: *}>}
     */
    async determineSettings(settings) {
        this.manifest.capabilities.forEach(c => {
            delete settings[c];         // Delete the 'setting' in-case it was previously set.
            if (this.group.capabilities.includes(c)) {
                settings[c] = 'first'; // if we have the capability always set it to 'first'.
            }
        });
        return settings;
    }

    /**
     * If we have multiple devices, attempt to set the right class for them.
     *
     * Will check to see if the devices or virtual device (if selected) are all the same
     * If so - use that value, if not - use the assigned property.
     * @param deviceIds
     * @param capabilities
     * @returns {Promise<string|*>}
     */
    async determineClass(deviceIds, capabilities) {
        this.logger.trace();
        let classes = [];
        for (let i in deviceIds) {
            let device = await this.homey.app.getDevice(deviceIds[i]);
            let value = (device.virtualClass) ? device.virtualClass : device.class;

            // Overwrite with a light if its been included.
            if (value === 'light') {
                return value;
            }
            classes.push(value);
        }
        if (classes.length && classes.every( (val, i, arr) => val === arr[0] ) ) {
            this.logger.info('over riding device.class (' +this.class +') with' + classes[0]);
            return classes[0]
        }
        return this.class;
    }

    /**
     *
     * @param devices
     * @returns {Promise<[]>}
     */
    async filterDevices(devices) {
        return devices;
    }

}

module.exports = UnitedDriver;

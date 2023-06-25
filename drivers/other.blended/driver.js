'use strict';

const Group = require('../../lib/group');

class BlendedDriver extends Group.Driver {

    // 📎🧷🔗
    async onInit() {
        this.class = 'other';
        this.name = '🧷 ' + 'Blended' + ' ' + this.homey.__('_.group');
        await super.onInit();
    }

    /**
     * Will determine which capabilities this group requires as well as remove any of the
     * @param devices
     * @returns {Promise<string[]>}
     */
    async determineCapabilities(deviceIds) {
        this.logger.trace(deviceIds);
        let capabilities = [];

        // Loop through each of the devices, and tally which capabilities we require.
        for (let i in deviceIds) {
            let device = await this.homey.app.getDevice(deviceIds[i]);
            this.manifest.capabilities.forEach(c => {
                if (device.capabilities.includes(c)) {
                    capabilities[c] = true;
                }
            });
        }
        this.logger.info(capabilities);
        return  Object.keys(capabilities);
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

module.exports = BlendedDriver;

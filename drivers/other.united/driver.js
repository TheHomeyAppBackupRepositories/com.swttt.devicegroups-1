'use strict';

const Group = require('../../lib/group');

class UnitedDriver extends Group.Driver {

    // 📎🧷🔗
    async onInit() {
        this.class = 'other';
        this.name = '📎 ' + 'United' + ' ' + this.homey.__('_.group');
        await super.onInit();
    }

    // united groups are for advance users, let them use what ever device they want.
    async filterDevices(devices) { return devices; }

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

}

module.exports = UnitedDriver;

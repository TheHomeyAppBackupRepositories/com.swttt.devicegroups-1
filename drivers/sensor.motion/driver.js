'use strict';

const Group = require('../../lib/group');

class SensorMotionDriver extends Group.Driver {

    onInit() {
        this.class = 'sensor';
        this.name = '📎 ' + 'Motion Sensor' + ' ' + this.homey.__('_.group');
        super.onInit();
    }

    /**
     * Return true or false as to whether a device is eligible to be part of this group
     * @param device
     * @returns {boolean}
     */
    filteredDevice(device) {

        // override statement - always show selected devices.
        if (this.group.store.devices.length && this.group.store.devices.includes(device.id)) {
            return true;
        }

        // Run over the normal checks.
        if (!super.filteredDevice(device)) {
            return false;
        }

        // Also make sure that the device has a contact_alarm
        if (!device.capabilities.includes('alarm_motion')) {
            return false;
        }

        return true;
    }


}

module.exports = SensorMotionDriver;

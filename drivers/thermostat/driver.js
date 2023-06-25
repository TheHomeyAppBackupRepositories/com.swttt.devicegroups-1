'use strict';

const Group = require('../../lib/group');

class ThermostatDriver extends Group.Driver {

    onInit() {
        this.class = 'thermostat';
        super.onInit();
    }
}

module.exports = ThermostatDriver;

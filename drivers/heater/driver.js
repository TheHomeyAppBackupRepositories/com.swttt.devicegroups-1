'use strict';

const Group = require('../../lib/group');

class HeaterDriver extends Group.Driver {

    onInit() {
        this.class = 'heater';
        super.onInit();
    }
}

module.exports = HeaterDriver;

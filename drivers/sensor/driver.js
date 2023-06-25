'use strict';

const Group = require('../../lib/group');

class SensorDriver extends Group.Driver {

    onInit() {
        this.class = 'sensor';
        super.onInit();
    }
}

module.exports = SensorDriver;

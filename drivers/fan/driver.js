'use strict';

const Group = require('../../lib/group');

class FanDriver extends Group.Driver {

    onInit() {
        this.class = 'fan';
        super.onInit();
    }
}

module.exports = FanDriver;

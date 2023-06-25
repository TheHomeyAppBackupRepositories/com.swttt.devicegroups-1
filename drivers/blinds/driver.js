'use strict';

const Group = require('../../lib/group');

class BlindsDriver extends Group.Driver {

    onInit() {
        this.class = 'blinds';
        super.onInit();
    }
}

module.exports = BlindsDriver;

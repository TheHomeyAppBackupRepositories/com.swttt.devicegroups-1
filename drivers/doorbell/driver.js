'use strict';

const Group = require('../../lib/group');

class DoorbellDriver extends Group.Driver {

    onInit() {
        this.class = 'doorbell';
        super.onInit();
    }
}

module.exports = DoorbellDriver;

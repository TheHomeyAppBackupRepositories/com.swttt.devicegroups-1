'use strict';

const Group = require('../../lib/group');

class LockDriver extends Group.Driver {

    onInit() {
        this.class = 'lock';
        super.onInit();
    }
}

module.exports = LockDriver;


'use strict';

const Group = require('../../lib/group');

class WindowCoveringsDriver extends Group.Driver {

    onInit() {
        this.class = 'windowcoverings';
        super.onInit();
    }
}

module.exports = WindowCoveringsDriver;

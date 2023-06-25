'use strict';

const Group = require('../../lib/group');

class HomealarmDriver extends Group.Driver {

    onInit() {
        this.class = 'homealarm';
        super.onInit();
    }
}

module.exports = HomealarmDriver;

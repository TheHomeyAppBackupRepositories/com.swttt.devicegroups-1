'use strict';

const Group = require('../../lib/group');

class OtherDriver extends Group.Driver {

    onInit() {
        this.class = 'other';
        super.onInit();
    }
}

module.exports = OtherDriver;

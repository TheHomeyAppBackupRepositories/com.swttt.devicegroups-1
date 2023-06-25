'use strict';

const Group = require('../../lib/group');

class KettleDriver extends Group.Driver {

    onInit() {
        this.class = 'kettle';
        super.onInit();
    }
}

module.exports = KettleDriver;

'use strict';

const Group = require('../../lib/group');

class RemoteDriver extends Group.Driver {

    onInit() {
        this.class = 'remote';
        super.onInit();
    }
}

module.exports = RemoteDriver;

'use strict';

const Group = require('../../lib/group');

class SocketDriver extends Group.Driver {

    onInit() {
        this.class = 'socket';
        super.onInit();
    }
}

module.exports = SocketDriver;

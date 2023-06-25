'use strict';

const Group = require('../../lib/group');

class GaragedoorDriver extends Group.Driver {

    onInit() {
        this.class = 'garagedoor';
        super.onInit();
    }
}

module.exports = GaragedoorDriver;


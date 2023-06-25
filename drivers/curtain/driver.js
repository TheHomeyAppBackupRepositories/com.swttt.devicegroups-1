'use strict';

const Group = require('../../lib/group');

class CurtainDriver extends Group.Driver {

    onInit( ) {
        this.class = 'curtain';
        super.onInit();
    }
}

module.exports = CurtainDriver;

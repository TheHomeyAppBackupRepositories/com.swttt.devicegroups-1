'use strict';

const Group = require('../../lib/group');

class LightDriver extends Group.Driver {

    onInit() {
        this.class = 'light';
        super.onInit();
        this.logger.setDebug(true);
    }
}

module.exports = LightDriver;

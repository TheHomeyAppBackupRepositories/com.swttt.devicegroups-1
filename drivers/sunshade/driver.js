'use strict';

const Group = require('../../lib/group');

class SunshadeDriver extends Group.Driver {

    onInit() {
        this.class = 'sunshade';
        super.onInit();
    }
}

module.exports = SunshadeDriver;


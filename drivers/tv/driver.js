'use strict';

const Group = require('../../lib/group');

class TvDriver extends Group.Driver {

    onInit() {
        this.class = 'tv';
        super.onInit();
    }
}

module.exports = TvDriver;

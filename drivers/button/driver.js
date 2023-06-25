'use strict';

const Group = require('../../lib/group');

class ButtonDriver extends Group.Driver {

    onInit() {
        this.class = 'button';
        super.onInit();
    }

}

module.exports = ButtonDriver;

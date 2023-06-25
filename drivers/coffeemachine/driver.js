'use strict';

const Group = require('../../lib/group');

class CoffeemachineDriver extends Group.Driver {

    onInit() {
        this.class = 'coffeemachine';
        super.onInit();
    }
}

module.exports = CoffeemachineDriver;

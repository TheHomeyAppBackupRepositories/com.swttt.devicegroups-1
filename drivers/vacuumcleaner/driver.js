'use strict';

const Group = require('../../lib/group');

class VacuumcleanerDriver extends Group.Driver {

    onInit() {
        this.class = 'vacuumcleaner';
        super.onInit();
    }
}

module.exports = VacuumcleanerDriver;

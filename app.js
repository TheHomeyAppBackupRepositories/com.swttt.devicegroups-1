'use strict';
const Homey = require('homey');
const { HomeyAPI } = require('homey-api');
const { Log } = require('homey-log');

const Logger = require('./lib/logger');

class Groups extends Homey.App {

    async onInit() {

        this.sentry = await new Log({ homey: this.homey });
        this.logger = new Logger('info', 'app');
        this.logger.setDebug(process.env.DEBUG);
        this.logger.info('Starting Application');

        // Prime the API into memory, set its events.
        this.cache();

        // Initialise the devices objects.
        this.devices = {};
    }

    /**
     * IF the API hasn't been set, get it otherwise just returned cached API for current homey.
     * @todo change to a getter? Or could just be initiatlised rather then use a singleton pattern
     * @returns {object}
     */
    async getApi() {
        if (!this.api) {
            this.api = await HomeyAPI.createAppAPI({
                homey: this.homey,
            });
            await this.api.devices.connect();
        }
        return this.api;
    }


    /**
     * Gets all API devices from the Homey
     *
     * @todo should this be cached?
     *
     * @param id
     * @returns {Promise<*>}
     */
    async getDevices() {
        this.logger.trace();
        const api = await this.getApi();
        let devices = await api.devices.getDevices();
        return devices;
    }


    /**
     * Gets an API device from the APP, cache it
     *
     * Was added as storing the entire device with in a variable, in order to reduce the calls to the API
     *
     * @param id
     * @returns {Promise<*>}
     */
    async getDevice(id) {
        if (!this.devices[id]) {
            let api = await this.getApi();
            let devices = await api.devices;

	        this.devices[id] = await devices.getDevice({
	            id: id
            });
        }

        return this.devices[id];
    }


    /**
     * Primes the cache - then set watchers of when to clear it.
     *
     * When ever a device is added/deleted from Home, ensure that the cache is cleared
     * so we can then add the new devices to a group, or stop old device from being added.
     *
     * Will also reset the cache when we add a new group (as it is a device).
     */
    cache() {
        this.logger.trace();
        this.getApi().then((api) => {

            // When a new device is added to homey, clear the cache
            api.devices.on('device.create', async (device) => {
                this.logger.info('device.create: ' + device.name);
                this.api = false;
            });

            // when a device is deleted from homey, clear the cache.
            api.devices.on('device.delete', async (device) => {
                this.logger.info('device.delete: ' + device.id);
                this.devices[device.id] = false;
                this.api = false;
            });
        })

    }
}

module.exports = Groups;

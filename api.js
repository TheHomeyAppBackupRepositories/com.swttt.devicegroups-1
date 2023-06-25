const Homey = require('homey');

module.exports = [
  {
    // Get a list of all devices.
    method : 'GET',
    path   : '/devices',
    fn     : async (args) => {
      let devices = await Homey.app.getDevices();
      return Object.values(devices);
    }
  },
  {
    // Get the library helper
    method : 'GET',
    path   : '/library',
    fn     : async (args) => {
      return await Homey.app.library.getJSON();
    }
  },
  {
    // We cant save the settings using  await api.devices.setDeviceSettings({id: args.params.id, settings: args.body});
    // As the SDK doesnt have this scope to the webAPI.
    method : 'PUT',
    path   : '/settings/:driver',
    fn     : async (args) => {
      let group = await Homey.ManagerDrivers.getDriver(args.params.driver).getDevice(args.body.data);
      let result = await group.setSettings(args.body.settings);

      console.log('<api put /settings/:driver[' + args.params.driver + ']  calling refresh (' + args.body.name  + ')');
      await group.refresh();
      return result;
    }
  }
]

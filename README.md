
# Group

With this app you can group devices with the same capabilities as one device.

1. After installing, to add a new Group, click  + (add) upon the devices tab select " &lt; group &gt;".
2. Now select the group device's class. (e.g. Light).
3. You will now see all the capabilities supported by this class. Chose the ones you need. (e.g. Turned on" and "Dim level", "Temperature" ).
4. Displayed upon the next page are all devices that have *all* the capabilities you selected, simply select the devices you want to group.
5. On the final page you change change the icon of the device if you would like, or select next to use the default &lt; group &gt; icon.
6. Now you have one device to control all the grouped devices.

### Settings

There are two sets of settings associated with device groups, first the settings are available from the group, which offers overview information only.The second more important method can be accessed from the application settings, [More -> Settings -> &lt; group &gt;]

From with in the settings you can not only update which devices are in which groups, but you also have much more control on how the group will report information back to you.

For example, should a group which consists of contact sensors trigger when one contact sensor alarms or when all of them do? Or perhaps you would like a group of temperature sensors to show the minimum value rather then the average.

Open up the settings, click upon the group category (eg. sensor or light) all the groups of that type will show. Click upon the group you would like to edit.

### Contributions

This app is based off of the original 'Device Groups' app by Swttt for Homey v1.

### Changelog

##### 2.2

- 2.2.1
    - QuickFix for #30, show deleted items as deleted
    - Added i18n for deleted.
    - On device deleted remove cached item
    - Check if device deleted in polling
    - Update i18n (en) settings.sorry -> settings.empty
    - show deleted devices with in the settings, allow them to be removed
    - Don't update capability of deleted devices
    - Stop polling deleted devices.
    - Add deleted/offline icons/not ices with in settings.


##### 2.1

- 2.1.7
    - NL transactions, pairing fixes.
    - Code consolidation and clean up
    - Remove superfluous information from library
    - Fixes (#26)
    - Remove debug logging, clean up other logging.
    - Update read me
    - Remove relay device/driver

- 2.1.6
    - Add Polling timeouts which will query all devices checking to see if they are available.(#19)
    - Update pairing to use standard icon/overlay. (#3)
    - Tag for release
    - remove custom styles from pair templates
    - debug empty capability
    - add pair text to i18n.
    - add pair capability text to i18n.
    - Hide next button if no capabilities are selected
    - Hide next button if no devices are selected
    - Better empty device message.
    - i18n Default Name
    - Fix for i18n Default Name

- 2.1.5
    - Settings : Add settings Breadcrumbs
    - App : Change App Icon/Image
    - Settings : Change settings to use devicegroups appID
    - Repo : Add ChangeLog
    - Remove settings data hack, as fixed by Athom v2.0-rc12
    - Settings : Hide breadcrumbs if there are no groups.
    - Settings : Hide the current group from the list of devices.
    - Settings : Remove call to hack for #4.
    - Settings : Set all scripts/styles to local, remote fontawesome.
    - Settings : Consolidate vue version
    - Settings : Add jquery
    - Move all assets to correct folder locations
    - Clean up icon SVG file.
    - Pair : Conciliate script files.

- 2.1.4 : Save Settings back to devices
- 2.1.3 : Set methods and pull values up.
- 2.1.2 : Convert settings to full webAPI implementation.
- 2.1.1 : Settings UX and concept
- 2.1.0 : Update settings to use new i18n subsystem.

##### 2.0

- 2.0.2
    - Add calculation method for alarm_generic
    - Publish Alpha
    - Re-supply logo
    - Fix .gitattribute issue
    - Update logo image.
    - Fix type on 'speaker'
    - Fix #6 - wrong average formula
    - Increase button icon size.
    - Fix wrong logo used in beta branch
    - Fix driver icon
    - Beta - Release

- 2.0.1 : Prep for beta
    -  Update app ID to device groups.
    -  Testing and fixes.
    -  Add devices icons.
    -  Update remote & home energy icons
    -  Updated APPSTORE and added temp app image.
    -  Disabled changing a devices settings.
    -  Changed code base to use .homeycomposer
    -  Reliability, Stability and Performance
    -  Removed support for using am existing devices icon.
    -  Added support for choosing an icon.
    -  Pushed additional devices for testing.
    -  Standardised the classes and inheritance.
    -  Updated code to use the new makeCapabilityInstance
    -  Keeps track created/deleted devices refreshes device cache
    -  Reliability, Stability and Performance
    -  Update app to require Homey v2
    -  Updated code base to Homey v2 Spec

- 2.0.0 : Feedback on device status
    - Added Ability to group read only capabilities.
    - Allow device status to be calculated from grouped devices
    - Device Classes (Categories) & Capabilities will now display correct name rather than tag.
    - Device Classes (Categories) & Capabilities now support en/nl languages.
    - Addition of all new categories
    - Addition of all new capabilities
    - Groups will now refresh and update their devices immediately when changed in the settings, rather then waiting for  restart.
    - Added class and capabilities to the device settings page, with in devices, Read Only.
    - Change calculated method from the settings
    - Added the ability to store your notes against a device group.
    - Added i18n support to the device settings page labels, currently support en only.

##### 1.1

- 1.1.0 : Change grouped devices via settings

##### 1.0

- 1.0.0 : Ability to group settable devices

**2.4.300**
- Fix for adding new devices in v5. 

**2.4.202**
- Update logging format [group]<action>message</action>

**2.4.201**
- Retry when changes capability value fails
- Update error logging
- Add the ability to delay setting values inside a group

**2.4.200**
- Remove redundant 'states' variable,
- Update initValues to loop through each capability and call same code as state change
- Add call to update a value when ever the device with in the group change status (go offline or come online)

**2.4.101**
- Fixes to DE language
- SV updates 

**2.4.100**
- Lay ground work for allowing groups to be delayed
- New settings structure separating out set/get/about in .homeycompose
- New settings for setting a device capability value.

**2.3.202**
- Update athom-api@2.1.179

**2.3.201**
- Attempt to fix issue #40, remove sanity check before updating capabilities. 

**2.3.102**
- Move Other Icons
- Move Alarm to its own category

**2.3.100**
- Introduce German Language
- Add other class
- Add additional 'other' icons. 
- Speed enhancement

**2.2.202**
- Add alarm icon
- Add door/window icons to repo
- remote meters from alarm category. 

**2.2.201**
- Add alarm category

**2.2.103**
- Use html entities with in appstore.md
- Re-introduce image, kibbling 10% more visible. 

**2.2.102**
- Deploy

**2.2.101**
- Fix to device class label on create incorrectly being device.name
- Update WebAPI
- Fixes for deleted items
- Even tracking when a device is deleted

**2.2.100**
- QuickFix for #30, show deleted items as deleted
- Added i18n for deleted.
- On device deleted remove cached item
- Check if device deleted in polling
- Update i18n (en) settings.sorry -> settings.empty
- show deleted devices with in the settings, allow them to be removed
- Don't update capability of deleted devices
- Stop polling deleted devices.
- Add deleted/offline icons/not ices with in settings.

**2.1.707**
- New large/small appstore image

**2.1.707**
- Remove relay device/driver

**2.1.706**
- Update readme.

**2.1.705**
- Comment code
- Remove superfluous method/category titles and descriptions.
- Code consolidation and clean up

**2.1.704**
- Complete category translations

**2.1.703**
- Implement nl language

**2.1.702**
- Rebuild app.json

**2.1.701**
- Update the webAPI package
- Set NL app name

**2.1.609**
- Fix for i18n Default Name

**2.1.608**
- i18n Default Name

**2.1.607**
- Better empty device message.

**2.1.606**
- Hide next button if no capabilities are selected
- Hide next button if no devices are selected

**2.1.605**
- add pair capability text to i18n.

**2.1.604**
- add pair text to i18n.

**2.1.603**
- remove custom styles from pair templates
- debug empty capability

**2.1.601**
- Tag for release

**2.1.600**
- Add Polling timeouts which will query all devices checking to see if they are available.(#19)
- Update pairing to use standard icon/overlay. (#3)

**2.1.514**
- Move all assets to correct folder locations
- Clean up icon SVG file.
- Pair : Conciliate script files.

**2.1.513**
- Settings : Consolidate vue version
- Settings : Add jquery

**2.1.512**
- Settings : Set all scripts/styles to local, remote fontawesome.

**2.1.511**
- Settings : Remove call to hack for #4.

**2.1.510**
- Settings : Hide the current group from the list of devices.

**2.1.509**
- Settings : Hide breadcrumbs if there are no groups.

**2.1.508**
- Repo : Add ChangeLog
- Remove settings data hack, as fixed by Athom v2.0-rc12

**2.1.507**
- Settings : Change settings to use devicegroups appID

**2.1.503**
- App : Change App Icon/Image

**2.1.500**
- Settings : Add settings Breadcrumbs

**2.1.400**
- Settings : Save settings to the device settings.

**2.1.300**
- Settings : Set methods and pull values up.

**2.1.200**
- Settings : Convert settings to full webAPI implementation.

**2.1.100**
- Settings : Settings UX and concept

**2.1.000**
- Settings :  Update settings to use new i18n subsystem.

**2.0.210**
- Add calculation method for alarm_generic

**2.0.209**
- Publish Alpha

**2.0.208**
- Re-supply logo

**2.0.207**
- Fix .gitattribute issue

**2.0.206**
- Update logo image**

**2.0.205**
- Fix type on 'speaker'

**2.0.204**
- Fix #6 - wrong average formula

**2.0.203**
- Increase button icon size.

**2.0.202**
- Fix wrong logo used in beta branch

**2.0.201**
- Fix driver icon

**2.0.200**
- Beta - Release

**2.0.111**
- Prep for beta

**2.0.110**
- Update app ID to device groups.

**2.0.109**
- Testing and fixes.

**2.0.108**
- Add devices icons.
- Update remote & home energy icons

**2.0.107**
- Updated APPSTORE and added temp app image.
- Disabled changing a devices settings.
- Changed code base to use .homeycomposer

**2.0.106**
- Reliability, Stability and Performance
- Removed support for using am existing devices icon.

**2.0.105**
- Added support for choosing an icon.
- Pushed additional devices for testing.

**2.0.104**
- Standardised the classes and inheritance.

**2.0.103**
- Updated code to use the new makeCapabilityInstance

**2.0.102**
- Keeps track created/deleted devices refreshes device cache

**2.0.101**
- Reliability, Stability and Performance
- Update app to require Homey v2
- Updated code base to Homey v2 Spec

**2.0.000**
- Feedback on device status
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

// Mock the homey during testing.
let library = {
    categories: {
        amplifier : {
            "id" : "amplifier",
            "title": {
                "en": "Amplifier",
                "nl": "Versterker"
            },
            "description": {
                "en": "Use this device class for audio amplifier devices.",
                "nl":  "N/A"
            },
            "icons" : [
                "amplifier/standard",
                "amplifier/standard/right"
            ],
            "capabilities" : [
                "onoff",
                "volume_set",
                "volume_mute",
                "volume_up",
                "volume_down"
            ]
        },
        blinds: {
            "id" : "blinds",
            "title": {
                "en": "Blinds",
                "nl": "Jaloezieën & Lamellen"
            },
            "description": {
                "en": "Use this device class for blinds, both horizontal and vertical.",
                "nl":  "N/A"
            },
            "icons" : [
                "blinds/standard"
            ],
            "capabilities" : [
                "onoff",
                "dim",
                "windowcoverings_state",
                "windowcoverings_tilt_up",
                "windowcoverings_tilt_down",
                "windowcoverings_tilt_set",
                "windowcoverings_closed",
                "windowcoverings_set"
            ]
        },
        button: {
            "id" : "button",
            "title": {
                "en": "Button",
                "nl": "Knop"
            },
            "description": {
                "en": "Use this device class for buttons, and other items which do not have a state.",
                "nl":  "N/A"
            },
            "icons" : [
                "button/standard",
                "button/standard/rounded",
                "button/standard/square",
                "button/standard/toggle"
            ],
            "capabilities" : [
                "button"
            ]
        },
        coffeemachine: {
            "id" : "coffeemachine",
            "title": {
                "en": "Coffee machine",
                "nl": "Koffiemachine"
            },
            "description": {
                "en": "Use this device class for coffee machines.",
                "nl": "N/A"
            },
            "icons" : [
                "coffeemachine/standard"
            ],
            "capabilities" : [
                "onoff",
                "target_temperature",
                "measure_temperature"
            ]
        },
        doorbell: {
            "id": "doorbell",
        },
        fan: {
            "id": "fan",
        },
        heater: {
            "id": "heater",
        },
        homealarm: {
            "id": "homealarm",
        },
        kettle: {
            "id": "kettle",
        },
        light: {
            "id": "light",
        },
        lock: {
            "id": "lock",
        },
        relay: {
            "id": "relay",
        },
        sensor: {
            "id": "sensor",
        },
        socket: {
            "id": "socket",
        },
        speaker: {
            "id": "speaker",
        },
        thermostat: {
            "id": "thermostat",
        },
        tv: {
            "id": "tv",
        },
        vacuumcleaner: {
            "id": "vacuumcleaner",
        },
        windowcoverings: {
            "id": "windowcoverings",
        }
    },
    capabilities: {
        "onoff": {
            "type": "boolean",
            "title": {
                "en": "Turned on",
                "nl": "Aangezet"
            },
            "description": {
                "en": "Whether a device is on or off.",
                "nl": "N/A"
            },
            "getable": true,
            "setable": true,
            "method": "any",
            "available": [
                "ignore",
                "any",
                "all",
                "most",
                "always",
                "never"
            ]
        },
        "dim": {
            "type": "number",
            "title": {
                "en": "Dim level",
                "nl": "Dim niveau"
            },
            "description": {
                "en": "Dims level of a device as a percentage of its full value",
                "nl": "N/A"
            },
            "min": 0,
            "max": 1,
            "decimals": 2,
            "units": "%",
            "getable": true,
            "setable": true,
            "method" : "mean",
            "available" : [
                "ignore",
                "mean",
                "median",
                "lowest",
                "highest"
            ]
        },
        "light_hue": {},
        "light_saturation": {},
        "light_temperature": {},
        "light_mode": {},
        "vacuumcleaner_state": {},
        "thermostat_mode": {},
        "target_temperature": {},
        "measure_temperature": {},
        "measure_co": {},
        "measure_co2": {},
        "measure_pm25": {},
        "measure_humidity": {},
        "measure_pressure": {},
        "measure_noise": {},
        "measure_rain": {},
        "measure_wind_strength": {},
        "measure_wind_angle": {},
        "measure_gust_strength": {},
        "measure_gust_angle": {},
        "measure_battery": {},
        "measure_power": {
            "type": "number",
            "title": {
                "en": "Power",
                "nl": "Energie"
            },
            "description": {
                "en": "Power in Watt (W)",
                "nl": "Vermogen in Watt (W)"
            },
            "units": {
                "en": "W"
            },
            "decimals": 2,
            "getable": true,
            "setable": false,
            "method" : "sum",
            "available" : [
                "sum",
                "mean",
                "median",
                "lowest",
                "highest"
            ]
        },
        "measure_voltage": {},
        "measure_current": {},
        "measure_luminance": {},
        "measure_ultraviolet": {},
        "measure_water": {},
        "alarm_generic": {},
        "alarm_motion": {},
        "alarm_contact": {},
        "alarm_co": {},
        "alarm_co2": {},
        "alarm_pm25": {},
        "alarm_tamper": {},
        "alarm_smoke": {},
        "alarm_fire": {},
        "alarm_heat": {},
        "alarm_water": {},
        "alarm_battery": {},
        "alarm_night": {},
        "meter_power": {
            "type": "number",
            "title": {
                "en": "Power Meter",
                "nl": "Energiemeter"
            },
            "description": {
                "en": "Power usage in KiloWattHour (kWh)",
                "nl": "Stroomverbuik in KiloWattUur (kWh)"
            },
            "decimals": 2,
            "units": {
                "en": "KWh"
            },
            "getable": true,
            "setable": false,
            "method" : "sum",
            "available" : [
                "sum"
            ]
        },
        "meter_water": {},
        "meter_gas": {},
        "meter_rain": {},
        "homealarm_state": {},
        "volume_set": {},
        "volume_up": {},
        "volume_down": {},
        "volume_mute": {},
        "channel_up": {},
        "channel_down": {},
        "locked": {},
        "lock_mode": {},
        "windowcoverings_state": {},
        "windowcoverings_tilt_up": {},
        "windowcoverings_tilt_down": {},
        "windowcoverings_tilt_set": {},
        "windowcoverings_closed": {},
        "windowcoverings_set": {},
        "button": {},
        "speaker_playing": {},
        "speaker_next": {},
        "speaker_prev": {},
        "speaker_shuffle": {},
        "speaker_repeat": {},
        "speaker_artist": {},
        "speaker_album": {},
        "speaker_track": {},
        "speaker_duration": {},
        "speaker_position" : {}

    },
    methods : {
        "mean": {
            "title": {
                "en": "Mean Average",
                "nl": "Gemiddeld"
            },
            "description": {
                "en": "The average your are used to (sum/count)",
                "nl": "N/A"
            },
            "value": "mean",
            "function": "mean"
        },
        "median": {
            "title": {
                "en": "Median Average",
                "nl": "Mediaan"
            },
            "description": {
                "en": "The value of the device in the middle",
                "nl": "N/A"
            },
            "value": "median",
            "function": "median"
        },
        "mode": {
            "title": {
                "en": "Mode Average",
                "nl": "Modus Gemiddeld?"
            },
            "description": {
                "en": "The value which the most devices has",
                "nl": "N/A"
            },
            "value": "mode",
            "function": "mode"
        },
        "min": {
            "title": {
                "en": "Minimum Value",
                "nl": "Minimale waarde"
            },
            "description": {
                "en": "The value of the device with the smallest value",
                "nl": "N/A"
            },
            "value": "min",
            "function": "min"
        },
        "max": {
            "title": {
                "en": "Maximum value",
                "nl": "Maximale waarde"
            },
            "description": {
                "en": "The value of the device with the largest value",
                "nl": "N/A"
            },
            "value": "max",
            "function": "max"
        },
        "sum": {
            "title": {
                "en": "Total Value",
                "nl": "Totale waarde"
            },
            "description": {
                "en": "The sum of all the grouped device values",
                "nl": "N/A"
            },
            "value": "sum",
            "function": "sum"
        },
        "all": {
            "title": {
                "en": "On if All",
                "nl": "On if All"
            },
            "description": {
                "en": "On if all devices are on. otherwise off",
                "nl": "N/A"
            },
            "value": "all",
            "function": "min"
        },
        "any": {
            "title": {
                "en": "On if Any",
                "nl": "On if Any"
            },
            "description": {
                "en": "On if any devices are on",
                "nl": "N/A"
            },
            "value": "any",
            "function": "max"
        },
        "most": {
            "title": {
                "en": "Most Devices",
                "nl": "On if Most"
            },
            "description": {
                "en": "On if at least half devices are on",
                "nl": "N/A"
            },
            "value": "median",
            "function": "median"
        },
        "none": {
            "title": {
                "en": "On if None",
                "nl": "On if None"
            },
            "description": {
                "en": "Off if all devices on. otherwise on",
                "nl": "N/A"
            },
            "function": "nand"
        },
        "highest": {
            "title": {
                "en": "Highest Value",
                "nl": "høyeste verdi"
            },
            "description": {
                "en": "The highest value of the all the grouped device",
                "nl": "N/A"
            },
            "value": "highest",
            "function": "max"
        },
        "lowest": {
            "title": {
                "en": "Lowest Value",
                "nl": "Laveste verdi"
            },
            "description": {
                "en": "The lowest value of the all the grouped device",
                "nl": "N/A"
            },
            "value": "lowest",
            "function": "min"
        },
        "always": {
            "title": {
                "en": "Always On",
                "nl": "Always On"
            },
            "description": {
                "en": "Always returns to on",
                "nl": "N/A"
            },
            "value": "always",
            "function": "always"
        },
        "never": {
            "title": {
                "en": "Never On",
                "nl": "Never On"
            },
            "description": {
                "en": "Never on, always returns to off",
                "nl": "N/A"
            },
            "value": "never",
            "function": "never"
        },
        "ignore": {
            "title": {
                "en": "Ignore Devices",
                "nl": "Ignore Devices"
            },
            "description": {
                "en": "Don't update, only use values set by the card",
                "nl": "N/A"
            },
            "value": "ignore",
            "function": "ignore"
        }
    }

};

let devices = {
    "7a9094b7-249a-4b88-81e3-74031ae0cb44": {
        "__athom_api_type": "HomeyAPI.ManagerDevices.Device",
        "id": "7a9094b7-249a-4b88-81e3-74031ae0cb44",
        "name": "Homey",
        "driverUri": "homey:manager:vdevice",
        "driverId": "homey",
        "zone": "9919ee1e-ffbc-480b-bc4b-77fb047e9e68",
        "data": {},
        "icon": null,
        "iconObj": {
            "id": "f47779eceed000ae37642c777108fece",
            "url": "/icon/f47779eceed000ae37642c777108fece/icon.svg"
        },
        "settings": {},
        "settingsObj": false,
        "class": "other",
        "virtualClass": null,
        "capabilities": [],
        "capabilitiesObj": {},
        "flags": [
            "sticky",
            "homey"
        ],
        "ui": {},
        "ready": true,
        "available": true,
        "repair": false,
        "unpair": false,
        "speechExamples": [],
        "images": [],
        "insights": []
    },
    "f09ada50-c17c-4dc1-b4a6-31d2d35b2639": {
        "__athom_api_type": "HomeyAPI.ManagerDevices.Device",
        "id": "f09ada50-c17c-4dc1-b4a6-31d2d35b2639",
        "name": "Sony TV all models",
        "driverUri": "homey:manager:vdevice",
        "driverId": "ir",
        "zone": "9eb2975d-49ea-4033-8db0-105a3e982117",
        "data": {
            "id": "44dfed11-7710-47bb-b10d-658c36a1e29e",
            "type": "SIGNAL",
            "send": true,
            "receive": false,
            "version": 100
        },
        "icon": null,
        "iconObj": {
            "id": "2175d10d1f30ac7618a2c006dd3cb3d1",
            "url": "/icon/2175d10d1f30ac7618a2c006dd3cb3d1/icon.svg"
        },
        "settings": {},
        "settingsObj": false,
        "class": "tv",
        "virtualClass": null,
        "capabilities": [
            "channel_down",
            "channel_up",
            "volume_mute",
            "volume_down",
            "volume_up",
            "onoff"
        ],
        "capabilitiesObj": {
            "channel_down": {
                "value": null,
                "lastUpdated": "2018-12-06T14:45:53.816Z",
                "type": "boolean",
                "getable": false,
                "setable": true,
                "title": "Channel down",
                "desc": null,
                "units": null,
                "id": "channel_down",
                "options": {}
            },
            "channel_up": {
                "value": null,
                "lastUpdated": "2018-12-06T14:45:53.816Z",
                "type": "boolean",
                "getable": false,
                "setable": true,
                "title": "Channel up",
                "desc": null,
                "units": null,
                "id": "channel_up",
                "options": {}
            },
            "volume_mute": {
                "value": false,
                "lastUpdated": "2018-12-06T14:45:53.816Z",
                "type": "boolean",
                "getable": true,
                "setable": true,
                "title": "Volume muted",
                "desc": null,
                "units": null,
                "id": "volume_mute",
                "options": {}
            },
            "volume_down": {
                "value": null,
                "lastUpdated": "2018-12-06T14:45:53.816Z",
                "type": "boolean",
                "getable": false,
                "setable": true,
                "title": "Volume down",
                "desc": null,
                "units": null,
                "id": "volume_down",
                "options": {}
            },
            "volume_up": {
                "value": null,
                "lastUpdated": "2018-12-06T14:45:53.816Z",
                "type": "boolean",
                "getable": false,
                "setable": true,
                "title": "Volume up",
                "desc": null,
                "units": null,
                "id": "volume_up",
                "options": {}
            },
            "onoff": {
                "value": false,
                "lastUpdated": "2018-12-09T12:59:47.749Z",
                "type": "boolean",
                "getable": true,
                "setable": true,
                "title": "Turned on",
                "desc": null,
                "units": null,
                "id": "onoff",
                "options": {}
            }
        },
        "flags": [],
        "ui": {
            "quickAction": "onoff",
            "components": [
                {
                    "id": "toggle",
                    "capabilities": [
                        "onoff"
                    ]
                },
                {
                    "id": "button",
                    "capabilities": [
                        "channel_down",
                        "channel_up",
                        "volume_mute",
                        "volume_down",
                        "volume_up"
                    ]
                }
            ],
            "componentsStartAt": 1
        },
        "ready": true,
        "available": true,
        "repair": false,
        "unpair": false,
        "speechExamples": [
            "Switch My TV to the previous channel",
            "Switch My TV to the next channel",
            "Mute the volume of my amplifier",
            "Turn up the volume of my speaker",
            "Turn the volume of my speaker up",
            "Turn all lights on",
            "Turn off all devices",
            "Toggle all lights"
        ],
        "images": [],
        "insights": [
            {
                "uri": "homey:device:f09ada50-c17c-4dc1-b4a6-31d2d35b2639",
                "id": "onoff",
                "type": "boolean",
                "title": "Turned on",
                "titleTrue": "Turned on",
                "titleFalse": "Turned off",
                "units": null,
                "decimals": null
            }
        ],
        "color": "#CC0000"
    },
    "c855ef06-e268-459e-97ac-ead114ee4374": {
        "__athom_api_type": "HomeyAPI.ManagerDevices.Device",
        "id": "c855ef06-e268-459e-97ac-ead114ee4374",
        "name": "Scene Switch",
        "driverUri": "homey:app:com.fibaro",
        "driverId": "FGS-223",
        "zone": "b2cc9dc7-c8a1-4303-bbb0-12eeca6bf2a9",
        "data": {
            "token": "0798637a-06da-434e-a29b-6a48282345fa",
            "multiChannelNodeId": "2"
        },
        "icon": "/icon.svg",
        "iconObj": {
            "id": "6ae912856e64e1d2f4e5c7cd850cb618",
            "url": "/icon/6ae912856e64e1d2f4e5c7cd850cb618/icon.svg"
        },
        "settings": {
            "save_state": true,
            "switch_type": "2",
            "s1_power_report": 20,
            "s1_power_report_interval": 10,
            "s1_kwh_report": 1,
            "s2_power_report": 20,
            "s2_power_report_interval": 10,
            "s2_kwh_report": 1,
            "power_report_interval": 3600,
            "energie_report_interval": 3600,
            "own_power": false,
            "zw_node_id": "6.2",
            "zw_device_class_generic": "GENERIC_TYPE_SWITCH_BINARY",
            "zw_device_class_specific": "SPECIFIC_TYPE_POWER_SWITCH_BINARY"
        },
        "settingsObj": true,
        "class": "socket",
        "virtualClass": "light",
        "capabilities": [
            "onoff",
            "measure_power",
            "meter_power"
        ],
        "capabilitiesObj": {
            "onoff": {
                "value": false,
                "lastUpdated": "2018-12-17T14:06:17.349Z",
                "type": "boolean",
                "getable": true,
                "setable": true,
                "title": "Turned on",
                "desc": null,
                "units": null,
                "id": "onoff",
                "options": {}
            },
            "measure_power": {
                "value": 0,
                "lastUpdated": "2018-12-19T11:18:57.706Z",
                "type": "number",
                "getable": true,
                "setable": false,
                "title": "Power",
                "desc": "Power in Watt (W)",
                "units": "W",
                "decimals": 2,
                "chartType": "stepLine",
                "id": "measure_power",
                "options": {}
            },
            "meter_power": {
                "value": 0,
                "lastUpdated": "2018-12-19T11:19:21.771Z",
                "type": "number",
                "getable": true,
                "setable": false,
                "title": "Power Meter",
                "desc": "Power usage in KiloWattHour (kWh)",
                "units": "KWh",
                "decimals": 2,
                "chartType": "spline",
                "id": "meter_power",
                "options": {}
            }
        },
        "flags": [
            "zwave",
            "zwaveMultiChannel"
        ],
        "ui": {
            "quickAction": "onoff",
            "components": [
                {
                    "id": "toggle",
                    "capabilities": [
                        "onoff"
                    ]
                },
                {
                    "id": "sensor",
                    "capabilities": [
                        "measure_power",
                        "meter_power"
                    ]
                }
            ],
            "componentsStartAt": 1
        },
        "ready": true,
        "available": true,
        "repair": false,
        "unpair": true,
        "speechExamples": [
            "Turn all lights on",
            "Turn off all devices",
            "Toggle all lights"
        ],
        "images": [],
        "insights": [
            {
                "uri": "homey:device:c855ef06-e268-459e-97ac-ead114ee4374",
                "id": "onoff",
                "type": "boolean",
                "title": "Turned on",
                "titleTrue": "Turned on",
                "titleFalse": "Turned off",
                "units": null,
                "decimals": null
            },
            {
                "uri": "homey:device:c855ef06-e268-459e-97ac-ead114ee4374",
                "id": "measure_power",
                "type": "number",
                "title": "Power",
                "titleTrue": null,
                "titleFalse": null,
                "units": "W"
            },
            {
                "uri": "homey:device:c855ef06-e268-459e-97ac-ead114ee4374",
                "id": "meter_power",
                "type": "number",
                "title": "Power Meter",
                "titleTrue": null,
                "titleFalse": null,
                "units": "KWh"
            }
        ],
        "color": "#000000"
    },
    "7c2b75c4-fb27-4206-ada3-26950feefa95": {
        "__athom_api_type": "HomeyAPI.ManagerDevices.Device",
        "id": "7c2b75c4-fb27-4206-ada3-26950feefa95",
        "name": "Study Lamp",
        "driverUri": "homey:app:nl.philips.hue",
        "driverId": "bulb",
        "zone": "1815c884-af06-4d53-a2c1-6f4c77e9eb4e",
        "data": {
            "id": "00:17:88:01:03:88:00:38-0b",
            "bridge_id": "001788fffeae0a85"
        },
        "icon": null,
        "iconObj": {
            "id": "d1bffcb786b3a386d318c0a4052fe663",
            "url": "/icon/d1bffcb786b3a386d318c0a4052fe663/icon.svg"
        },
        "settings": {},
        "settingsObj": false,
        "class": "light",
        "virtualClass": null,
        "capabilities": [
            "onoff",
            "dim"
        ],
        "capabilitiesObj": {
            "onoff": {
                "value": false,
                "lastUpdated": "2018-12-20T02:24:36.317Z",
                "type": "boolean",
                "getable": true,
                "setable": true,
                "title": "Turned on",
                "desc": null,
                "units": null,
                "id": "onoff",
                "options": {}
            },
            "dim": {
                "value": 0.5,
                "lastUpdated": "2018-12-16T13:46:20.108Z",
                "type": "number",
                "getable": true,
                "setable": true,
                "title": "Dim level",
                "desc": null,
                "units": "%",
                "decimals": 2,
                "min": 0,
                "max": 1,
                "chartType": "stepLine",
                "id": "dim",
                "options": {
                    "opts": {
                        "duration": true
                    }
                }
            }
        },
        "flags": [],
        "ui": {
            "quickAction": "onoff",
            "components": [
                {
                    "id": "toggle",
                    "capabilities": [
                        "onoff"
                    ]
                },
                {
                    "id": "slider",
                    "capabilities": [
                        "dim"
                    ]
                }
            ],
            "componentsStartAt": 1
        },
        "ready": true,
        "available": true,
        "repair": false,
        "unpair": false,
        "unavailableMessage": null,
        "speechExamples": [
            "Turn all lights on",
            "Turn off all devices",
            "Toggle all lights",
            "Dim all lights to 50%",
            "Set My Light to full brightness"
        ],
        "images": [],
        "insights": [
            {
                "uri": "homey:device:7c2b75c4-fb27-4206-ada3-26950feefa95",
                "id": "onoff",
                "type": "boolean",
                "title": "Turned on",
                "titleTrue": "Turned on",
                "titleFalse": "Turned off",
                "units": null,
                "decimals": null
            }
        ],
        "color": "#F4AF2E"
    },
    "977bedd9-9479-49fb-a729-69952a995e98": {
        "__athom_api_type": "HomeyAPI.ManagerDevices.Device",
        "id": "977bedd9-9479-49fb-a729-69952a995e98",
        "name": "Dining Room Lamp",
        "driverUri": "homey:app:nl.philips.hue",
        "driverId": "bulb",
        "zone": "235c928c-cdaa-4930-a8c6-5a2e44de9d80",
        "data": {
            "id": "00:17:88:01:04:63:20:d4-0b",
            "bridge_id": "001788fffeae0a85"
        },
        "icon": null,
        "iconObj": {
            "id": "d1bffcb786b3a386d318c0a4052fe663",
            "url": "/icon/d1bffcb786b3a386d318c0a4052fe663/icon.svg"
        },
        "settings": {},
        "settingsObj": false,
        "class": "light",
        "virtualClass": null,
        "capabilities": [
            "onoff",
            "dim",
            "light_hue",
            "light_saturation",
            "light_temperature",
            "light_mode"
        ],
        "capabilitiesObj": {
            "onoff": {
                "value": false,
                "lastUpdated": "2018-12-20T02:24:36.382Z",
                "type": "boolean",
                "getable": true,
                "setable": true,
                "title": "Turned on",
                "desc": null,
                "units": null,
                "id": "onoff",
                "options": {}
            },
            "dim": {
                "value": 1,
                "lastUpdated": "2018-12-19T14:10:47.379Z",
                "type": "number",
                "getable": true,
                "setable": true,
                "title": "Dim level",
                "desc": null,
                "units": "%",
                "decimals": 2,
                "min": 0,
                "max": 1,
                "chartType": "stepLine",
                "id": "dim",
                "options": {
                    "opts": {
                        "duration": true
                    }
                }
            },
            "light_hue": {
                "value": 0.13,
                "lastUpdated": "2018-12-20T02:24:36.385Z",
                "type": "number",
                "getable": true,
                "setable": true,
                "title": "Hue",
                "desc": null,
                "units": null,
                "decimals": 2,
                "min": 0,
                "max": 1,
                "chartType": "stepLine",
                "id": "light_hue",
                "options": {
                    "opts": {
                        "duration": true
                    }
                }
            },
            "light_saturation": {
                "value": 0.56,
                "lastUpdated": "2018-12-20T02:24:36.387Z",
                "type": "number",
                "getable": true,
                "setable": true,
                "title": "Color Saturation",
                "desc": null,
                "units": null,
                "decimals": 2,
                "min": 0,
                "max": 1,
                "chartType": "stepLine",
                "id": "light_saturation",
                "options": {
                    "opts": {
                        "duration": true
                    }
                }
            },
            "light_temperature": {
                "value": 0.63,
                "lastUpdated": "2018-12-20T02:24:36.389Z",
                "type": "number",
                "getable": true,
                "setable": true,
                "title": "Color Temperature",
                "desc": null,
                "units": null,
                "decimals": 2,
                "min": 0,
                "max": 1,
                "chartType": "stepLine",
                "id": "light_temperature",
                "options": {
                    "opts": {
                        "duration": true
                    }
                }
            },
            "light_mode": {
                "value": "temperature",
                "lastUpdated": "2018-12-20T02:24:36.392Z",
                "type": "enum",
                "getable": true,
                "setable": true,
                "title": "Light mode",
                "desc": "Switch between Color or Temperature mode",
                "units": null,
                "values": [
                    {
                        "id": "color",
                        "title": "Color"
                    },
                    {
                        "id": "temperature",
                        "title": "Temperature"
                    }
                ],
                "id": "light_mode",
                "options": {}
            }
        },
        "flags": [],
        "ui": {
            "quickAction": "onoff",
            "components": [
                {
                    "id": "toggle",
                    "capabilities": [
                        "onoff"
                    ]
                },
                {
                    "id": "slider",
                    "capabilities": [
                        "dim"
                    ]
                },
                {
                    "id": "color",
                    "capabilities": [
                        "light_hue",
                        "light_saturation",
                        "light_temperature",
                        "light_mode"
                    ]
                }
            ],
            "componentsStartAt": 1
        },
        "ready": true,
        "available": true,
        "repair": false,
        "unpair": false,
        "unavailableMessage": null,
        "speechExamples": [
            "Turn all lights on",
            "Turn off all devices",
            "Toggle all lights",
            "Dim all lights to 50%",
            "Set My Light to full brightness",
            "Turn all lights to blue",
            "Turn My Light to pink",
            "Turn all lights to warm white",
            "Turn My Light to cool white"
        ],
        "images": [],
        "insights": [
            {
                "uri": "homey:device:977bedd9-9479-49fb-a729-69952a995e98",
                "id": "onoff",
                "type": "boolean",
                "title": "Turned on",
                "titleTrue": "Turned on",
                "titleFalse": "Turned off",
                "units": null,
                "decimals": null
            }
        ],
        "color": "#F4AF2E"
    },
    "47a4e904-5650-407a-8e85-67f8a6da41f1": {
        "__athom_api_type": "HomeyAPI.ManagerDevices.Device",
        "id": "47a4e904-5650-407a-8e85-67f8a6da41f1",
        "name": "Hue Living Room switch",
        "driverUri": "homey:app:nl.philips.hue",
        "driverId": "dimmerswitch",
        "zone": "855113f1-f488-4223-b675-2f01270f573e",
        "data": {
            "id": "00:17:88:01:03:cb:3e:fd-02-fc00",
            "bridge_id": "001788fffeae0a85"
        },
        "icon": null,
        "iconObj": {
            "id": "c7e0cd80b455015339d46273776c467e",
            "url": "/icon/c7e0cd80b455015339d46273776c467e/icon.svg"
        },
        "settings": {},
        "settingsObj": false,
        "class": "sensor",
        "virtualClass": null,
        "capabilities": [
            "measure_battery"
        ],
        "capabilitiesObj": {
            "measure_battery": {
                "value": 100,
                "lastUpdated": "2018-12-20T02:24:36.471Z",
                "type": "number",
                "getable": true,
                "setable": false,
                "title": "Battery",
                "desc": "Battery charge in percentage (%)",
                "units": "%",
                "decimals": 2,
                "min": 0,
                "max": 100,
                "chartType": "spline",
                "id": "measure_battery",
                "options": {}
            }
        },
        "flags": [],
        "ui": {
            "components": [
                {
                    "id": "battery",
                    "capabilities": [
                        "measure_battery"
                    ]
                }
            ],
            "componentsStartAt": 0
        },
        "ready": true,
        "available": true,
        "repair": false,
        "unpair": false,
        "unavailableMessage": null,
        "speechExamples": [],
        "images": [],
        "insights": [
            {
                "uri": "homey:device:47a4e904-5650-407a-8e85-67f8a6da41f1",
                "id": "measure_battery",
                "type": "number",
                "title": "Battery",
                "titleTrue": null,
                "titleFalse": null,
                "units": "%"
            }
        ],
        "color": "#F4AF2E"
    },
    "ffc8ca46-b9e8-4b6d-ab2c-48c7ae6627af": {
        "__athom_api_type": "HomeyAPI.ManagerDevices.Device",
        "id": "ffc8ca46-b9e8-4b6d-ab2c-48c7ae6627af",
        "name": "Peace Lilly",
        "driverUri": "homey:app:com.mi.flora",
        "driverId": "flora",
        "zone": "a323a90b-bd10-4140-84b4-dff14587edae",
        "data": {
            "id": "c47c8d65c37a",
            "uuid": "c47c8d65c37a",
            "address": "c47c8d65c37a",
            "version": "v2.0.14"
        },
        "icon": null,
        "iconObj": {
            "id": "0201d15243e36b16adc6e624b8ad7cd9",
            "url": "/icon/0201d15243e36b16adc6e624b8ad7cd9/icon.svg"
        },
        "settings": {
            "firmware_version": "3.1.9",
            "last_updated": "2018-12-06T12:27:16.095Z",
            "measure_temperature_min": 15,
            "measure_temperature_max": 32,
            "measure_luminance_min": 1000,
            "measure_luminance_max": 22500,
            "flora_measure_fertility_min": 350,
            "flora_measure_fertility_max": 2000,
            "flora_measure_moisture_min": 15,
            "flora_measure_moisture_max": 65,
            "uuid": "c47c8d65c37a"
        },
        "settingsObj": true,
        "class": "sensor",
        "virtualClass": null,
        "capabilities": [
            "measure_temperature",
            "measure_luminance",
            "flora_measure_fertility",
            "flora_measure_moisture",
            "measure_battery"
        ],
        "capabilitiesObj": {
            "measure_temperature": {
                "value": 22.1,
                "lastUpdated": "2018-12-06T12:59:35.264Z",
                "type": "number",
                "getable": true,
                "setable": false,
                "title": "Temperature",
                "desc": null,
                "units": "°C",
                "decimals": 2,
                "chartType": "spline",
                "id": "measure_temperature",
                "options": {}
            },
            "measure_luminance": {
                "value": 50,
                "lastUpdated": "2018-12-06T12:59:35.264Z",
                "type": "number",
                "getable": true,
                "setable": false,
                "title": "Luminance",
                "desc": "Luminance in Lux (lx)",
                "units": "lx",
                "decimals": 2,
                "chartType": "spline",
                "id": "measure_luminance",
                "options": {}
            },
            "flora_measure_fertility": {
                "value": 294,
                "lastUpdated": "2018-12-06T12:59:35.264Z",
                "type": "number",
                "getable": true,
                "setable": false,
                "title": "Conductivity",
                "desc": null,
                "units": "µS/cm",
                "min": 0,
                "max": 5000,
                "step": 1,
                "id": "flora_measure_fertility",
                "options": {}
            },
            "flora_measure_moisture": {
                "value": 21,
                "lastUpdated": "2018-12-06T12:59:35.264Z",
                "type": "number",
                "getable": true,
                "setable": false,
                "title": "Moisture",
                "desc": null,
                "units": "%",
                "min": 0,
                "max": 100,
                "step": 1,
                "id": "flora_measure_moisture",
                "options": {}
            },
            "measure_battery": {
                "value": 99,
                "lastUpdated": "2018-12-06T12:59:35.264Z",
                "type": "number",
                "getable": true,
                "setable": false,
                "title": "Battery",
                "desc": "Battery charge in percentage (%)",
                "units": "%",
                "decimals": 2,
                "min": 0,
                "max": 100,
                "chartType": "spline",
                "id": "measure_battery",
                "options": {}
            }
        },
        "flags": [],
        "ui": {
            "components": [
                {
                    "id": "sensor",
                    "capabilities": [
                        "measure_temperature",
                        "measure_luminance",
                        "flora_measure_fertility",
                        "flora_measure_moisture"
                    ]
                },
                {
                    "id": "battery",
                    "capabilities": [
                        "measure_battery"
                    ]
                }
            ],
            "componentsStartAt": 0
        },
        "ready": true,
        "available": true,
        "repair": false,
        "unpair": false,
        "speechExamples": [
            "What is the average temperature at home?"
        ],
        "images": [],
        "insights": [
            {
                "uri": "homey:device:ffc8ca46-b9e8-4b6d-ab2c-48c7ae6627af",
                "id": "measure_temperature",
                "type": "number",
                "title": "Temperature",
                "titleTrue": null,
                "titleFalse": null,
                "units": "°C"
            },
            {
                "uri": "homey:device:ffc8ca46-b9e8-4b6d-ab2c-48c7ae6627af",
                "id": "measure_luminance",
                "type": "number",
                "title": "Luminance",
                "titleTrue": null,
                "titleFalse": null,
                "units": "lx"
            },
            {
                "uri": "homey:device:ffc8ca46-b9e8-4b6d-ab2c-48c7ae6627af",
                "id": "measure_battery",
                "type": "number",
                "title": "Battery",
                "titleTrue": null,
                "titleFalse": null,
                "units": "%"
            }
        ],
        "color": "#df3120"
    },
    "917eccfc-0741-4c16-ab31-7c05378fa08a": {
        "__athom_api_type": "HomeyAPI.ManagerDevices.Device",
        "id": "917eccfc-0741-4c16-ab31-7c05378fa08a",
        "name": "Doorbell",
        "driverUri": "homey:app:com.swttt.devicegroups",
        "driverId": "doorbell",
        "zone": "8a6928ea-26b2-4922-9ead-d20ee6695dd3",
        "data": {
            "id": "ocg4a8"
        },
        "icon": "../../../assets/icons/categories/doorbell/standard.svg",
        "iconObj": {
            "id": "0fa000f43ad721c52a23230c0ab7a8e3",
            "url": "/icon/0fa000f43ad721c52a23230c0ab7a8e3/icon.svg"
        },
        "settings": {
            "capabilities": {
                "alarm_generic": {
                    "method": "any"
                }
            },
            "devices": {},
            "labelClass": "Doorbell",
            "labelCapabilities": "Unknown",
            "labelDevices": "Unknown",
            "notes": ""
        },
        "settingsObj": true,
        "class": "doorbell",
        "virtualClass": null,
        "capabilities": [
            "alarm_generic"
        ],
        "capabilitiesObj": {
            "alarm_generic": {
                "value": true,
                "lastUpdated": "2018-12-19T11:18:10.322Z",
                "type": "boolean",
                "getable": true,
                "setable": true,
                "title": "Generic alarm",
                "desc": "Generic alarm",
                "units": null,
                "id": "alarm_generic",
                "options": {}
            }
        },
        "flags": [],
        "ui": {
            "components": [
                {
                    "id": "sensor",
                    "capabilities": [
                        "alarm_generic"
                    ]
                }
            ],
            "componentsStartAt": 0
        },
        "ready": true,
        "available": true,
        "repair": false,
        "unpair": false,
        "speechExamples": [],
        "images": [],
        "insights": [
            {
                "uri": "homey:device:917eccfc-0741-4c16-ab31-7c05378fa08a",
                "id": "alarm_generic",
                "type": "boolean",
                "title": "Generic alarm",
                "titleTrue": "Generic alarm turned on",
                "titleFalse": "Generic alarm turned off",
                "units": null,
                "decimals": null
            }
        ],
        "color": "#000000"
    },
    "bdfd0607-89ae-4c80-8346-97ad2514794e": {
        "__athom_api_type": "HomeyAPI.ManagerDevices.Device",
        "id": "bdfd0607-89ae-4c80-8346-97ad2514794e",
        "name": "Home Security",
        "driverUri": "homey:app:com.swttt.devicegroups",
        "driverId": "homealarm",
        "zone": "8a6928ea-26b2-4922-9ead-d20ee6695dd3",
        "data": {
            "id": "p1el4"
        },
        "icon": "../../../assets/icons/categories/homealarm/standard/simple.svg",
        "iconObj": {
            "id": "71b0c22a81e809f000522bbf9aa445ec",
            "url": "/icon/71b0c22a81e809f000522bbf9aa445ec/icon.svg"
        },
        "settings": {
            "capabilities": {
                "homealarm_state": {
                    "method": "ignore"
                },
                "alarm_tamper": {
                    "method": "any"
                }
            },
            "devices": {},
            "labelClass": "Home Security",
            "labelCapabilities": "Unknown",
            "labelDevices": "Unknown",
            "notes": ""
        },
        "settingsObj": true,
        "class": "homealarm",
        "virtualClass": null,
        "capabilities": [
            "homealarm_state",
            "alarm_tamper"
        ],
        "capabilitiesObj": {
            "homealarm_state": {
                "value": "armed",
                "lastUpdated": "2018-12-16T15:01:57.861Z",
                "type": "enum",
                "getable": true,
                "setable": true,
                "title": "Home Alarm state",
                "desc": null,
                "units": null,
                "values": [
                    {
                        "id": "armed",
                        "title": "Armed"
                    },
                    {
                        "id": "disarmed",
                        "title": "Disarmed"
                    },
                    {
                        "id": "partially_armed",
                        "title": "Partially armed"
                    }
                ],
                "id": "homealarm_state",
                "options": {}
            },
            "alarm_tamper": {
                "value": true,
                "lastUpdated": "2018-12-19T11:18:10.346Z",
                "type": "boolean",
                "getable": true,
                "setable": false,
                "title": "Tamper Alarm",
                "desc": "True when tampering has been detected",
                "units": null,
                "id": "alarm_tamper",
                "options": {}
            }
        },
        "flags": [],
        "ui": {
            "components": [
                {
                    "id": "picker",
                    "capabilities": [
                        "homealarm_state"
                    ]
                },
                {
                    "id": "sensor",
                    "capabilities": [
                        "alarm_tamper"
                    ]
                }
            ],
            "componentsStartAt": 0
        },
        "ready": true,
        "available": true,
        "repair": false,
        "unpair": false,
        "speechExamples": [],
        "images": [],
        "insights": [],
        "color": "#000000"
    },
    "e02a406e-55b6-40ef-b5c6-62859f63996f": {
        "__athom_api_type": "HomeyAPI.ManagerDevices.Device",
        "id": "e02a406e-55b6-40ef-b5c6-62859f63996f",
        "name": "Speaker",
        "driverUri": "homey:app:com.swttt.devicegroups",
        "driverId": "speaker",
        "zone": "8a6928ea-26b2-4922-9ead-d20ee6695dd3",
        "data": {
            "id": "7wkdq"
        },
        "icon": "../../../assets/icons/categories/speaker/standard.svg",
        "iconObj": {
            "id": "97717ca769f1b3dbebf9f01e764fa2b2",
            "url": "/icon/97717ca769f1b3dbebf9f01e764fa2b2/icon.svg"
        },
        "settings": {
            "capabilities": {
                "speaker_playing": {
                    "method": "ignore"
                }
            },
            "devices": [
                "fb6eeeca-19d3-4b56-9e56-a08b81cee296"
            ],
            "labelClass": "Speaker",
            "labelCapabilities": "Unknown",
            "labelDevices": "Unknown",
            "notes": ""
        },
        "settingsObj": true,
        "class": "speaker",
        "virtualClass": null,
        "capabilities": [
            "speaker_playing"
        ],
        "capabilitiesObj": {
            "speaker_playing": {
                "value": null,
                "type": "boolean",
                "getable": true,
                "setable": true,
                "title": "Playing",
                "desc": null,
                "units": null,
                "id": "speaker_playing",
                "options": {}
            }
        },
        "flags": [],
        "ui": {
            "quickAction": "speaker_playing",
            "components": [
                {
                    "id": "media",
                    "capabilities": [
                        "speaker_playing"
                    ]
                }
            ],
            "componentsStartAt": 0
        },
        "ready": true,
        "available": true,
        "repair": false,
        "unpair": false,
        "speechExamples": [],
        "images": [],
        "insights": [],
        "color": "#000000"
    },
    "c8137341-c529-4c0c-8f9a-92e57cd9501e": {
        "__athom_api_type": "HomeyAPI.ManagerDevices.Device",
        "id": "c8137341-c529-4c0c-8f9a-92e57cd9501e",
        "name": "Study Tree",
        "driverUri": "homey:manager:vdevice",
        "driverId": "zigbeebasic",
        "zone": "1815c884-af06-4d53-a2c1-6f4c77e9eb4e",
        "data": {
            "token": "1ec8c8f1-5aed-457f-8dcc-a0f96d7d4561"
        },
        "icon": "/manager/vdevice/icon.svg",
        "iconObj": null,
        "settings": {
            "zb_profile_id": "49246",
            "zb_device_id": "0",
            "zb_ieee_addr": "0x00158d0001ddf8b6",
            "zb_product_id": "FNB56-SKT1EHG1.2",
            "zb_manufacturer_name": "FeiBit"
        },
        "settingsObj": true,
        "class": "socket",
        "virtualClass": null,
        "capabilities": [
            "onoff"
        ],
        "capabilitiesObj": {
            "onoff": {
                "value": false,
                "lastUpdated": "2018-12-17T23:57:22.779Z",
                "type": "boolean",
                "getable": true,
                "setable": true,
                "title": "Turned on",
                "desc": null,
                "units": null,
                "id": "onoff",
                "options": {}
            }
        },
        "flags": [
            "zigbee"
        ],
        "ui": {
            "quickAction": "onoff",
            "components": [
                {
                    "id": "toggle",
                    "capabilities": [
                        "onoff"
                    ]
                }
            ],
            "componentsStartAt": 0
        },
        "ready": true,
        "available": true,
        "repair": false,
        "unpair": true,
        "speechExamples": [
            "Turn all lights on",
            "Turn off all devices",
            "Toggle all lights"
        ],
        "images": [],
        "insights": [
            {
                "uri": "homey:device:c8137341-c529-4c0c-8f9a-92e57cd9501e",
                "id": "onoff",
                "type": "boolean",
                "title": "Turned on",
                "titleTrue": "Turned on",
                "titleFalse": "Turned off",
                "units": null,
                "decimals": null
            }
        ],
        "color": "#F70B48"
    },
    "115e853b-d0c6-45c5-96ac-44e9eb2262aa": {
        "__athom_api_type": "HomeyAPI.ManagerDevices.Device",
        "id": "115e853b-d0c6-45c5-96ac-44e9eb2262aa",
        "name": "Porch Light",
        "driverUri": "homey:app:com.fibaro",
        "driverId": "FGS-223",
        "zone": "a323a90b-bd10-4140-84b4-dff14587edae",
        "data": {
            "token": "70d87563-b324-4884-a442-0c3ef0f24025",
            "multiChannelNodeId": "2"
        },
        "icon": "/icon.svg",
        "iconObj": {
            "id": "6ae912856e64e1d2f4e5c7cd850cb618",
            "url": "/icon/6ae912856e64e1d2f4e5c7cd850cb618/icon.svg"
        },
        "settings": {
            "save_state": true,
            "switch_type": "2",
            "s1_power_report": 20,
            "s1_power_report_interval": 10,
            "s1_kwh_report": 1,
            "s2_power_report": 20,
            "s2_power_report_interval": 10,
            "s2_kwh_report": 1,
            "power_report_interval": 3600,
            "energie_report_interval": 3600,
            "own_power": false,
            "zw_node_id": "7.2",
            "zw_device_class_generic": "GENERIC_TYPE_SWITCH_BINARY",
            "zw_device_class_specific": "SPECIFIC_TYPE_POWER_SWITCH_BINARY"
        },
        "settingsObj": true,
        "class": "socket",
        "virtualClass": "light",
        "capabilities": [
            "onoff",
            "measure_power",
            "meter_power"
        ],
        "capabilitiesObj": {
            "onoff": {
                "value": false,
                "lastUpdated": "2018-12-19T23:38:49.491Z",
                "type": "boolean",
                "getable": true,
                "setable": true,
                "title": "Turned on",
                "desc": null,
                "units": null,
                "id": "onoff",
                "options": {}
            },
            "measure_power": {
                "value": 21.1,
                "lastUpdated": "2018-12-19T11:18:54.292Z",
                "type": "number",
                "getable": true,
                "setable": false,
                "title": "Power",
                "desc": "Power in Watt (W)",
                "units": "W",
                "decimals": 2,
                "chartType": "stepLine",
                "id": "measure_power",
                "options": {}
            },
            "meter_power": {
                "value": 15.11,
                "lastUpdated": "2018-12-19T11:19:14.873Z",
                "type": "number",
                "getable": true,
                "setable": false,
                "title": "Power Meter",
                "desc": "Power usage in KiloWattHour (kWh)",
                "units": "KWh",
                "decimals": 2,
                "chartType": "spline",
                "id": "meter_power",
                "options": {}
            }
        },
        "flags": [
            "zwave",
            "zwaveMultiChannel"
        ],
        "ui": {
            "quickAction": "onoff",
            "components": [
                {
                    "id": "toggle",
                    "capabilities": [
                        "onoff"
                    ]
                },
                {
                    "id": "sensor",
                    "capabilities": [
                        "measure_power",
                        "meter_power"
                    ]
                }
            ],
            "componentsStartAt": 1
        },
        "ready": true,
        "available": true,
        "repair": false,
        "unpair": true,
        "speechExamples": [
            "Turn all lights on",
            "Turn off all devices",
            "Toggle all lights"
        ],
        "images": [],
        "insights": [
            {
                "uri": "homey:device:115e853b-d0c6-45c5-96ac-44e9eb2262aa",
                "id": "onoff",
                "type": "boolean",
                "title": "Turned on",
                "titleTrue": "Turned on",
                "titleFalse": "Turned off",
                "units": null,
                "decimals": null
            },
            {
                "uri": "homey:device:115e853b-d0c6-45c5-96ac-44e9eb2262aa",
                "id": "measure_power",
                "type": "number",
                "title": "Power",
                "titleTrue": null,
                "titleFalse": null,
                "units": "W"
            },
            {
                "uri": "homey:device:115e853b-d0c6-45c5-96ac-44e9eb2262aa",
                "id": "meter_power",
                "type": "number",
                "title": "Power Meter",
                "titleTrue": null,
                "titleFalse": null,
                "units": "KWh"
            }
        ],
        "color": "#000000"
    },
    "37af42d4-d4b6-4265-987f-a6957bcb8c71": {
        "__athom_api_type": "HomeyAPI.ManagerDevices.Device",
        "id": "37af42d4-d4b6-4265-987f-a6957bcb8c71",
        "name": "Christmas Tree",
        "driverUri": "homey:manager:vdevice",
        "driverId": "zigbeebasic",
        "zone": "9eb2975d-49ea-4033-8db0-105a3e982117",
        "data": {
            "token": "e1d24782-f843-43f1-bbdf-0d7f3a55c01d"
        },
        "icon": null,
        "iconObj": {
            "id": "7bae6f7b88e84db041b73b07c52f4fdd",
            "url": "/icon/7bae6f7b88e84db041b73b07c52f4fdd/icon.svg"
        },
        "settings": {
            "zb_profile_id": "49246",
            "zb_device_id": "0",
            "zb_ieee_addr": "0x00158d0001de1ea6",
            "zb_product_id": "FNB56-SKT1EHG1.2",
            "zb_manufacturer_name": "FeiBit"
        },
        "settingsObj": true,
        "class": "socket",
        "virtualClass": null,
        "capabilities": [
            "onoff"
        ],
        "capabilitiesObj": {
            "onoff": {
                "value": false,
                "lastUpdated": "2018-12-18T12:53:51.223Z",
                "type": "boolean",
                "getable": true,
                "setable": true,
                "title": "Turned on",
                "desc": null,
                "units": null,
                "id": "onoff",
                "options": {}
            }
        },
        "flags": [
            "zigbee"
        ],
        "ui": {
            "quickAction": "onoff",
            "components": [
                {
                    "id": "toggle",
                    "capabilities": [
                        "onoff"
                    ]
                }
            ],
            "componentsStartAt": 0
        },
        "ready": true,
        "available": true,
        "repair": false,
        "unpair": true,
        "speechExamples": [
            "Turn all lights on",
            "Turn off all devices",
            "Toggle all lights"
        ],
        "images": [],
        "insights": [
            {
                "uri": "homey:device:37af42d4-d4b6-4265-987f-a6957bcb8c71",
                "id": "onoff",
                "type": "boolean",
                "title": "Turned on",
                "titleTrue": "Turned on",
                "titleFalse": "Turned off",
                "units": null,
                "decimals": null
            }
        ],
        "color": "#F70B48"
    },
    "7390f4fe-3571-4acb-98e2-2c8b6da1b249": {
        "__athom_api_type": "HomeyAPI.ManagerDevices.Device",
        "id": "7390f4fe-3571-4acb-98e2-2c8b6da1b249",
        "name": "Wall Plug",
        "driverUri": "homey:app:com.swttt.devicegroups",
        "driverId": "socket",
        "zone": "ddc3cdaa-8172-4c4a-97c9-22d8ec462972",
        "data": {
            "id": "bmdzeg"
        },
        "icon": "../../../assets/icons/categories/socket/standard/i_button.svg",
        "iconObj": {
            "id": "ae25a53d0c43a20e9a74c1bcb36b3151",
            "url": "/icon/ae25a53d0c43a20e9a74c1bcb36b3151/icon.svg"
        },
        "settings": {
            "capabilities": {
                "onoff": {
                    "method": "any"
                }
            },
            "devices": [
                "37af42d4-d4b6-4265-987f-a6957bcb8c71",
                "c8137341-c529-4c0c-8f9a-92e57cd9501e"
            ],
            "labelClass": "Wall Plug",
            "labelCapabilities": "Turned on (On if Any)",
            "labelDevices": "Christmas Tree, Study Tree",
            "notes": ""
        },
        "settingsObj": true,
        "class": "socket",
        "virtualClass": null,
        "capabilities": [
            "onoff"
        ],
        "capabilitiesObj": {
            "onoff": {
                "value": false,
                "lastUpdated": "2018-12-19T11:18:11.310Z",
                "type": "boolean",
                "getable": true,
                "setable": true,
                "title": "Turned on",
                "desc": null,
                "units": null,
                "id": "onoff",
                "options": {}
            }
        },
        "flags": [],
        "ui": {
            "quickAction": "onoff",
            "components": [
                {
                    "id": "toggle",
                    "capabilities": [
                        "onoff"
                    ]
                }
            ],
            "componentsStartAt": 0
        },
        "ready": true,
        "available": true,
        "repair": false,
        "unpair": false,
        "speechExamples": [
            "Turn all lights on",
            "Turn off all devices",
            "Toggle all lights"
        ],
        "images": [],
        "insights": [
            {
                "uri": "homey:device:7390f4fe-3571-4acb-98e2-2c8b6da1b249",
                "id": "onoff",
                "type": "boolean",
                "title": "Turned on",
                "titleTrue": "Turned on",
                "titleFalse": "Turned off",
                "units": null,
                "decimals": null
            }
        ],
        "color": "#000000"
    },
    "422ebcbb-9f80-40d0-a5b6-5c63b1d03bb3": {
        "__athom_api_type": "HomeyAPI.ManagerDevices.Device",
        "id": "422ebcbb-9f80-40d0-a5b6-5c63b1d03bb3",
        "name": "Light",
        "driverUri": "homey:app:com.swttt.devicegroups",
        "driverId": "light",
        "zone": "8a6928ea-26b2-4922-9ead-d20ee6695dd3",
        "data": {
            "id": "k9np5o"
        },
        "icon": "../../../assets/icons/categories/light/standard/a_sultan.svg",
        "iconObj": {
            "id": "e0f736f87592e14107d5513673d22abe",
            "url": "/icon/e0f736f87592e14107d5513673d22abe/icon.svg"
        },
        "settings": {
            "capabilities": {
                "onoff": {
                    "method": "any"
                }
            },
            "devices": [
                "8beb2eb7-d7a7-4498-9809-81ad4017e0f4",
                "b31d2a41-fb13-49c6-9148-ed7d42a9c192"
            ],
            "labelClass": "Light",
            "labelCapabilities": "Unknown",
            "labelDevices": "Unknown",
            "notes": ""
        },
        "settingsObj": true,
        "class": "light",
        "virtualClass": null,
        "capabilities": [
            "onoff"
        ],
        "capabilitiesObj": {
            "onoff": {
                "value": false,
                "lastUpdated": "2018-12-18T12:53:54.563Z",
                "type": "boolean",
                "getable": true,
                "setable": true,
                "title": "Turned on",
                "desc": null,
                "units": null,
                "id": "onoff",
                "options": {}
            }
        },
        "flags": [],
        "ui": {
            "quickAction": "onoff",
            "components": [
                {
                    "id": "toggle",
                    "capabilities": [
                        "onoff"
                    ]
                }
            ],
            "componentsStartAt": 0
        },
        "ready": true,
        "available": true,
        "repair": false,
        "unpair": false,
        "speechExamples": [
            "Turn all lights on",
            "Turn off all devices",
            "Toggle all lights"
        ],
        "images": [],
        "insights": [
            {
                "uri": "homey:device:422ebcbb-9f80-40d0-a5b6-5c63b1d03bb3",
                "id": "onoff",
                "type": "boolean",
                "title": "Turned on",
                "titleTrue": "Turned on",
                "titleFalse": "Turned off",
                "units": null,
                "decimals": null
            }
        ],
        "color": "#000000"
    },
    "42e28bcd-a5d3-4832-bd7d-9482ca1ce517": {
        "__athom_api_type": "HomeyAPI.ManagerDevices.Device",
        "id": "42e28bcd-a5d3-4832-bd7d-9482ca1ce517",
        "name": "Light",
        "driverUri": "homey:app:com.groups",
        "driverId": "light",
        "zone": "9919ee1e-ffbc-480b-bc4b-77fb047e9e68",
        "data": {
            "id": "sc4g2a"
        },
        "icon": "../../../assets/icons/categories/light/standard/a_sultan.svg",
        "iconObj": {
            "id": "e0f736f87592e14107d5513673d22abe",
            "url": "/icon/e0f736f87592e14107d5513673d22abe/icon.svg"
        },
        "settings": {
            "capabilities": {
                "onoff": {
                    "method": "any"
                }
            },
            "devices": [
                "8beb2eb7-d7a7-4498-9809-81ad4017e0f4",
                "7204b6e6-12a2-412c-9b08-b75469ca35cb"
            ],
            "labelClass": "Light",
            "labelCapabilities": "Turned on (On if Any)",
            "labelDevices": "Stairs Light, Backyard Light",
            "notes": ""
        },
        "settingsObj": true,
        "class": "light",
        "virtualClass": null,
        "capabilities": [
            "onoff"
        ],
        "capabilitiesObj": {
            "onoff": {
                "value": false,
                "lastUpdated": "2018-12-19T23:13:51.394Z",
                "type": "boolean",
                "getable": true,
                "setable": true,
                "title": "Turned on",
                "desc": null,
                "units": null,
                "id": "onoff",
                "options": {}
            }
        },
        "flags": [],
        "ui": {
            "quickAction": "onoff",
            "components": [
                {
                    "id": "toggle",
                    "capabilities": [
                        "onoff"
                    ]
                }
            ],
            "componentsStartAt": 0
        },
        "ready": true,
        "available": true,
        "repair": false,
        "unpair": false,
        "speechExamples": [
            "Turn all lights on",
            "Turn off all devices",
            "Toggle all lights"
        ],
        "images": [],
        "insights": [
            {
                "uri": "homey:device:42e28bcd-a5d3-4832-bd7d-9482ca1ce517",
                "id": "onoff",
                "type": "boolean",
                "title": "Turned on",
                "titleTrue": "Turned on",
                "titleFalse": "Turned off",
                "units": null,
                "decimals": null
            }
        ],
        "color": "#000000"
    },
    "25f12ef0-1d1a-4251-9a8a-8fa964bc2fe1": {
        "__athom_api_type": "HomeyAPI.ManagerDevices.Device",
        "id": "25f12ef0-1d1a-4251-9a8a-8fa964bc2fe1",
        "name": "Light",
        "driverUri": "homey:app:com.groups",
        "driverId": "light",
        "zone": "9919ee1e-ffbc-480b-bc4b-77fb047e9e68",
        "data": {
            "id": "idy5wj"
        },
        "icon": "../../../assets/icons/categories/light/standard/a_sultan.svg",
        "iconObj": {
            "id": "e0f736f87592e14107d5513673d22abe",
            "url": "/icon/e0f736f87592e14107d5513673d22abe/icon.svg"
        },
        "settings": {
            "capabilities": {
                "onoff": {
                    "method": "any"
                },
                "dim": {
                    "method": "mean"
                }
            },
            "devices": [
                "d0851557-6ae3-4ef0-81b5-722ac46b2ee1",
                "54222076-fe13-43b8-96cd-cbc7b565d2f9"
            ],
            "labelClass": "Light",
            "labelCapabilities": "Turned on (On if Any), Dim level (Mean Average)",
            "labelDevices": "Bedroom Light, Robe Light",
            "notes": ""
        },
        "settingsObj": true,
        "class": "light",
        "virtualClass": null,
        "capabilities": [
            "onoff",
            "dim"
        ],
        "capabilitiesObj": {
            "onoff": {
                "value": true,
                "lastUpdated": "2018-12-19T23:23:28.763Z",
                "type": "boolean",
                "getable": true,
                "setable": true,
                "title": "Turned on",
                "desc": null,
                "units": null,
                "id": "onoff",
                "options": {}
            },
            "dim": {
                "value": 0.66,
                "lastUpdated": "2018-12-19T23:23:28.775Z",
                "type": "number",
                "getable": true,
                "setable": true,
                "title": "Dim level",
                "desc": null,
                "units": "%",
                "decimals": 2,
                "min": 0,
                "max": 1,
                "chartType": "stepLine",
                "id": "dim",
                "options": {}
            }
        },
        "flags": [],
        "ui": {
            "quickAction": "onoff",
            "components": [
                {
                    "id": "toggle",
                    "capabilities": [
                        "onoff"
                    ]
                },
                {
                    "id": "slider",
                    "capabilities": [
                        "dim"
                    ]
                }
            ],
            "componentsStartAt": 1
        },
        "ready": true,
        "available": true,
        "repair": false,
        "unpair": false,
        "speechExamples": [
            "Turn all lights on",
            "Turn off all devices",
            "Toggle all lights",
            "Dim all lights to 50%",
            "Set My Light to full brightness"
        ],
        "images": [],
        "insights": [
            {
                "uri": "homey:device:25f12ef0-1d1a-4251-9a8a-8fa964bc2fe1",
                "id": "onoff",
                "type": "boolean",
                "title": "Turned on",
                "titleTrue": "Turned on",
                "titleFalse": "Turned off",
                "units": null,
                "decimals": null
            }
        ],
        "color": "#000000"
    },
    "bcc7e2f0-719d-4a2c-a401-e1d48c67dfa0": {
        "__athom_api_type": "HomeyAPI.ManagerDevices.Device",
        "id": "bcc7e2f0-719d-4a2c-a401-e1d48c67dfa0",
        "name": "Garage Light",
        "driverUri": "homey:app:com.fibaro",
        "driverId": "FGS-223",
        "zone": "b2cc9dc7-c8a1-4303-bbb0-12eeca6bf2a9",
        "data": {
            "token": "ee53fbb2-cc99-4798-b2fe-900aea00f0f4"
        },
        "icon": "/icon.svg",
        "iconObj": {
            "id": "6ae912856e64e1d2f4e5c7cd850cb618",
            "url": "/icon/6ae912856e64e1d2f4e5c7cd850cb618/icon.svg"
        },
        "settings": {
            "save_state": true,
            "switch_type": "2",
            "s1_power_report": 20,
            "s1_power_report_interval": 10,
            "s1_kwh_report": 1,
            "s2_power_report": 20,
            "s2_power_report_interval": 10,
            "s2_kwh_report": 1,
            "power_report_interval": 3600,
            "energie_report_interval": 3600,
            "own_power": false,
            "zw_node_id": "6",
            "zw_manufacturer_id": "271",
            "zw_product_type_id": "515",
            "zw_product_id": "12288",
            "zw_secure": "manager.vdevice.drivers.zwavebasic.devicesettings.yes_true",
            "zw_battery": "manager.vdevice.drivers.zwavebasic.devicesettings.yes_false",
            "zw_device_class_basic": "BASIC_TYPE_ROUTING_SLAVE",
            "zw_device_class_generic": "GENERIC_TYPE_SWITCH_BINARY",
            "zw_device_class_specific": "SPECIFIC_TYPE_POWER_SWITCH_BINARY",
            "zw_firmware_id": "563",
            "zw_wakeup_interval": 0,
            "zw_group_1": "1",
            "zw_group_2": "",
            "zw_group_3": "",
            "zw_group_4": "",
            "zw_group_5": "",
            "zw_configuration_value": ""
        },
        "settingsObj": true,
        "class": "socket",
        "virtualClass": "light",
        "capabilities": [
            "onoff",
            "measure_power",
            "meter_power",
            "double_switch_2_custom_capability"
        ],
        "capabilitiesObj": {
            "onoff": {
                "value": false,
                "lastUpdated": "2018-12-19T20:29:33.127Z",
                "type": "boolean",
                "getable": true,
                "setable": true,
                "title": "Turned on",
                "desc": null,
                "units": null,
                "id": "onoff",
                "options": {}
            },
            "measure_power": {
                "value": 0,
                "lastUpdated": "2018-12-20T01:29:32.656Z",
                "type": "number",
                "getable": true,
                "setable": false,
                "title": "Power",
                "desc": "Power in Watt (W)",
                "units": "W",
                "decimals": 2,
                "chartType": "stepLine",
                "id": "measure_power",
                "options": {}
            },
            "meter_power": {
                "value": 3.52,
                "lastUpdated": "2018-12-20T02:17:44.655Z",
                "type": "number",
                "getable": true,
                "setable": false,
                "title": "Power Meter",
                "desc": "Power usage in KiloWattHour (kWh)",
                "units": "KWh",
                "decimals": 2,
                "chartType": "spline",
                "id": "meter_power",
                "options": {}
            }
        },
        "flags": [
            "zwave"
        ],
        "ui": {},
        "ready": true,
        "available": true,
        "repair": false,
        "unpair": true,
        "speechExamples": [
            "Turn all lights on",
            "Turn off all devices",
            "Toggle all lights"
        ],
        "images": [],
        "insights": [
            {
                "uri": "homey:device:bcc7e2f0-719d-4a2c-a401-e1d48c67dfa0",
                "id": "onoff",
                "type": "boolean",
                "title": "Turned on",
                "titleTrue": "Turned on",
                "titleFalse": "Turned off",
                "units": null,
                "decimals": null
            },
            {
                "uri": "homey:device:bcc7e2f0-719d-4a2c-a401-e1d48c67dfa0",
                "id": "measure_power",
                "type": "number",
                "title": "Power",
                "titleTrue": null,
                "titleFalse": null,
                "units": "W"
            },
            {
                "uri": "homey:device:bcc7e2f0-719d-4a2c-a401-e1d48c67dfa0",
                "id": "meter_power",
                "type": "number",
                "title": "Power Meter",
                "titleTrue": null,
                "titleFalse": null,
                "units": "KWh"
            }
        ],
        "color": "#000000"
    },
    "af674494-61d3-4040-86ac-3b83fd05b877": {
        "__athom_api_type": "HomeyAPI.ManagerDevices.Device",
        "id": "af674494-61d3-4040-86ac-3b83fd05b877",
        "name": "Hue Go",
        "driverUri": "homey:app:nl.philips.hue",
        "driverId": "bulb",
        "zone": "9eb2975d-49ea-4033-8db0-105a3e982117",
        "data": {
            "id": "00:17:88:01:01:19:db:bd-0b",
            "bridge_id": "001788fffeae0a85"
        },
        "icon": "/icons/LLC020.svg",
        "iconObj": {
            "id": "673f4c17d6224a5598554b8400d92895",
            "url": "/icon/673f4c17d6224a5598554b8400d92895/icon.svg"
        },
        "settings": {},
        "settingsObj": false,
        "class": "light",
        "virtualClass": null,
        "capabilities": [
            "onoff",
            "dim",
            "light_hue",
            "light_saturation",
            "light_temperature",
            "light_mode"
        ],
        "capabilitiesObj": {
            "onoff": {
                "value": false,
                "lastUpdated": "2018-12-20T02:24:36.396Z",
                "type": "boolean",
                "getable": true,
                "setable": true,
                "title": "Turned on",
                "desc": null,
                "units": null,
                "id": "onoff",
                "options": {}
            },
            "dim": {
                "value": 0.5,
                "lastUpdated": "2018-12-19T23:51:35.563Z",
                "type": "number",
                "getable": true,
                "setable": true,
                "title": "Dim level",
                "desc": null,
                "units": "%",
                "decimals": 2,
                "min": 0,
                "max": 1,
                "chartType": "stepLine",
                "id": "dim",
                "options": {
                    "opts": {
                        "duration": true
                    }
                }
            },
            "light_hue": {
                "value": 0.63,
                "lastUpdated": "2018-12-20T02:24:36.398Z",
                "type": "number",
                "getable": true,
                "setable": true,
                "title": "Hue",
                "desc": null,
                "units": null,
                "decimals": 2,
                "min": 0,
                "max": 1,
                "chartType": "stepLine",
                "id": "light_hue",
                "options": {
                    "opts": {
                        "duration": true
                    }
                }
            },
            "light_saturation": {
                "value": 0.3,
                "lastUpdated": "2018-12-20T02:24:36.400Z",
                "type": "number",
                "getable": true,
                "setable": true,
                "title": "Color Saturation",
                "desc": null,
                "units": null,
                "decimals": 2,
                "min": 0,
                "max": 1,
                "chartType": "stepLine",
                "id": "light_saturation",
                "options": {
                    "opts": {
                        "duration": true
                    }
                }
            },
            "light_temperature": {
                "value": 0.01,
                "lastUpdated": "2018-12-20T02:24:36.403Z",
                "type": "number",
                "getable": true,
                "setable": true,
                "title": "Color Temperature",
                "desc": null,
                "units": null,
                "decimals": 2,
                "min": 0,
                "max": 1,
                "chartType": "stepLine",
                "id": "light_temperature",
                "options": {
                    "opts": {
                        "duration": true
                    }
                }
            },
            "light_mode": {
                "value": "color",
                "lastUpdated": "2018-12-20T02:24:36.405Z",
                "type": "enum",
                "getable": true,
                "setable": true,
                "title": "Light mode",
                "desc": "Switch between Color or Temperature mode",
                "units": null,
                "values": [
                    {
                        "id": "color",
                        "title": "Color"
                    },
                    {
                        "id": "temperature",
                        "title": "Temperature"
                    }
                ],
                "id": "light_mode",
                "options": {}
            }
        },
        "flags": [],
        "ui": {
            "quickAction": "onoff",
            "components": [
                {
                    "id": "toggle",
                    "capabilities": [
                        "onoff"
                    ]
                },
                {
                    "id": "slider",
                    "capabilities": [
                        "dim"
                    ]
                },
                {
                    "id": "color",
                    "capabilities": [
                        "light_hue",
                        "light_saturation",
                        "light_temperature",
                        "light_mode"
                    ]
                }
            ],
            "componentsStartAt": 1
        },
        "ready": true,
        "available": true,
        "repair": false,
        "unpair": false,
        "unavailableMessage": null,
        "speechExamples": [
            "Turn all lights on",
            "Turn off all devices",
            "Toggle all lights",
            "Dim all lights to 50%",
            "Set My Light to full brightness",
            "Turn all lights to blue",
            "Turn My Light to pink",
            "Turn all lights to warm white",
            "Turn My Light to cool white"
        ],
        "images": [],
        "insights": [
            {
                "uri": "homey:device:af674494-61d3-4040-86ac-3b83fd05b877",
                "id": "onoff",
                "type": "boolean",
                "title": "Turned on",
                "titleTrue": "Turned on",
                "titleFalse": "Turned off",
                "units": null,
                "decimals": null
            }
        ],
        "color": "#F4AF2E"
    },
    "231d79e3-a8f1-4ce3-b700-1e5e77ea5a97": {
        "__athom_api_type": "HomeyAPI.ManagerDevices.Device",
        "id": "231d79e3-a8f1-4ce3-b700-1e5e77ea5a97",
        "name": "Couch Light",
        "driverUri": "homey:app:nl.philips.hue",
        "driverId": "bulb",
        "zone": "9eb2975d-49ea-4033-8db0-105a3e982117",
        "data": {
            "id": "00:17:88:01:03:e2:a2:ca-0b",
            "bridge_id": "001788fffeae0a85"
        },
        "icon": "/icons/LST001.svg",
        "iconObj": {
            "id": "71755fb87badff9a322900b7c8aad0c7",
            "url": "/icon/71755fb87badff9a322900b7c8aad0c7/icon.svg"
        },
        "settings": {},
        "settingsObj": false,
        "class": "light",
        "virtualClass": null,
        "capabilities": [
            "onoff",
            "dim",
            "light_hue",
            "light_saturation",
            "light_temperature",
            "light_mode"
        ],
        "capabilitiesObj": {
            "onoff": {
                "value": false,
                "lastUpdated": "2018-12-20T02:24:36.409Z",
                "type": "boolean",
                "getable": true,
                "setable": true,
                "title": "Turned on",
                "desc": null,
                "units": null,
                "id": "onoff",
                "options": {}
            },
            "dim": {
                "value": 0.5,
                "lastUpdated": "2018-12-19T23:51:35.602Z",
                "type": "number",
                "getable": true,
                "setable": true,
                "title": "Dim level",
                "desc": null,
                "units": "%",
                "decimals": 2,
                "min": 0,
                "max": 1,
                "chartType": "stepLine",
                "id": "dim",
                "options": {
                    "opts": {
                        "duration": true
                    }
                }
            },
            "light_hue": {
                "value": 0.63,
                "lastUpdated": "2018-12-20T02:24:36.411Z",
                "type": "number",
                "getable": true,
                "setable": true,
                "title": "Hue",
                "desc": null,
                "units": null,
                "decimals": 2,
                "min": 0,
                "max": 1,
                "chartType": "stepLine",
                "id": "light_hue",
                "options": {
                    "opts": {
                        "duration": true
                    }
                }
            },
            "light_saturation": {
                "value": 0.3,
                "lastUpdated": "2018-12-20T02:24:36.414Z",
                "type": "number",
                "getable": true,
                "setable": true,
                "title": "Color Saturation",
                "desc": null,
                "units": null,
                "decimals": 2,
                "min": 0,
                "max": 1,
                "chartType": "stepLine",
                "id": "light_saturation",
                "options": {
                    "opts": {
                        "duration": true
                    }
                }
            },
            "light_temperature": {
                "value": 0.01,
                "lastUpdated": "2018-12-20T02:24:36.416Z",
                "type": "number",
                "getable": true,
                "setable": true,
                "title": "Color Temperature",
                "desc": null,
                "units": null,
                "decimals": 2,
                "min": 0,
                "max": 1,
                "chartType": "stepLine",
                "id": "light_temperature",
                "options": {
                    "opts": {
                        "duration": true
                    }
                }
            },
            "light_mode": {
                "value": "color",
                "lastUpdated": "2018-12-20T02:24:36.418Z",
                "type": "enum",
                "getable": true,
                "setable": true,
                "title": "Light mode",
                "desc": "Switch between Color or Temperature mode",
                "units": null,
                "values": [
                    {
                        "id": "color",
                        "title": "Color"
                    },
                    {
                        "id": "temperature",
                        "title": "Temperature"
                    }
                ],
                "id": "light_mode",
                "options": {}
            }
        },
        "flags": [],
        "ui": {
            "quickAction": "onoff",
            "components": [
                {
                    "id": "toggle",
                    "capabilities": [
                        "onoff"
                    ]
                },
                {
                    "id": "slider",
                    "capabilities": [
                        "dim"
                    ]
                },
                {
                    "id": "color",
                    "capabilities": [
                        "light_hue",
                        "light_saturation",
                        "light_temperature",
                        "light_mode"
                    ]
                }
            ],
            "componentsStartAt": 1
        },
        "ready": true,
        "available": true,
        "repair": false,
        "unpair": false,
        "unavailableMessage": null,
        "speechExamples": [
            "Turn all lights on",
            "Turn off all devices",
            "Toggle all lights",
            "Dim all lights to 50%",
            "Set My Light to full brightness",
            "Turn all lights to blue",
            "Turn My Light to pink",
            "Turn all lights to warm white",
            "Turn My Light to cool white"
        ],
        "images": [],
        "insights": [
            {
                "uri": "homey:device:231d79e3-a8f1-4ce3-b700-1e5e77ea5a97",
                "id": "onoff",
                "type": "boolean",
                "title": "Turned on",
                "titleTrue": "Turned on",
                "titleFalse": "Turned off",
                "units": null,
                "decimals": null
            }
        ],
        "color": "#F4AF2E"
    },
    "709b70d9-3e66-4a50-a9f8-48ba81b7936f": {
        "__athom_api_type": "HomeyAPI.ManagerDevices.Device",
        "id": "709b70d9-3e66-4a50-a9f8-48ba81b7936f",
        "name": "Light",
        "driverUri": "homey:app:com.swttt.devicegroups",
        "driverId": "light",
        "zone": "8a6928ea-26b2-4922-9ead-d20ee6695dd3",
        "data": {
            "id": "nobwbc"
        },
        "icon": "../../../assets/icons/categories/light/standard/a_classic.svg",
        "iconObj": {
            "id": "ec86fb068718aa42d82005bc67cbf848",
            "url": "/icon/ec86fb068718aa42d82005bc67cbf848/icon.svg"
        },
        "settings": {
            "capabilities": {
                "onoff": {
                    "method": "any"
                },
                "dim": {
                    "method": "mean"
                },
                "light_hue": {
                    "method": "mean"
                },
                "light_saturation": {
                    "method": "mean"
                },
                "light_temperature": {
                    "method": "mean"
                },
                "light_mode": {
                    "method": "ignore"
                }
            },
            "devices": [
                "977bedd9-9479-49fb-a729-69952a995e98",
                "231d79e3-a8f1-4ce3-b700-1e5e77ea5a97",
                "af674494-61d3-4040-86ac-3b83fd05b877",
                "40edc053-a8e7-49b9-86d6-48d6e3150131",
                "c8e8ea93-0ab0-4724-9b8f-98f27068e5b4"
            ],
            "labelClass": "Light",
            "labelCapabilities": "Unknown",
            "labelDevices": "Unknown",
            "notes": ""
        },
        "settingsObj": true,
        "class": "light",
        "virtualClass": null,
        "capabilities": [
            "onoff",
            "dim",
            "light_hue",
            "light_saturation",
            "light_temperature",
            "light_mode"
        ],
        "capabilitiesObj": {
            "onoff": {
                "value": true,
                "lastUpdated": "2018-12-19T09:02:19.367Z",
                "type": "boolean",
                "getable": true,
                "setable": true,
                "title": "Turned on",
                "desc": null,
                "units": null,
                "id": "onoff",
                "options": {}
            },
            "dim": {
                "value": 0.9,
                "lastUpdated": "2018-12-19T10:32:49.366Z",
                "type": "number",
                "getable": true,
                "setable": true,
                "title": "Dim level",
                "desc": null,
                "units": "%",
                "decimals": 2,
                "min": 0,
                "max": 1,
                "chartType": "stepLine",
                "id": "dim",
                "options": {}
            },
            "light_hue": {
                "value": 0.53,
                "lastUpdated": "2018-12-19T10:32:59.158Z",
                "type": "number",
                "getable": true,
                "setable": true,
                "title": "Hue",
                "desc": null,
                "units": null,
                "decimals": 2,
                "min": 0,
                "max": 1,
                "chartType": "stepLine",
                "id": "light_hue",
                "options": {}
            },
            "light_saturation": {
                "value": 0.35,
                "lastUpdated": "2018-12-19T10:32:59.199Z",
                "type": "number",
                "getable": true,
                "setable": true,
                "title": "Color Saturation",
                "desc": null,
                "units": null,
                "decimals": 2,
                "min": 0,
                "max": 1,
                "chartType": "stepLine",
                "id": "light_saturation",
                "options": {}
            },
            "light_temperature": {
                "value": 0.13,
                "lastUpdated": "2018-12-19T10:32:49.370Z",
                "type": "number",
                "getable": true,
                "setable": true,
                "title": "Color Temperature",
                "desc": null,
                "units": null,
                "decimals": 2,
                "min": 0,
                "max": 1,
                "chartType": "stepLine",
                "id": "light_temperature",
                "options": {}
            },
            "light_mode": {
                "value": null,
                "type": "enum",
                "getable": true,
                "setable": true,
                "title": "Light mode",
                "desc": "Switch between Color or Temperature mode",
                "units": null,
                "values": [
                    {
                        "id": "color",
                        "title": "Color"
                    },
                    {
                        "id": "temperature",
                        "title": "Temperature"
                    }
                ],
                "id": "light_mode",
                "options": {}
            }
        },
        "flags": [],
        "ui": {
            "quickAction": "onoff",
            "components": [
                {
                    "id": "toggle",
                    "capabilities": [
                        "onoff"
                    ]
                },
                {
                    "id": "slider",
                    "capabilities": [
                        "dim"
                    ]
                },
                {
                    "id": "color",
                    "capabilities": [
                        "light_hue",
                        "light_saturation",
                        "light_temperature",
                        "light_mode"
                    ]
                }
            ],
            "componentsStartAt": 1
        },
        "ready": true,
        "available": true,
        "repair": false,
        "unpair": false,
        "speechExamples": [
            "Turn all lights on",
            "Turn off all devices",
            "Toggle all lights",
            "Dim all lights to 50%",
            "Set My Light to full brightness",
            "Turn all lights to blue",
            "Turn My Light to pink",
            "Turn all lights to warm white",
            "Turn My Light to cool white"
        ],
        "images": [],
        "insights": [
            {
                "uri": "homey:device:709b70d9-3e66-4a50-a9f8-48ba81b7936f",
                "id": "onoff",
                "type": "boolean",
                "title": "Turned on",
                "titleTrue": "Turned on",
                "titleFalse": "Turned off",
                "units": null,
                "decimals": null
            }
        ],
        "color": "#000000"
    },
    "40edc053-a8e7-49b9-86d6-48d6e3150131": {
        "__athom_api_type": "HomeyAPI.ManagerDevices.Device",
        "id": "40edc053-a8e7-49b9-86d6-48d6e3150131",
        "name": "Table Lamp",
        "driverUri": "homey:app:nl.philips.hue",
        "driverId": "bulb",
        "zone": "9eb2975d-49ea-4033-8db0-105a3e982117",
        "data": {
            "id": "00:17:88:01:02:84:1a:dd-0b",
            "bridge_id": "001788fffeae0a85"
        },
        "icon": "/icons/LCT012.svg",
        "iconObj": {
            "id": "684f81d0e0a677d3508e1fc8ef408cf8",
            "url": "/icon/684f81d0e0a677d3508e1fc8ef408cf8/icon.svg"
        },
        "settings": {},
        "settingsObj": false,
        "class": "light",
        "virtualClass": null,
        "capabilities": [
            "onoff",
            "dim",
            "light_hue",
            "light_saturation",
            "light_temperature",
            "light_mode"
        ],
        "capabilitiesObj": {
            "onoff": {
                "value": false,
                "lastUpdated": "2018-12-20T02:24:36.422Z",
                "type": "boolean",
                "getable": true,
                "setable": true,
                "title": "Turned on",
                "desc": null,
                "units": null,
                "id": "onoff",
                "options": {}
            },
            "dim": {
                "value": 0.5,
                "lastUpdated": "2018-12-19T23:51:35.632Z",
                "type": "number",
                "getable": true,
                "setable": true,
                "title": "Dim level",
                "desc": null,
                "units": "%",
                "decimals": 2,
                "min": 0,
                "max": 1,
                "chartType": "stepLine",
                "id": "dim",
                "options": {
                    "opts": {
                        "duration": true
                    }
                }
            },
            "light_hue": {
                "value": 0.63,
                "lastUpdated": "2018-12-20T02:24:36.425Z",
                "type": "number",
                "getable": true,
                "setable": true,
                "title": "Hue",
                "desc": null,
                "units": null,
                "decimals": 2,
                "min": 0,
                "max": 1,
                "chartType": "stepLine",
                "id": "light_hue",
                "options": {
                    "opts": {
                        "duration": true
                    }
                }
            },
            "light_saturation": {
                "value": 0.3,
                "lastUpdated": "2018-12-20T02:24:36.427Z",
                "type": "number",
                "getable": true,
                "setable": true,
                "title": "Color Saturation",
                "desc": null,
                "units": null,
                "decimals": 2,
                "min": 0,
                "max": 1,
                "chartType": "stepLine",
                "id": "light_saturation",
                "options": {
                    "opts": {
                        "duration": true
                    }
                }
            },
            "light_temperature": {
                "value": 0.01,
                "lastUpdated": "2018-12-20T02:24:36.429Z",
                "type": "number",
                "getable": true,
                "setable": true,
                "title": "Color Temperature",
                "desc": null,
                "units": null,
                "decimals": 2,
                "min": 0,
                "max": 1,
                "chartType": "stepLine",
                "id": "light_temperature",
                "options": {
                    "opts": {
                        "duration": true
                    }
                }
            },
            "light_mode": {
                "value": "color",
                "lastUpdated": "2018-12-20T02:24:36.432Z",
                "type": "enum",
                "getable": true,
                "setable": true,
                "title": "Light mode",
                "desc": "Switch between Color or Temperature mode",
                "units": null,
                "values": [
                    {
                        "id": "color",
                        "title": "Color"
                    },
                    {
                        "id": "temperature",
                        "title": "Temperature"
                    }
                ],
                "id": "light_mode",
                "options": {}
            }
        },
        "flags": [],
        "ui": {
            "quickAction": "onoff",
            "components": [
                {
                    "id": "toggle",
                    "capabilities": [
                        "onoff"
                    ]
                },
                {
                    "id": "slider",
                    "capabilities": [
                        "dim"
                    ]
                },
                {
                    "id": "color",
                    "capabilities": [
                        "light_hue",
                        "light_saturation",
                        "light_temperature",
                        "light_mode"
                    ]
                }
            ],
            "componentsStartAt": 1
        },
        "ready": true,
        "available": true,
        "repair": false,
        "unpair": false,
        "unavailableMessage": null,
        "speechExamples": [
            "Turn all lights on",
            "Turn off all devices",
            "Toggle all lights",
            "Dim all lights to 50%",
            "Set My Light to full brightness",
            "Turn all lights to blue",
            "Turn My Light to pink",
            "Turn all lights to warm white",
            "Turn My Light to cool white"
        ],
        "images": [],
        "insights": [
            {
                "uri": "homey:device:40edc053-a8e7-49b9-86d6-48d6e3150131",
                "id": "onoff",
                "type": "boolean",
                "title": "Turned on",
                "titleTrue": "Turned on",
                "titleFalse": "Turned off",
                "units": null,
                "decimals": null
            }
        ],
        "color": "#F4AF2E"
    },
    "19f4dd55-8f64-4cd5-ac18-f170f2e985cd": {
        "__athom_api_type": "HomeyAPI.ManagerDevices.Device",
        "id": "19f4dd55-8f64-4cd5-ac18-f170f2e985cd",
        "name": "Right Living Colors",
        "driverUri": "homey:app:nl.philips.hue",
        "driverId": "bulb",
        "zone": "9eb2975d-49ea-4033-8db0-105a3e982117",
        "data": {
            "id": "00:17:88:01:00:05:d4:56-0b",
            "bridge_id": "001788fffeae0a85"
        },
        "icon": null,
        "iconObj": {
            "id": "d1bffcb786b3a386d318c0a4052fe663",
            "url": "/icon/d1bffcb786b3a386d318c0a4052fe663/icon.svg"
        },
        "settings": {},
        "settingsObj": false,
        "class": "light",
        "virtualClass": null,
        "capabilities": [
            "onoff",
            "dim",
            "light_hue",
            "light_saturation"
        ],
        "capabilitiesObj": {
            "onoff": {
                "value": false,
                "lastUpdated": "2018-12-20T02:24:36.440Z",
                "type": "boolean",
                "getable": true,
                "setable": true,
                "title": "Turned on",
                "desc": null,
                "units": null,
                "id": "onoff",
                "options": {}
            },
            "dim": {
                "value": 0.5,
                "lastUpdated": "2018-12-19T23:51:35.672Z",
                "type": "number",
                "getable": true,
                "setable": true,
                "title": "Dim level",
                "desc": null,
                "units": "%",
                "decimals": 2,
                "min": 0,
                "max": 1,
                "chartType": "stepLine",
                "id": "dim",
                "options": {
                    "opts": {
                        "duration": true
                    }
                }
            },
            "light_hue": {
                "value": 0.61,
                "lastUpdated": "2018-12-20T02:24:36.443Z",
                "type": "number",
                "getable": true,
                "setable": true,
                "title": "Hue",
                "desc": null,
                "units": null,
                "decimals": 2,
                "min": 0,
                "max": 1,
                "chartType": "stepLine",
                "id": "light_hue",
                "options": {
                    "opts": {
                        "duration": true
                    }
                }
            },
            "light_saturation": {
                "value": 0.43,
                "lastUpdated": "2018-12-20T02:24:36.445Z",
                "type": "number",
                "getable": true,
                "setable": true,
                "title": "Color Saturation",
                "desc": null,
                "units": null,
                "decimals": 2,
                "min": 0,
                "max": 1,
                "chartType": "stepLine",
                "id": "light_saturation",
                "options": {
                    "opts": {
                        "duration": true
                    }
                }
            }
        },
        "flags": [],
        "ui": {
            "quickAction": "onoff",
            "components": [
                {
                    "id": "toggle",
                    "capabilities": [
                        "onoff"
                    ]
                },
                {
                    "id": "slider",
                    "capabilities": [
                        "dim"
                    ]
                },
                {
                    "id": "color",
                    "capabilities": [
                        "light_hue",
                        "light_saturation"
                    ]
                }
            ],
            "componentsStartAt": 1
        },
        "ready": true,
        "available": true,
        "repair": false,
        "unpair": false,
        "unavailableMessage": null,
        "speechExamples": [
            "Turn all lights on",
            "Turn off all devices",
            "Toggle all lights",
            "Dim all lights to 50%",
            "Set My Light to full brightness",
            "Turn all lights to blue",
            "Turn My Light to pink"
        ],
        "images": [],
        "insights": [
            {
                "uri": "homey:device:19f4dd55-8f64-4cd5-ac18-f170f2e985cd",
                "id": "onoff",
                "type": "boolean",
                "title": "Turned on",
                "titleTrue": "Turned on",
                "titleFalse": "Turned off",
                "units": null,
                "decimals": null
            }
        ],
        "color": "#F4AF2E"
    },
    "0e876ed4-47eb-40ba-b896-9b889c1a7911": {
        "__athom_api_type": "HomeyAPI.ManagerDevices.Device",
        "id": "0e876ed4-47eb-40ba-b896-9b889c1a7911",
        "name": "Left Living Colors",
        "driverUri": "homey:app:nl.philips.hue",
        "driverId": "bulb",
        "zone": "9eb2975d-49ea-4033-8db0-105a3e982117",
        "data": {
            "id": "00:17:88:01:00:05:bb:94-0b",
            "bridge_id": "001788fffeae0a85"
        },
        "icon": null,
        "iconObj": {
            "id": "d1bffcb786b3a386d318c0a4052fe663",
            "url": "/icon/d1bffcb786b3a386d318c0a4052fe663/icon.svg"
        },
        "settings": {},
        "settingsObj": false,
        "class": "light",
        "virtualClass": null,
        "capabilities": [
            "onoff",
            "dim",
            "light_hue",
            "light_saturation"
        ],
        "capabilitiesObj": {
            "onoff": {
                "value": false,
                "lastUpdated": "2018-12-20T02:24:36.449Z",
                "type": "boolean",
                "getable": true,
                "setable": true,
                "title": "Turned on",
                "desc": null,
                "units": null,
                "id": "onoff",
                "options": {}
            },
            "dim": {
                "value": 0.22,
                "lastUpdated": "2018-12-19T23:51:35.701Z",
                "type": "number",
                "getable": true,
                "setable": true,
                "title": "Dim level",
                "desc": null,
                "units": "%",
                "decimals": 2,
                "min": 0,
                "max": 1,
                "chartType": "stepLine",
                "id": "dim",
                "options": {
                    "opts": {
                        "duration": true
                    }
                }
            },
            "light_hue": {
                "value": 0.61,
                "lastUpdated": "2018-12-20T02:24:36.451Z",
                "type": "number",
                "getable": true,
                "setable": true,
                "title": "Hue",
                "desc": null,
                "units": null,
                "decimals": 2,
                "min": 0,
                "max": 1,
                "chartType": "stepLine",
                "id": "light_hue",
                "options": {
                    "opts": {
                        "duration": true
                    }
                }
            },
            "light_saturation": {
                "value": 0.43,
                "lastUpdated": "2018-12-20T02:24:36.453Z",
                "type": "number",
                "getable": true,
                "setable": true,
                "title": "Color Saturation",
                "desc": null,
                "units": null,
                "decimals": 2,
                "min": 0,
                "max": 1,
                "chartType": "stepLine",
                "id": "light_saturation",
                "options": {
                    "opts": {
                        "duration": true
                    }
                }
            }
        },
        "flags": [],
        "ui": {
            "quickAction": "onoff",
            "components": [
                {
                    "id": "toggle",
                    "capabilities": [
                        "onoff"
                    ]
                },
                {
                    "id": "slider",
                    "capabilities": [
                        "dim"
                    ]
                },
                {
                    "id": "color",
                    "capabilities": [
                        "light_hue",
                        "light_saturation"
                    ]
                }
            ],
            "componentsStartAt": 1
        },
        "ready": true,
        "available": true,
        "repair": false,
        "unpair": false,
        "unavailableMessage": null,
        "speechExamples": [
            "Turn all lights on",
            "Turn off all devices",
            "Toggle all lights",
            "Dim all lights to 50%",
            "Set My Light to full brightness",
            "Turn all lights to blue",
            "Turn My Light to pink"
        ],
        "images": [],
        "insights": [
            {
                "uri": "homey:device:0e876ed4-47eb-40ba-b896-9b889c1a7911",
                "id": "onoff",
                "type": "boolean",
                "title": "Turned on",
                "titleTrue": "Turned on",
                "titleFalse": "Turned off",
                "units": null,
                "decimals": null
            }
        ],
        "color": "#F4AF2E"
    },
    "c8e8ea93-0ab0-4724-9b8f-98f27068e5b4": {
        "__athom_api_type": "HomeyAPI.ManagerDevices.Device",
        "id": "c8e8ea93-0ab0-4724-9b8f-98f27068e5b4",
        "name": "Floor Lamp",
        "driverUri": "homey:app:nl.philips.hue",
        "driverId": "bulb",
        "zone": "9eb2975d-49ea-4033-8db0-105a3e982117",
        "data": {
            "id": "00:17:88:01:03:6c:ac:fd-0b",
            "bridge_id": "001788fffeae0a85"
        },
        "icon": null,
        "iconObj": {
            "id": "d1bffcb786b3a386d318c0a4052fe663",
            "url": "/icon/d1bffcb786b3a386d318c0a4052fe663/icon.svg"
        },
        "settings": {},
        "settingsObj": false,
        "class": "light",
        "virtualClass": null,
        "capabilities": [
            "onoff",
            "dim",
            "light_hue",
            "light_saturation",
            "light_temperature",
            "light_mode"
        ],
        "capabilitiesObj": {
            "onoff": {
                "value": false,
                "lastUpdated": "2018-12-20T02:24:36.457Z",
                "type": "boolean",
                "getable": true,
                "setable": true,
                "title": "Turned on",
                "desc": null,
                "units": null,
                "id": "onoff",
                "options": {}
            },
            "dim": {
                "value": 0.5,
                "lastUpdated": "2018-12-19T23:51:35.717Z",
                "type": "number",
                "getable": true,
                "setable": true,
                "title": "Dim level",
                "desc": null,
                "units": "%",
                "decimals": 2,
                "min": 0,
                "max": 1,
                "chartType": "stepLine",
                "id": "dim",
                "options": {
                    "opts": {
                        "duration": true
                    }
                }
            },
            "light_hue": {
                "value": 0.63,
                "lastUpdated": "2018-12-20T02:24:36.460Z",
                "type": "number",
                "getable": true,
                "setable": true,
                "title": "Hue",
                "desc": null,
                "units": null,
                "decimals": 2,
                "min": 0,
                "max": 1,
                "chartType": "stepLine",
                "id": "light_hue",
                "options": {
                    "opts": {
                        "duration": true
                    }
                }
            },
            "light_saturation": {
                "value": 0.3,
                "lastUpdated": "2018-12-20T02:24:36.462Z",
                "type": "number",
                "getable": true,
                "setable": true,
                "title": "Color Saturation",
                "desc": null,
                "units": null,
                "decimals": 2,
                "min": 0,
                "max": 1,
                "chartType": "stepLine",
                "id": "light_saturation",
                "options": {
                    "opts": {
                        "duration": true
                    }
                }
            },
            "light_temperature": {
                "value": 0.01,
                "lastUpdated": "2018-12-20T02:24:36.464Z",
                "type": "number",
                "getable": true,
                "setable": true,
                "title": "Color Temperature",
                "desc": null,
                "units": null,
                "decimals": 2,
                "min": 0,
                "max": 1,
                "chartType": "stepLine",
                "id": "light_temperature",
                "options": {
                    "opts": {
                        "duration": true
                    }
                }
            },
            "light_mode": {
                "value": "color",
                "lastUpdated": "2018-12-20T02:24:36.466Z",
                "type": "enum",
                "getable": true,
                "setable": true,
                "title": "Light mode",
                "desc": "Switch between Color or Temperature mode",
                "units": null,
                "values": [
                    {
                        "id": "color",
                        "title": "Color"
                    },
                    {
                        "id": "temperature",
                        "title": "Temperature"
                    }
                ],
                "id": "light_mode",
                "options": {}
            }
        },
        "flags": [],
        "ui": {
            "quickAction": "onoff",
            "components": [
                {
                    "id": "toggle",
                    "capabilities": [
                        "onoff"
                    ]
                },
                {
                    "id": "slider",
                    "capabilities": [
                        "dim"
                    ]
                },
                {
                    "id": "color",
                    "capabilities": [
                        "light_hue",
                        "light_saturation",
                        "light_temperature",
                        "light_mode"
                    ]
                }
            ],
            "componentsStartAt": 1
        },
        "ready": true,
        "available": true,
        "repair": false,
        "unpair": false,
        "unavailableMessage": null,
        "speechExamples": [
            "Turn all lights on",
            "Turn off all devices",
            "Toggle all lights",
            "Dim all lights to 50%",
            "Set My Light to full brightness",
            "Turn all lights to blue",
            "Turn My Light to pink",
            "Turn all lights to warm white",
            "Turn My Light to cool white"
        ],
        "images": [],
        "insights": [
            {
                "uri": "homey:device:c8e8ea93-0ab0-4724-9b8f-98f27068e5b4",
                "id": "onoff",
                "type": "boolean",
                "title": "Turned on",
                "titleTrue": "Turned on",
                "titleFalse": "Turned off",
                "units": null,
                "decimals": null
            }
        ],
        "color": "#F4AF2E"
    },
    "f62ff2b4-f649-4de0-a75f-644327cd9877": {
        "__athom_api_type": "HomeyAPI.ManagerDevices.Device",
        "id": "f62ff2b4-f649-4de0-a75f-644327cd9877",
        "name": "Living  Room Light",
        "driverUri": "homey:app:com.fibaro",
        "driverId": "FGD-212",
        "zone": "9eb2975d-49ea-4033-8db0-105a3e982117",
        "data": {
            "token": "74dbffda-ea7e-43e5-80f5-e36d59b787b9"
        },
        "icon": "/icon.svg",
        "iconObj": {
            "id": "51f5fb8d1a1cd286c3ad08906208bfe7",
            "url": "/icon/51f5fb8d1a1cd286c3ad08906208bfe7/icon.svg"
        },
        "settings": {
            "minimum_brightness": 13,
            "maximum_brightness": 79,
            "dimming_step_auto": 1,
            "time_dimming_step_auto": 1,
            "dimming_step_manual": 1,
            "time_dimming_step_manual": 5,
            "save_state": true,
            "timer_functionality": 0,
            "force_auto_calibration": "1",
            "forced_brightness_level": 99,
            "switch_type": "0",
            "double_click": true,
            "force_no_dim": false,
            "soft_start": "1",
            "3_way_switch": false,
            "switch_s1_and_s2": false,
            "scene_activation": true,
            "watt_report": 10,
            "watt_interval": 3600,
            "kwh_report": 0.1,
            "self_measurement": false,
            "zw_node_id": "4",
            "zw_manufacturer_id": "271",
            "zw_product_type_id": "258",
            "zw_product_id": "12288",
            "zw_secure": "manager.vdevice.drivers.zwavebasic.devicesettings.yes_true",
            "zw_battery": "manager.vdevice.drivers.zwavebasic.devicesettings.yes_false",
            "zw_device_class_basic": "BASIC_TYPE_ROUTING_SLAVE",
            "zw_device_class_generic": "GENERIC_TYPE_SWITCH_MULTILEVEL",
            "zw_device_class_specific": "SPECIFIC_TYPE_POWER_SWITCH_MULTILEVEL",
            "zw_firmware_id": "306",
            "zw_wakeup_interval": 0,
            "zw_group_1": "1",
            "zw_group_2": "",
            "zw_group_3": "",
            "zw_group_4": "",
            "zw_group_5": "",
            "zw_configuration_value": ""
        },
        "settingsObj": true,
        "class": "light",
        "virtualClass": null,
        "capabilities": [
            "onoff",
            "dim",
            "measure_power",
            "meter_power"
        ],
        "capabilitiesObj": {
            "onoff": {
                "value": true,
                "lastUpdated": "2018-12-19T11:18:43.266Z",
                "type": "boolean",
                "getable": true,
                "setable": true,
                "title": "Turned on",
                "desc": null,
                "units": null,
                "id": "onoff",
                "options": {
                    "setOnDim": false
                }
            },
            "dim": {
                "value": 1,
                "lastUpdated": "2018-12-19T11:18:43.297Z",
                "type": "number",
                "getable": true,
                "setable": true,
                "title": "Dim level",
                "desc": null,
                "units": "%",
                "decimals": 2,
                "min": 0,
                "max": 1,
                "chartType": "stepLine",
                "id": "dim",
                "options": {
                    "opts": {
                        "duration": true
                    }
                }
            },
            "measure_power": {
                "value": 102.1,
                "lastUpdated": "2018-12-20T01:36:18.213Z",
                "type": "number",
                "getable": true,
                "setable": false,
                "title": "Power",
                "desc": "Power in Watt (W)",
                "units": "W",
                "decimals": 2,
                "chartType": "stepLine",
                "id": "measure_power",
                "options": {}
            },
            "meter_power": {
                "value": 74,
                "lastUpdated": "2018-12-20T01:30:15.182Z",
                "type": "number",
                "getable": true,
                "setable": false,
                "title": "Power Meter",
                "desc": "Power usage in KiloWattHour (kWh)",
                "units": "KWh",
                "decimals": 2,
                "chartType": "spline",
                "id": "meter_power",
                "options": {}
            }
        },
        "flags": [
            "zwave"
        ],
        "ui": {
            "quickAction": "onoff",
            "components": [
                {
                    "id": "toggle",
                    "capabilities": [
                        "onoff"
                    ]
                },
                {
                    "id": "slider",
                    "capabilities": [
                        "dim"
                    ]
                },
                {
                    "id": "sensor",
                    "capabilities": [
                        "measure_power",
                        "meter_power"
                    ]
                }
            ],
            "componentsStartAt": 1
        },
        "ready": true,
        "available": true,
        "repair": false,
        "unpair": true,
        "speechExamples": [
            "Turn all lights on",
            "Turn off all devices",
            "Toggle all lights",
            "Dim all lights to 50%",
            "Set My Light to full brightness"
        ],
        "images": [],
        "insights": [
            {
                "uri": "homey:device:f62ff2b4-f649-4de0-a75f-644327cd9877",
                "id": "onoff",
                "type": "boolean",
                "title": "Turned on",
                "titleTrue": "Turned on",
                "titleFalse": "Turned off",
                "units": null,
                "decimals": null
            },
            {
                "uri": "homey:device:f62ff2b4-f649-4de0-a75f-644327cd9877",
                "id": "measure_power",
                "type": "number",
                "title": "Power",
                "titleTrue": null,
                "titleFalse": null,
                "units": "W"
            },
            {
                "uri": "homey:device:f62ff2b4-f649-4de0-a75f-644327cd9877",
                "id": "meter_power",
                "type": "number",
                "title": "Power Meter",
                "titleTrue": null,
                "titleFalse": null,
                "units": "KWh"
            }
        ],
        "color": "#000000"
    },
    "f45490ab-5232-4caa-a1e9-c28c06f5ed00": {
        "__athom_api_type": "HomeyAPI.ManagerDevices.Device",
        "id": "f45490ab-5232-4caa-a1e9-c28c06f5ed00",
        "name": "Bathroom Light",
        "driverUri": "homey:app:com.fibaro",
        "driverId": "FGD-212",
        "zone": "8a6928ea-26b2-4922-9ead-d20ee6695dd3",
        "data": {
            "token": "ec082ccf-e6a7-44e9-8c50-1e61cceb6f28"
        },
        "icon": "/icon.svg",
        "iconObj": {
            "id": "51f5fb8d1a1cd286c3ad08906208bfe7",
            "url": "/icon/51f5fb8d1a1cd286c3ad08906208bfe7/icon.svg"
        },
        "settings": {
            "minimum_brightness": 24,
            "maximum_brightness": 64,
            "dimming_step_auto": 1,
            "time_dimming_step_auto": 1,
            "dimming_step_manual": 1,
            "time_dimming_step_manual": 5,
            "save_state": true,
            "timer_functionality": 0,
            "force_auto_calibration": "0",
            "forced_brightness_level": 9,
            "switch_type": "0",
            "double_click": true,
            "force_no_dim": false,
            "soft_start": "1",
            "3_way_switch": false,
            "switch_s1_and_s2": false,
            "scene_activation": false,
            "watt_report": 10,
            "watt_interval": 3600,
            "kwh_report": 0.1,
            "self_measurement": false,
            "zw_node_id": "11",
            "zw_manufacturer_id": "271",
            "zw_product_type_id": "258",
            "zw_product_id": "12288",
            "zw_secure": "manager.vdevice.drivers.zwavebasic.devicesettings.yes_true",
            "zw_battery": "manager.vdevice.drivers.zwavebasic.devicesettings.yes_false",
            "zw_device_class_basic": "BASIC_TYPE_ROUTING_SLAVE",
            "zw_device_class_generic": "GENERIC_TYPE_SWITCH_MULTILEVEL",
            "zw_device_class_specific": "SPECIFIC_TYPE_POWER_SWITCH_MULTILEVEL",
            "zw_firmware_id": "306",
            "zw_wakeup_interval": 0,
            "zw_group_1": "1",
            "zw_group_2": "",
            "zw_group_3": "",
            "zw_group_4": "",
            "zw_group_5": "",
            "zw_configuration_value": ""
        },
        "settingsObj": true,
        "class": "light",
        "virtualClass": null,
        "capabilities": [
            "onoff",
            "dim",
            "measure_power",
            "meter_power"
        ],
        "capabilitiesObj": {
            "onoff": {
                "value": true,
                "lastUpdated": "2018-12-19T19:58:31.504Z",
                "type": "boolean",
                "getable": true,
                "setable": true,
                "title": "Turned on",
                "desc": null,
                "units": null,
                "id": "onoff",
                "options": {
                    "setOnDim": false
                }
            },
            "dim": {
                "value": 0.09,
                "lastUpdated": "2018-12-19T19:58:31.504Z",
                "type": "number",
                "getable": true,
                "setable": true,
                "title": "Dim level",
                "desc": null,
                "units": "%",
                "decimals": 2,
                "min": 0,
                "max": 1,
                "chartType": "stepLine",
                "id": "dim",
                "options": {
                    "opts": {
                        "duration": true
                    }
                }
            },
            "measure_power": {
                "value": 2.4,
                "lastUpdated": "2018-12-20T01:58:48.981Z",
                "type": "number",
                "getable": true,
                "setable": false,
                "title": "Power",
                "desc": "Power in Watt (W)",
                "units": "W",
                "decimals": 2,
                "chartType": "stepLine",
                "id": "measure_power",
                "options": {}
            },
            "meter_power": {
                "value": 8.45,
                "lastUpdated": "2018-12-20T01:59:49.810Z",
                "type": "number",
                "getable": true,
                "setable": false,
                "title": "Power Meter",
                "desc": "Power usage in KiloWattHour (kWh)",
                "units": "KWh",
                "decimals": 2,
                "chartType": "spline",
                "id": "meter_power",
                "options": {}
            }
        },
        "flags": [
            "zwave"
        ],
        "ui": {
            "quickAction": "onoff",
            "components": [
                {
                    "id": "toggle",
                    "capabilities": [
                        "onoff"
                    ]
                },
                {
                    "id": "slider",
                    "capabilities": [
                        "dim"
                    ]
                },
                {
                    "id": "sensor",
                    "capabilities": [
                        "measure_power",
                        "meter_power"
                    ]
                }
            ],
            "componentsStartAt": 1
        },
        "ready": true,
        "available": true,
        "repair": false,
        "unpair": true,
        "speechExamples": [
            "Turn all lights on",
            "Turn off all devices",
            "Toggle all lights",
            "Dim all lights to 50%",
            "Set My Light to full brightness"
        ],
        "images": [],
        "insights": [
            {
                "uri": "homey:device:f45490ab-5232-4caa-a1e9-c28c06f5ed00",
                "id": "onoff",
                "type": "boolean",
                "title": "Turned on",
                "titleTrue": "Turned on",
                "titleFalse": "Turned off",
                "units": null,
                "decimals": null
            },
            {
                "uri": "homey:device:f45490ab-5232-4caa-a1e9-c28c06f5ed00",
                "id": "measure_power",
                "type": "number",
                "title": "Power",
                "titleTrue": null,
                "titleFalse": null,
                "units": "W"
            },
            {
                "uri": "homey:device:f45490ab-5232-4caa-a1e9-c28c06f5ed00",
                "id": "meter_power",
                "type": "number",
                "title": "Power Meter",
                "titleTrue": null,
                "titleFalse": null,
                "units": "KWh"
            }
        ],
        "color": "#000000"
    },
    "516b71a3-0ffe-4142-b81b-bb697f49a0da": {
        "__athom_api_type": "HomeyAPI.ManagerDevices.Device",
        "id": "516b71a3-0ffe-4142-b81b-bb697f49a0da",
        "name": "Pantry Light",
        "driverUri": "homey:app:com.fibaro",
        "driverId": "FGD-212",
        "zone": "4eebb10d-adcf-4d15-80f7-ff7ebb376ffa",
        "data": {
            "token": "6bd0f21d-3f34-4ee5-b54e-b9867523a0e0"
        },
        "icon": "/icon.svg",
        "iconObj": {
            "id": "51f5fb8d1a1cd286c3ad08906208bfe7",
            "url": "/icon/51f5fb8d1a1cd286c3ad08906208bfe7/icon.svg"
        },
        "settings": {
            "minimum_brightness": 4,
            "maximum_brightness": 50,
            "dimming_step_auto": 1,
            "time_dimming_step_auto": 1,
            "dimming_step_manual": 1,
            "time_dimming_step_manual": 5,
            "save_state": true,
            "timer_functionality": 0,
            "force_auto_calibration": "0",
            "forced_brightness_level": 0,
            "switch_type": "0",
            "double_click": true,
            "force_no_dim": false,
            "soft_start": "0",
            "3_way_switch": false,
            "switch_s1_and_s2": false,
            "scene_activation": true,
            "watt_report": 10,
            "watt_interval": 3600,
            "kwh_report": 0.1,
            "self_measurement": false,
            "zw_node_id": "14",
            "zw_manufacturer_id": "271",
            "zw_product_type_id": "258",
            "zw_product_id": "12288",
            "zw_secure": "manager.vdevice.drivers.zwavebasic.devicesettings.yes_true",
            "zw_battery": "manager.vdevice.drivers.zwavebasic.devicesettings.yes_false",
            "zw_device_class_basic": "BASIC_TYPE_ROUTING_SLAVE",
            "zw_device_class_generic": "GENERIC_TYPE_SWITCH_MULTILEVEL",
            "zw_device_class_specific": "SPECIFIC_TYPE_POWER_SWITCH_MULTILEVEL",
            "zw_firmware_id": "306",
            "zw_wakeup_interval": 0,
            "zw_group_1": "1",
            "zw_group_2": "",
            "zw_group_3": "",
            "zw_group_4": "",
            "zw_group_5": "",
            "zw_configuration_value": ""
        },
        "settingsObj": true,
        "class": "light",
        "virtualClass": null,
        "capabilities": [
            "onoff",
            "dim",
            "measure_power",
            "meter_power"
        ],
        "capabilitiesObj": {
            "onoff": {
                "value": true,
                "lastUpdated": "2018-12-19T11:18:45.670Z",
                "type": "boolean",
                "getable": true,
                "setable": true,
                "title": "Turned on",
                "desc": null,
                "units": null,
                "id": "onoff",
                "options": {
                    "setOnDim": false
                }
            },
            "dim": {
                "value": 0.53,
                "lastUpdated": "2018-12-19T11:18:45.671Z",
                "type": "number",
                "getable": true,
                "setable": true,
                "title": "Dim level",
                "desc": null,
                "units": "%",
                "decimals": 2,
                "min": 0,
                "max": 1,
                "chartType": "stepLine",
                "id": "dim",
                "options": {
                    "opts": {
                        "duration": true
                    }
                }
            },
            "measure_power": {
                "value": 23.6,
                "lastUpdated": "2018-12-20T01:54:15.680Z",
                "type": "number",
                "getable": true,
                "setable": false,
                "title": "Power",
                "desc": "Power in Watt (W)",
                "units": "W",
                "decimals": 2,
                "chartType": "stepLine",
                "id": "measure_power",
                "options": {}
            },
            "meter_power": {
                "value": 21.83,
                "lastUpdated": "2018-12-20T01:35:53.032Z",
                "type": "number",
                "getable": true,
                "setable": false,
                "title": "Power Meter",
                "desc": "Power usage in KiloWattHour (kWh)",
                "units": "KWh",
                "decimals": 2,
                "chartType": "spline",
                "id": "meter_power",
                "options": {}
            }
        },
        "flags": [
            "zwave"
        ],
        "ui": {
            "quickAction": "onoff",
            "components": [
                {
                    "id": "toggle",
                    "capabilities": [
                        "onoff"
                    ]
                },
                {
                    "id": "slider",
                    "capabilities": [
                        "dim"
                    ]
                },
                {
                    "id": "sensor",
                    "capabilities": [
                        "measure_power",
                        "meter_power"
                    ]
                }
            ],
            "componentsStartAt": 1
        },
        "ready": true,
        "available": true,
        "repair": false,
        "unpair": true,
        "speechExamples": [
            "Turn all lights on",
            "Turn off all devices",
            "Toggle all lights",
            "Dim all lights to 50%",
            "Set My Light to full brightness"
        ],
        "images": [],
        "insights": [
            {
                "uri": "homey:device:516b71a3-0ffe-4142-b81b-bb697f49a0da",
                "id": "onoff",
                "type": "boolean",
                "title": "Turned on",
                "titleTrue": "Turned on",
                "titleFalse": "Turned off",
                "units": null,
                "decimals": null
            },
            {
                "uri": "homey:device:516b71a3-0ffe-4142-b81b-bb697f49a0da",
                "id": "measure_power",
                "type": "number",
                "title": "Power",
                "titleTrue": null,
                "titleFalse": null,
                "units": "W"
            },
            {
                "uri": "homey:device:516b71a3-0ffe-4142-b81b-bb697f49a0da",
                "id": "meter_power",
                "type": "number",
                "title": "Power Meter",
                "titleTrue": null,
                "titleFalse": null,
                "units": "KWh"
            }
        ],
        "color": "#000000"
    },
    "e580ae8d-4419-49e3-976c-ff538d0bd24a": {
        "__athom_api_type": "HomeyAPI.ManagerDevices.Device",
        "id": "e580ae8d-4419-49e3-976c-ff538d0bd24a",
        "name": "Dining Room Light",
        "driverUri": "homey:app:com.fibaro",
        "driverId": "FGD-212",
        "zone": "235c928c-cdaa-4930-a8c6-5a2e44de9d80",
        "data": {
            "token": "3bdde092-903b-42be-a6e9-7b24f9ceec04"
        },
        "icon": "/icon.svg",
        "iconObj": {
            "id": "51f5fb8d1a1cd286c3ad08906208bfe7",
            "url": "/icon/51f5fb8d1a1cd286c3ad08906208bfe7/icon.svg"
        },
        "settings": {
            "minimum_brightness": 10,
            "maximum_brightness": 76,
            "dimming_step_auto": 1,
            "time_dimming_step_auto": 1,
            "dimming_step_manual": 1,
            "time_dimming_step_manual": 5,
            "save_state": true,
            "timer_functionality": 0,
            "force_auto_calibration": "0",
            "forced_brightness_level": 0,
            "switch_type": "0",
            "double_click": true,
            "force_no_dim": false,
            "soft_start": "1",
            "3_way_switch": false,
            "switch_s1_and_s2": false,
            "scene_activation": false,
            "watt_report": 10,
            "watt_interval": 3600,
            "kwh_report": 0.1,
            "self_measurement": false,
            "zw_node_id": "2",
            "zw_manufacturer_id": "271",
            "zw_product_type_id": "258",
            "zw_product_id": "12288",
            "zw_secure": "manager.vdevice.drivers.zwavebasic.devicesettings.yes_true",
            "zw_battery": "manager.vdevice.drivers.zwavebasic.devicesettings.yes_false",
            "zw_device_class_basic": "BASIC_TYPE_ROUTING_SLAVE",
            "zw_device_class_generic": "GENERIC_TYPE_SWITCH_MULTILEVEL",
            "zw_device_class_specific": "SPECIFIC_TYPE_POWER_SWITCH_MULTILEVEL",
            "zw_firmware_id": "306",
            "zw_wakeup_interval": 0,
            "zw_group_1": "1",
            "zw_group_2": "",
            "zw_group_3": "",
            "zw_group_4": "",
            "zw_group_5": "",
            "zw_configuration_value": ""
        },
        "settingsObj": true,
        "class": "light",
        "virtualClass": null,
        "capabilities": [
            "onoff",
            "dim",
            "measure_power",
            "meter_power"
        ],
        "capabilitiesObj": {
            "onoff": {
                "value": false,
                "lastUpdated": "2018-12-19T12:34:14.001Z",
                "type": "boolean",
                "getable": true,
                "setable": true,
                "title": "Turned on",
                "desc": null,
                "units": null,
                "id": "onoff",
                "options": {
                    "setOnDim": false
                }
            },
            "dim": {
                "value": 0,
                "lastUpdated": "2018-12-19T12:34:14.012Z",
                "type": "number",
                "getable": true,
                "setable": true,
                "title": "Dim level",
                "desc": null,
                "units": "%",
                "decimals": 2,
                "min": 0,
                "max": 1,
                "chartType": "stepLine",
                "id": "dim",
                "options": {
                    "opts": {
                        "duration": true
                    }
                }
            },
            "measure_power": {
                "value": 0,
                "lastUpdated": "2018-12-20T01:35:46.447Z",
                "type": "number",
                "getable": true,
                "setable": false,
                "title": "Power",
                "desc": "Power in Watt (W)",
                "units": "W",
                "decimals": 2,
                "chartType": "stepLine",
                "id": "measure_power",
                "options": {}
            },
            "meter_power": {
                "value": 43.41,
                "lastUpdated": "2018-12-20T02:13:18.197Z",
                "type": "number",
                "getable": true,
                "setable": false,
                "title": "Power Meter",
                "desc": "Power usage in KiloWattHour (kWh)",
                "units": "KWh",
                "decimals": 2,
                "chartType": "spline",
                "id": "meter_power",
                "options": {}
            }
        },
        "flags": [
            "zwave"
        ],
        "ui": {
            "quickAction": "onoff",
            "components": [
                {
                    "id": "toggle",
                    "capabilities": [
                        "onoff"
                    ]
                },
                {
                    "id": "slider",
                    "capabilities": [
                        "dim"
                    ]
                },
                {
                    "id": "sensor",
                    "capabilities": [
                        "measure_power",
                        "meter_power"
                    ]
                }
            ],
            "componentsStartAt": 1
        },
        "ready": true,
        "available": true,
        "repair": false,
        "unpair": true,
        "speechExamples": [
            "Turn all lights on",
            "Turn off all devices",
            "Toggle all lights",
            "Dim all lights to 50%",
            "Set My Light to full brightness"
        ],
        "images": [],
        "insights": [
            {
                "uri": "homey:device:e580ae8d-4419-49e3-976c-ff538d0bd24a",
                "id": "onoff",
                "type": "boolean",
                "title": "Turned on",
                "titleTrue": "Turned on",
                "titleFalse": "Turned off",
                "units": null,
                "decimals": null
            },
            {
                "uri": "homey:device:e580ae8d-4419-49e3-976c-ff538d0bd24a",
                "id": "measure_power",
                "type": "number",
                "title": "Power",
                "titleTrue": null,
                "titleFalse": null,
                "units": "W"
            },
            {
                "uri": "homey:device:e580ae8d-4419-49e3-976c-ff538d0bd24a",
                "id": "meter_power",
                "type": "number",
                "title": "Power Meter",
                "titleTrue": null,
                "titleFalse": null,
                "units": "KWh"
            }
        ],
        "color": "#000000"
    },
    "54222076-fe13-43b8-96cd-cbc7b565d2f9": {
        "__athom_api_type": "HomeyAPI.ManagerDevices.Device",
        "id": "54222076-fe13-43b8-96cd-cbc7b565d2f9",
        "name": "Robe Light",
        "driverUri": "homey:app:com.fibaro",
        "driverId": "FGD-212",
        "zone": "ddc3cdaa-8172-4c4a-97c9-22d8ec462972",
        "data": {
            "token": "a29c289e-40a1-4397-8c46-9eaf16b986e2"
        },
        "icon": "/icon.svg",
        "iconObj": {
            "id": "51f5fb8d1a1cd286c3ad08906208bfe7",
            "url": "/icon/51f5fb8d1a1cd286c3ad08906208bfe7/icon.svg"
        },
        "settings": {
            "minimum_brightness": 25,
            "maximum_brightness": 64,
            "dimming_step_auto": 1,
            "time_dimming_step_auto": 1,
            "dimming_step_manual": 1,
            "time_dimming_step_manual": 5,
            "save_state": true,
            "timer_functionality": 0,
            "force_auto_calibration": "0",
            "forced_brightness_level": 0,
            "switch_type": "0",
            "double_click": false,
            "force_no_dim": false,
            "soft_start": "1",
            "3_way_switch": false,
            "switch_s1_and_s2": false,
            "scene_activation": true,
            "watt_report": 10,
            "watt_interval": 3600,
            "kwh_report": 0.1,
            "self_measurement": false,
            "zw_node_id": "10",
            "zw_manufacturer_id": "271",
            "zw_product_type_id": "258",
            "zw_product_id": "12288",
            "zw_secure": "manager.vdevice.drivers.zwavebasic.devicesettings.yes_true",
            "zw_battery": "manager.vdevice.drivers.zwavebasic.devicesettings.yes_false",
            "zw_device_class_basic": "BASIC_TYPE_ROUTING_SLAVE",
            "zw_device_class_generic": "GENERIC_TYPE_SWITCH_MULTILEVEL",
            "zw_device_class_specific": "SPECIFIC_TYPE_POWER_SWITCH_MULTILEVEL",
            "zw_firmware_id": "306",
            "zw_wakeup_interval": 0,
            "zw_group_1": "1",
            "zw_group_2": "",
            "zw_group_3": "",
            "zw_group_4": "",
            "zw_group_5": "",
            "zw_configuration_value": ""
        },
        "settingsObj": true,
        "class": "light",
        "virtualClass": null,
        "capabilities": [
            "onoff",
            "dim",
            "measure_power",
            "meter_power"
        ],
        "capabilitiesObj": {
            "onoff": {
                "value": true,
                "lastUpdated": "2018-12-19T23:23:28.741Z",
                "type": "boolean",
                "getable": true,
                "setable": true,
                "title": "Turned on",
                "desc": null,
                "units": null,
                "id": "onoff",
                "options": {
                    "setOnDim": false
                }
            },
            "dim": {
                "value": 0.49,
                "lastUpdated": "2018-12-19T23:23:28.744Z",
                "type": "number",
                "getable": true,
                "setable": true,
                "title": "Dim level",
                "desc": null,
                "units": "%",
                "decimals": 2,
                "min": 0,
                "max": 1,
                "chartType": "stepLine",
                "id": "dim",
                "options": {
                    "opts": {
                        "duration": true
                    }
                }
            },
            "measure_power": {
                "value": 5.7,
                "lastUpdated": "2018-12-20T02:23:41.973Z",
                "type": "number",
                "getable": true,
                "setable": false,
                "title": "Power",
                "desc": "Power in Watt (W)",
                "units": "W",
                "decimals": 2,
                "chartType": "stepLine",
                "id": "measure_power",
                "options": {}
            },
            "meter_power": {
                "value": 16.86,
                "lastUpdated": "2018-12-20T01:49:53.426Z",
                "type": "number",
                "getable": true,
                "setable": false,
                "title": "Power Meter",
                "desc": "Power usage in KiloWattHour (kWh)",
                "units": "KWh",
                "decimals": 2,
                "chartType": "spline",
                "id": "meter_power",
                "options": {}
            }
        },
        "flags": [
            "zwave"
        ],
        "ui": {
            "quickAction": "onoff",
            "components": [
                {
                    "id": "toggle",
                    "capabilities": [
                        "onoff"
                    ]
                },
                {
                    "id": "slider",
                    "capabilities": [
                        "dim"
                    ]
                },
                {
                    "id": "sensor",
                    "capabilities": [
                        "measure_power",
                        "meter_power"
                    ]
                }
            ],
            "componentsStartAt": 1
        },
        "ready": true,
        "available": true,
        "repair": false,
        "unpair": true,
        "speechExamples": [
            "Turn all lights on",
            "Turn off all devices",
            "Toggle all lights",
            "Dim all lights to 50%",
            "Set My Light to full brightness"
        ],
        "images": [],
        "insights": [
            {
                "uri": "homey:device:54222076-fe13-43b8-96cd-cbc7b565d2f9",
                "id": "measure_power",
                "type": "number",
                "title": "Power",
                "titleTrue": null,
                "titleFalse": null,
                "units": "W"
            },
            {
                "uri": "homey:device:54222076-fe13-43b8-96cd-cbc7b565d2f9",
                "id": "meter_power",
                "type": "number",
                "title": "Power Meter",
                "titleTrue": null,
                "titleFalse": null,
                "units": "KWh"
            },
            {
                "uri": "homey:device:54222076-fe13-43b8-96cd-cbc7b565d2f9",
                "id": "onoff",
                "type": "boolean",
                "title": "Turned on",
                "titleTrue": "Turned on",
                "titleFalse": "Turned off",
                "units": null,
                "decimals": null
            }
        ],
        "color": "#000000"
    },
    "d0851557-6ae3-4ef0-81b5-722ac46b2ee1": {
        "__athom_api_type": "HomeyAPI.ManagerDevices.Device",
        "id": "d0851557-6ae3-4ef0-81b5-722ac46b2ee1",
        "name": "Bedroom Light",
        "driverUri": "homey:app:com.fibaro",
        "driverId": "FGD-212",
        "zone": "ddc3cdaa-8172-4c4a-97c9-22d8ec462972",
        "data": {
            "token": "e3f13dc1-d94d-4053-9663-c624b5763e9d"
        },
        "icon": "/icon.svg",
        "iconObj": {
            "id": "51f5fb8d1a1cd286c3ad08906208bfe7",
            "url": "/icon/51f5fb8d1a1cd286c3ad08906208bfe7/icon.svg"
        },
        "settings": {
            "minimum_brightness": 4,
            "maximum_brightness": 99,
            "dimming_step_auto": 1,
            "time_dimming_step_auto": 1,
            "dimming_step_manual": 1,
            "time_dimming_step_manual": 5,
            "save_state": true,
            "timer_functionality": 0,
            "force_auto_calibration": "0",
            "forced_brightness_level": 0,
            "switch_type": "0",
            "double_click": true,
            "force_no_dim": false,
            "soft_start": "1",
            "3_way_switch": false,
            "switch_s1_and_s2": false,
            "scene_activation": true,
            "watt_report": 10,
            "watt_interval": 3600,
            "kwh_report": 0.1,
            "self_measurement": false,
            "zw_node_id": "9",
            "zw_manufacturer_id": "271",
            "zw_product_type_id": "258",
            "zw_product_id": "12288",
            "zw_secure": "manager.vdevice.drivers.zwavebasic.devicesettings.yes_true",
            "zw_battery": "manager.vdevice.drivers.zwavebasic.devicesettings.yes_false",
            "zw_device_class_basic": "BASIC_TYPE_ROUTING_SLAVE",
            "zw_device_class_generic": "GENERIC_TYPE_SWITCH_MULTILEVEL",
            "zw_device_class_specific": "SPECIFIC_TYPE_POWER_SWITCH_MULTILEVEL",
            "zw_firmware_id": "306",
            "zw_wakeup_interval": 0,
            "zw_group_1": "1",
            "zw_group_2": "",
            "zw_group_3": "",
            "zw_group_4": "",
            "zw_group_5": "",
            "zw_configuration_value": ""
        },
        "settingsObj": true,
        "class": "light",
        "virtualClass": null,
        "capabilities": [
            "onoff",
            "dim",
            "measure_power",
            "meter_power"
        ],
        "capabilitiesObj": {
            "onoff": {
                "value": false,
                "lastUpdated": "2018-12-19T13:13:05.851Z",
                "type": "boolean",
                "getable": true,
                "setable": true,
                "title": "Turned on",
                "desc": null,
                "units": null,
                "id": "onoff",
                "options": {
                    "setOnDim": false
                }
            },
            "dim": {
                "value": 0.83,
                "lastUpdated": "2018-12-19T12:28:11.730Z",
                "type": "number",
                "getable": true,
                "setable": true,
                "title": "Dim level",
                "desc": null,
                "units": "%",
                "decimals": 2,
                "min": 0,
                "max": 1,
                "chartType": "stepLine",
                "id": "dim",
                "options": {
                    "opts": {
                        "duration": true
                    }
                }
            },
            "measure_power": {
                "value": 0,
                "lastUpdated": "2018-12-20T02:14:47.357Z",
                "type": "number",
                "getable": true,
                "setable": false,
                "title": "Power",
                "desc": "Power in Watt (W)",
                "units": "W",
                "decimals": 2,
                "chartType": "stepLine",
                "id": "measure_power",
                "options": {}
            },
            "meter_power": {
                "value": 51.71,
                "lastUpdated": "2018-12-20T01:48:39.415Z",
                "type": "number",
                "getable": true,
                "setable": false,
                "title": "Power Meter",
                "desc": "Power usage in KiloWattHour (kWh)",
                "units": "KWh",
                "decimals": 2,
                "chartType": "spline",
                "id": "meter_power",
                "options": {}
            }
        },
        "flags": [
            "zwave"
        ],
        "ui": {
            "quickAction": "onoff",
            "components": [
                {
                    "id": "toggle",
                    "capabilities": [
                        "onoff"
                    ]
                },
                {
                    "id": "slider",
                    "capabilities": [
                        "dim"
                    ]
                },
                {
                    "id": "sensor",
                    "capabilities": [
                        "measure_power",
                        "meter_power"
                    ]
                }
            ],
            "componentsStartAt": 1
        },
        "ready": true,
        "available": true,
        "repair": false,
        "unpair": true,
        "speechExamples": [
            "Turn all lights on",
            "Turn off all devices",
            "Toggle all lights",
            "Dim all lights to 50%",
            "Set My Light to full brightness"
        ],
        "images": [],
        "insights": [
            {
                "uri": "homey:device:d0851557-6ae3-4ef0-81b5-722ac46b2ee1",
                "id": "onoff",
                "type": "boolean",
                "title": "Turned on",
                "titleTrue": "Turned on",
                "titleFalse": "Turned off",
                "units": null,
                "decimals": null
            },
            {
                "uri": "homey:device:d0851557-6ae3-4ef0-81b5-722ac46b2ee1",
                "id": "measure_power",
                "type": "number",
                "title": "Power",
                "titleTrue": null,
                "titleFalse": null,
                "units": "W"
            },
            {
                "uri": "homey:device:d0851557-6ae3-4ef0-81b5-722ac46b2ee1",
                "id": "meter_power",
                "type": "number",
                "title": "Power Meter",
                "titleTrue": null,
                "titleFalse": null,
                "units": "KWh"
            }
        ],
        "color": "#000000"
    },
    "71d10c80-1c3c-49d8-9321-63241b6607b4": {
        "__athom_api_type": "HomeyAPI.ManagerDevices.Device",
        "id": "71d10c80-1c3c-49d8-9321-63241b6607b4",
        "name": "Light",
        "driverUri": "homey:app:com.swttt.devicegroups",
        "driverId": "light",
        "zone": "ddc3cdaa-8172-4c4a-97c9-22d8ec462972",
        "data": {
            "id": "5rsyjg"
        },
        "icon": "../../../assets/icons/categories/light/standard/a_classic.svg",
        "iconObj": {
            "id": "ec86fb068718aa42d82005bc67cbf848",
            "url": "/icon/ec86fb068718aa42d82005bc67cbf848/icon.svg"
        },
        "settings": {
            "capabilities": {
                "onoff": {
                    "method": "any"
                },
                "dim": {
                    "method": "mean"
                },
                "measure_power": {
                    "method": "sum"
                },
                "meter_power": {
                    "method": "sum"
                }
            },
            "devices": [
                "d0851557-6ae3-4ef0-81b5-722ac46b2ee1",
                "54222076-fe13-43b8-96cd-cbc7b565d2f9"
            ],
            "labelClass": "Light",
            "labelCapabilities": "Turned on (On if Any), Dim level (Mean Average), Power (Total Value), Power Meter (Total Value)",
            "labelDevices": "Bedroom Light, Robe Light",
            "notes": ""
        },
        "settingsObj": true,
        "class": "light",
        "virtualClass": null,
        "capabilities": [
            "onoff",
            "dim",
            "measure_power",
            "meter_power"
        ],
        "capabilitiesObj": {
            "onoff": {
                "value": true,
                "lastUpdated": "2018-12-19T09:07:40.577Z",
                "type": "boolean",
                "getable": true,
                "setable": true,
                "title": "Turned on",
                "desc": null,
                "units": null,
                "id": "onoff",
                "options": {}
            },
            "dim": {
                "value": 0.66,
                "lastUpdated": "2018-12-19T06:09:20.098Z",
                "type": "number",
                "getable": true,
                "setable": true,
                "title": "Dim level",
                "desc": null,
                "units": "%",
                "decimals": 2,
                "min": 0,
                "max": 1,
                "chartType": "stepLine",
                "id": "dim",
                "options": {}
            },
            "measure_power": {
                "value": 34.2,
                "lastUpdated": "2018-12-19T11:09:56.724Z",
                "type": "number",
                "getable": true,
                "setable": false,
                "title": "Power",
                "desc": "Power in Watt (W)",
                "units": "W",
                "decimals": 2,
                "chartType": "stepLine",
                "id": "measure_power",
                "options": {}
            },
            "meter_power": {
                "value": 68.47,
                "lastUpdated": "2018-12-19T10:41:26.742Z",
                "type": "number",
                "getable": true,
                "setable": false,
                "title": "Power Meter",
                "desc": "Power usage in KiloWattHour (kWh)",
                "units": "KWh",
                "decimals": 2,
                "chartType": "spline",
                "id": "meter_power",
                "options": {}
            }
        },
        "flags": [],
        "ui": {
            "quickAction": "onoff",
            "components": [
                {
                    "id": "toggle",
                    "capabilities": [
                        "onoff"
                    ]
                },
                {
                    "id": "slider",
                    "capabilities": [
                        "dim"
                    ]
                },
                {
                    "id": "sensor",
                    "capabilities": [
                        "measure_power",
                        "meter_power"
                    ]
                }
            ],
            "componentsStartAt": 1
        },
        "ready": true,
        "available": true,
        "repair": false,
        "unpair": false,
        "speechExamples": [
            "Turn all lights on",
            "Turn off all devices",
            "Toggle all lights",
            "Dim all lights to 50%",
            "Set My Light to full brightness"
        ],
        "images": [],
        "insights": [
            {
                "uri": "homey:device:71d10c80-1c3c-49d8-9321-63241b6607b4",
                "id": "onoff",
                "type": "boolean",
                "title": "Turned on",
                "titleTrue": "Turned on",
                "titleFalse": "Turned off",
                "units": null,
                "decimals": null
            },
            {
                "uri": "homey:device:71d10c80-1c3c-49d8-9321-63241b6607b4",
                "id": "measure_power",
                "type": "number",
                "title": "Power",
                "titleTrue": null,
                "titleFalse": null,
                "units": "W"
            },
            {
                "uri": "homey:device:71d10c80-1c3c-49d8-9321-63241b6607b4",
                "id": "meter_power",
                "type": "number",
                "title": "Power Meter",
                "titleTrue": null,
                "titleFalse": null,
                "units": "KWh"
            }
        ],
        "color": "#000000"
    },
    "9f9a1401-0055-4120-8069-447ba92c2bb2": {
        "__athom_api_type": "HomeyAPI.ManagerDevices.Device",
        "id": "9f9a1401-0055-4120-8069-447ba92c2bb2",
        "name": "Doors and Windows",
        "driverUri": "homey:app:com.swttt.devicegroups",
        "driverId": "sensor",
        "zone": "9919ee1e-ffbc-480b-bc4b-77fb047e9e68",
        "data": {
            "id": "4ao89u"
        },
        "icon": "../../../assets/icons/categories/sensor/standard.svg",
        "iconObj": {
            "id": "86c217097bd2ab98a33858f1669d41f6",
            "url": "/icon/86c217097bd2ab98a33858f1669d41f6/icon.svg"
        },
        "settings": {
            "capabilities": {
                "alarm_contact": {
                    "method": "any"
                }
            },
            "devices": [
                "651184b5-16c6-4142-b955-b84618d16d7a",
                "ea62d596-1431-4102-a581-60ae080ec388",
                "8c535d74-f313-4150-9495-c216bf0694c9",
                "9b9c5f73-fdac-44eb-9c70-1fed30e23d63",
                "ae9715ee-f2d3-4479-bfad-5a18bf3f5349",
                "d5d67964-8af5-4618-98db-ac219f6ee184",
                "29c82ff2-b196-4f7c-95af-86be891e4b83",
                "a1e28c5a-f428-4e5f-b708-ffc13b52b35e"
            ],
            "labelClass": "Sensor",
            "labelCapabilities": "Unknown",
            "labelDevices": "Unknown",
            "notes": ""
        },
        "settingsObj": true,
        "class": "sensor",
        "virtualClass": null,
        "capabilities": [
            "alarm_contact"
        ],
        "capabilitiesObj": {
            "alarm_contact": {
                "value": false,
                "lastUpdated": "2018-12-19T23:36:42.681Z",
                "type": "boolean",
                "getable": true,
                "setable": false,
                "title": "Contact alarm",
                "desc": "Contact sensor, e.g. for windows (true/false)",
                "units": null,
                "id": "alarm_contact",
                "options": {}
            }
        },
        "flags": [],
        "ui": {
            "components": [
                {
                    "id": "sensor",
                    "capabilities": [
                        "alarm_contact"
                    ]
                }
            ],
            "componentsStartAt": 0
        },
        "ready": true,
        "available": true,
        "repair": false,
        "unpair": false,
        "speechExamples": [],
        "images": [],
        "insights": [
            {
                "uri": "homey:device:9f9a1401-0055-4120-8069-447ba92c2bb2",
                "id": "alarm_contact",
                "type": "boolean",
                "title": "Contact alarm",
                "titleTrue": "Contact alarm turned on",
                "titleFalse": "Contact alarm turned off",
                "units": null,
                "decimals": null
            }
        ],
        "color": "#000000"
    },
    "0cd62716-d2c7-4389-abd3-a5405d05428d": {
        "__athom_api_type": "HomeyAPI.ManagerDevices.Device",
        "id": "0cd62716-d2c7-4389-abd3-a5405d05428d",
        "name": "Living Room Motion",
        "driverUri": "homey:app:nl.philips.hue",
        "driverId": "motionsensor",
        "zone": "9eb2975d-49ea-4033-8db0-105a3e982117",
        "data": {
            "id": "00:17:88:01:03:29:0c:3e-02-0406",
            "bridge_id": "001788fffeae0a85"
        },
        "icon": null,
        "iconObj": {
            "id": "fa9e3a9332842fdc8efa855d2dce113c",
            "url": "/icon/fa9e3a9332842fdc8efa855d2dce113c/icon.svg"
        },
        "settings": {},
        "settingsObj": false,
        "class": "sensor",
        "virtualClass": null,
        "capabilities": [
            "alarm_motion",
            "measure_temperature",
            "measure_luminance",
            "measure_battery"
        ],
        "capabilitiesObj": {
            "alarm_motion": {
                "value": false,
                "lastUpdated": "2018-12-20T02:24:36.475Z",
                "type": "boolean",
                "getable": true,
                "setable": false,
                "title": "Motion alarm",
                "desc": null,
                "units": null,
                "id": "alarm_motion",
                "options": {}
            },
            "measure_temperature": {
                "value": 21.56,
                "lastUpdated": "2018-12-20T02:24:36.479Z",
                "type": "number",
                "getable": true,
                "setable": false,
                "title": "Temperature",
                "desc": null,
                "units": "°C",
                "decimals": 2,
                "chartType": "spline",
                "id": "measure_temperature",
                "options": {}
            },
            "measure_luminance": {
                "value": 28.33,
                "lastUpdated": "2018-12-20T02:24:36.481Z",
                "type": "number",
                "getable": true,
                "setable": false,
                "title": "Luminance",
                "desc": "Luminance in Lux (lx)",
                "units": "lx",
                "decimals": 2,
                "chartType": "spline",
                "id": "measure_luminance",
                "options": {}
            },
            "measure_battery": {
                "value": 100,
                "lastUpdated": "2018-12-20T02:24:36.477Z",
                "type": "number",
                "getable": true,
                "setable": false,
                "title": "Battery",
                "desc": "Battery charge in percentage (%)",
                "units": "%",
                "decimals": 2,
                "min": 0,
                "max": 100,
                "chartType": "spline",
                "id": "measure_battery",
                "options": {}
            }
        },
        "flags": [],
        "ui": {
            "components": [
                {
                    "id": "sensor",
                    "capabilities": [
                        "alarm_motion",
                        "measure_temperature",
                        "measure_luminance"
                    ]
                },
                {
                    "id": "battery",
                    "capabilities": [
                        "measure_battery"
                    ]
                }
            ],
            "componentsStartAt": 0
        },
        "ready": true,
        "available": true,
        "repair": false,
        "unpair": false,
        "unavailableMessage": null,
        "speechExamples": [
            "What is the average temperature at home?"
        ],
        "images": [],
        "insights": [
            {
                "uri": "homey:device:0cd62716-d2c7-4389-abd3-a5405d05428d",
                "id": "alarm_motion",
                "type": "boolean",
                "title": "Motion alarm",
                "titleTrue": "Motion alarm turned on",
                "titleFalse": "Motion alarm turned off",
                "units": null,
                "decimals": null
            },
            {
                "uri": "homey:device:0cd62716-d2c7-4389-abd3-a5405d05428d",
                "id": "measure_temperature",
                "type": "number",
                "title": "Temperature",
                "titleTrue": null,
                "titleFalse": null,
                "units": "°C"
            },
            {
                "uri": "homey:device:0cd62716-d2c7-4389-abd3-a5405d05428d",
                "id": "measure_luminance",
                "type": "number",
                "title": "Luminance",
                "titleTrue": null,
                "titleFalse": null,
                "units": "lx"
            },
            {
                "uri": "homey:device:0cd62716-d2c7-4389-abd3-a5405d05428d",
                "id": "measure_battery",
                "type": "number",
                "title": "Battery",
                "titleTrue": null,
                "titleFalse": null,
                "units": "%"
            }
        ],
        "color": "#F4AF2E"
    },
    "6bd417d3-917c-40c2-ab5e-7fa0fc5cd17f": {
        "__athom_api_type": "HomeyAPI.ManagerDevices.Device",
        "id": "6bd417d3-917c-40c2-ab5e-7fa0fc5cd17f",
        "name": "Leah's Blanket",
        "driverUri": "homey:app:nu.baretta.tplink",
        "driverId": "hs110",
        "zone": "ddc3cdaa-8172-4c4a-97c9-22d8ec462972",
        "data": {
            "id": "192.168.0.104"
        },
        "icon": null,
        "iconObj": {
            "id": "80bac3b9c4c0a11a0d3fe28f1c0cec24",
            "url": "/icon/80bac3b9c4c0a11a0d3fe28f1c0cec24/icon.svg"
        },
        "settings": {
            "settingIPAddress": "192.168.0.104"
        },
        "settingsObj": true,
        "class": "socket",
        "virtualClass": null,
        "capabilities": [
            "onoff",
            "measure_power",
            "meter_power",
            "measure_current",
            "measure_voltage",
            "ledonoff"
        ],
        "capabilitiesObj": {
            "onoff": {
                "value": false,
                "lastUpdated": "2018-12-17T22:54:30.115Z",
                "type": "boolean",
                "getable": true,
                "setable": true,
                "title": "Turned on",
                "desc": null,
                "units": null,
                "id": "onoff",
                "options": {}
            },
            "measure_power": {
                "value": 0,
                "lastUpdated": "2018-12-06T14:43:26.324Z",
                "type": "number",
                "getable": true,
                "setable": false,
                "title": "Power",
                "desc": "Power in Watt (W)",
                "units": "W",
                "decimals": 2,
                "chartType": "stepLine",
                "id": "measure_power",
                "options": {}
            },
            "meter_power": {
                "value": 0.52,
                "lastUpdated": "2018-12-06T14:43:26.324Z",
                "type": "number",
                "getable": true,
                "setable": false,
                "title": "Power Meter",
                "desc": "Power usage in KiloWattHour (kWh)",
                "units": "KWh",
                "decimals": 2,
                "chartType": "spline",
                "id": "meter_power",
                "options": {}
            },
            "measure_current": {
                "value": 0.02,
                "lastUpdated": "2018-12-06T14:43:26.324Z",
                "type": "number",
                "getable": true,
                "setable": false,
                "title": "Current",
                "desc": "Electric current (A)",
                "units": "A",
                "decimals": 2,
                "chartType": "stepLine",
                "id": "measure_current",
                "options": {}
            },
            "measure_voltage": {
                "value": 245.48,
                "lastUpdated": "2018-12-06T14:43:26.324Z",
                "type": "number",
                "getable": true,
                "setable": false,
                "title": "Voltage",
                "desc": "Voltage (V)",
                "units": "V",
                "decimals": 2,
                "chartType": "stepLine",
                "id": "measure_voltage",
                "options": {}
            },
            "ledonoff": {
                "value": false,
                "lastUpdated": "2018-12-16T14:03:42.364Z",
                "type": "boolean",
                "getable": true,
                "setable": true,
                "title": "Switch LED on/off",
                "desc": null,
                "units": null,
                "id": "ledonoff",
                "options": {}
            }
        },
        "flags": [],
        "ui": {
            "quickAction": "onoff",
            "components": [
                {
                    "id": "toggle",
                    "capabilities": [
                        "onoff"
                    ]
                },
                {
                    "id": "button",
                    "capabilities": [
                        "ledonoff"
                    ]
                },
                {
                    "id": "sensor",
                    "capabilities": [
                        "measure_power",
                        "meter_power",
                        "measure_current",
                        "measure_voltage"
                    ]
                }
            ],
            "componentsStartAt": 1
        },
        "ready": true,
        "available": true,
        "repair": false,
        "unpair": false,
        "speechExamples": [
            "Turn all lights on",
            "Turn off all devices",
            "Toggle all lights"
        ],
        "images": [],
        "insights": [
            {
                "uri": "homey:device:6bd417d3-917c-40c2-ab5e-7fa0fc5cd17f",
                "id": "onoff",
                "type": "boolean",
                "title": "Turned on",
                "titleTrue": "Turned on",
                "titleFalse": "Turned off",
                "units": null,
                "decimals": null
            },
            {
                "uri": "homey:device:6bd417d3-917c-40c2-ab5e-7fa0fc5cd17f",
                "id": "measure_power",
                "type": "number",
                "title": "Power",
                "titleTrue": null,
                "titleFalse": null,
                "units": "W"
            },
            {
                "uri": "homey:device:6bd417d3-917c-40c2-ab5e-7fa0fc5cd17f",
                "id": "meter_power",
                "type": "number",
                "title": "Power Meter",
                "titleTrue": null,
                "titleFalse": null,
                "units": "KWh"
            },
            {
                "uri": "homey:device:6bd417d3-917c-40c2-ab5e-7fa0fc5cd17f",
                "id": "measure_current",
                "type": "number",
                "title": "Current",
                "titleTrue": null,
                "titleFalse": null,
                "units": "A"
            },
            {
                "uri": "homey:device:6bd417d3-917c-40c2-ab5e-7fa0fc5cd17f",
                "id": "measure_voltage",
                "type": "number",
                "title": "Voltage",
                "titleTrue": null,
                "titleFalse": null,
                "units": "V"
            }
        ],
        "color": "#20df60"
    },
    "cfea989c-d06c-409e-ba21-b47887431a63": {
        "__athom_api_type": "HomeyAPI.ManagerDevices.Device",
        "id": "cfea989c-d06c-409e-ba21-b47887431a63",
        "name": "Heater - Bedroom",
        "driverUri": "homey:app:com.ecobee",
        "driverId": "ecobee3_room_sensor",
        "zone": "ddc3cdaa-8172-4c4a-97c9-22d8ec462972",
        "data": {
            "id": "rs:100RCGW",
            "thermostatId": "511813451412"
        },
        "icon": null,
        "iconObj": {
            "id": "63a960ec969d15684a960ab6c4fa934c",
            "url": "/icon/63a960ec969d15684a960ab6c4fa934c/icon.svg"
        },
        "settings": {},
        "settingsObj": false,
        "class": "sensor",
        "virtualClass": null,
        "capabilities": [
            "alarm_motion",
            "measure_temperature"
        ],
        "capabilitiesObj": {
            "alarm_motion": {
                "value": false,
                "lastUpdated": "2018-12-17T14:32:55.559Z",
                "type": "boolean",
                "getable": true,
                "setable": false,
                "title": "Motion alarm",
                "desc": null,
                "units": null,
                "id": "alarm_motion",
                "options": {}
            },
            "measure_temperature": {
                "value": null,
                "lastUpdated": null,
                "type": "number",
                "getable": true,
                "setable": false,
                "title": "Temperature",
                "desc": null,
                "units": "°C",
                "decimals": 2,
                "chartType": "spline",
                "id": "measure_temperature",
                "options": {}
            }
        },
        "flags": [],
        "ui": {
            "components": [
                {
                    "id": "sensor",
                    "capabilities": [
                        "alarm_motion",
                        "measure_temperature"
                    ]
                }
            ],
            "componentsStartAt": 0
        },
        "ready": true,
        "available": true,
        "repair": false,
        "unpair": false,
        "unavailableMessage": null,
        "speechExamples": [
            "What is the average temperature at home?"
        ],
        "images": [],
        "insights": [
            {
                "uri": "homey:device:cfea989c-d06c-409e-ba21-b47887431a63",
                "id": "alarm_motion",
                "type": "boolean",
                "title": "Motion alarm",
                "titleTrue": "Motion alarm turned on",
                "titleFalse": "Motion alarm turned off",
                "units": null,
                "decimals": null
            },
            {
                "uri": "homey:device:cfea989c-d06c-409e-ba21-b47887431a63",
                "id": "measure_temperature",
                "type": "number",
                "title": "Temperature",
                "titleTrue": null,
                "titleFalse": null,
                "units": "°C"
            }
        ],
        "color": "#20dfcb"
    },
    "752f9b1a-f398-46b5-b6ae-6954418636db": {
        "__athom_api_type": "HomeyAPI.ManagerDevices.Device",
        "id": "752f9b1a-f398-46b5-b6ae-6954418636db",
        "name": "Heater - Study",
        "driverUri": "homey:app:com.ecobee",
        "driverId": "ecobee3_room_sensor",
        "zone": "1815c884-af06-4d53-a2c1-6f4c77e9eb4e",
        "data": {
            "id": "rs:101VWTF",
            "thermostatId": "511813451412"
        },
        "icon": null,
        "iconObj": {
            "id": "63a960ec969d15684a960ab6c4fa934c",
            "url": "/icon/63a960ec969d15684a960ab6c4fa934c/icon.svg"
        },
        "settings": {},
        "settingsObj": false,
        "class": "sensor",
        "virtualClass": null,
        "capabilities": [
            "alarm_motion",
            "measure_temperature"
        ],
        "capabilitiesObj": {
            "alarm_motion": {
                "value": false,
                "lastUpdated": "2018-12-17T14:32:55.554Z",
                "type": "boolean",
                "getable": true,
                "setable": false,
                "title": "Motion alarm",
                "desc": null,
                "units": null,
                "id": "alarm_motion",
                "options": {}
            },
            "measure_temperature": {
                "value": 22.9,
                "lastUpdated": "2018-12-17T14:32:55.552Z",
                "type": "number",
                "getable": true,
                "setable": false,
                "title": "Temperature",
                "desc": null,
                "units": "°C",
                "decimals": 2,
                "chartType": "spline",
                "id": "measure_temperature",
                "options": {}
            }
        },
        "flags": [],
        "ui": {
            "components": [
                {
                    "id": "sensor",
                    "capabilities": [
                        "alarm_motion",
                        "measure_temperature"
                    ]
                }
            ],
            "componentsStartAt": 0
        },
        "ready": true,
        "available": true,
        "repair": false,
        "unpair": false,
        "unavailableMessage": null,
        "speechExamples": [
            "What is the average temperature at home?"
        ],
        "images": [],
        "insights": [
            {
                "uri": "homey:device:752f9b1a-f398-46b5-b6ae-6954418636db",
                "id": "alarm_motion",
                "type": "boolean",
                "title": "Motion alarm",
                "titleTrue": "Motion alarm turned on",
                "titleFalse": "Motion alarm turned off",
                "units": null,
                "decimals": null
            },
            {
                "uri": "homey:device:752f9b1a-f398-46b5-b6ae-6954418636db",
                "id": "measure_temperature",
                "type": "number",
                "title": "Temperature",
                "titleTrue": null,
                "titleFalse": null,
                "units": "°C"
            }
        ],
        "color": "#20dfcb"
    },
    "d94c02c7-df4e-449c-a306-dd60b3d46f06": {
        "__athom_api_type": "HomeyAPI.ManagerDevices.Device",
        "id": "d94c02c7-df4e-449c-a306-dd60b3d46f06",
        "name": "Heater - Dining Room",
        "driverUri": "homey:app:com.ecobee",
        "driverId": "ecobee3_room_sensor",
        "zone": "235c928c-cdaa-4930-a8c6-5a2e44de9d80",
        "data": {
            "id": "rs:102HCY6",
            "thermostatId": "511813451412"
        },
        "icon": null,
        "iconObj": {
            "id": "63a960ec969d15684a960ab6c4fa934c",
            "url": "/icon/63a960ec969d15684a960ab6c4fa934c/icon.svg"
        },
        "settings": {},
        "settingsObj": false,
        "class": "sensor",
        "virtualClass": null,
        "capabilities": [
            "alarm_motion",
            "measure_temperature"
        ],
        "capabilitiesObj": {
            "alarm_motion": {
                "value": false,
                "lastUpdated": "2018-12-17T14:32:55.624Z",
                "type": "boolean",
                "getable": true,
                "setable": false,
                "title": "Motion alarm",
                "desc": null,
                "units": null,
                "id": "alarm_motion",
                "options": {}
            },
            "measure_temperature": {
                "value": 20.6,
                "lastUpdated": "2018-12-17T14:32:55.622Z",
                "type": "number",
                "getable": true,
                "setable": false,
                "title": "Temperature",
                "desc": null,
                "units": "°C",
                "decimals": 2,
                "chartType": "spline",
                "id": "measure_temperature",
                "options": {}
            }
        },
        "flags": [],
        "ui": {
            "components": [
                {
                    "id": "sensor",
                    "capabilities": [
                        "alarm_motion",
                        "measure_temperature"
                    ]
                }
            ],
            "componentsStartAt": 0
        },
        "ready": true,
        "available": true,
        "repair": false,
        "unpair": false,
        "unavailableMessage": null,
        "speechExamples": [
            "What is the average temperature at home?"
        ],
        "images": [],
        "insights": [
            {
                "uri": "homey:device:d94c02c7-df4e-449c-a306-dd60b3d46f06",
                "id": "alarm_motion",
                "type": "boolean",
                "title": "Motion alarm",
                "titleTrue": "Motion alarm turned on",
                "titleFalse": "Motion alarm turned off",
                "units": null,
                "decimals": null
            },
            {
                "uri": "homey:device:d94c02c7-df4e-449c-a306-dd60b3d46f06",
                "id": "measure_temperature",
                "type": "number",
                "title": "Temperature",
                "titleTrue": null,
                "titleFalse": null,
                "units": "°C"
            }
        ],
        "color": "#20dfcb"
    },
    "3cec56c9-b0d8-4f35-bf47-0dcfc9b7bfa6": {
        "__athom_api_type": "HomeyAPI.ManagerDevices.Device",
        "id": "3cec56c9-b0d8-4f35-bf47-0dcfc9b7bfa6",
        "name": "Heater - Living Room",
        "driverUri": "homey:app:com.ecobee",
        "driverId": "ecobee3_room_sensor",
        "zone": "9eb2975d-49ea-4033-8db0-105a3e982117",
        "data": {
            "id": "rs:103VWSL",
            "thermostatId": "511813451412"
        },
        "icon": null,
        "iconObj": {
            "id": "63a960ec969d15684a960ab6c4fa934c",
            "url": "/icon/63a960ec969d15684a960ab6c4fa934c/icon.svg"
        },
        "settings": {},
        "settingsObj": false,
        "class": "sensor",
        "virtualClass": null,
        "capabilities": [
            "alarm_motion",
            "measure_temperature"
        ],
        "capabilitiesObj": {
            "alarm_motion": {
                "value": false,
                "lastUpdated": "2018-12-17T14:32:55.607Z",
                "type": "boolean",
                "getable": true,
                "setable": false,
                "title": "Motion alarm",
                "desc": null,
                "units": null,
                "id": "alarm_motion",
                "options": {}
            },
            "measure_temperature": {
                "value": 21.2,
                "lastUpdated": "2018-12-17T14:32:55.598Z",
                "type": "number",
                "getable": true,
                "setable": false,
                "title": "Temperature",
                "desc": null,
                "units": "°C",
                "decimals": 2,
                "chartType": "spline",
                "id": "measure_temperature",
                "options": {}
            }
        },
        "flags": [],
        "ui": {
            "components": [
                {
                    "id": "sensor",
                    "capabilities": [
                        "alarm_motion",
                        "measure_temperature"
                    ]
                }
            ],
            "componentsStartAt": 0
        },
        "ready": true,
        "available": true,
        "repair": false,
        "unpair": false,
        "unavailableMessage": null,
        "speechExamples": [
            "What is the average temperature at home?"
        ],
        "images": [],
        "insights": [
            {
                "uri": "homey:device:3cec56c9-b0d8-4f35-bf47-0dcfc9b7bfa6",
                "id": "alarm_motion",
                "type": "boolean",
                "title": "Motion alarm",
                "titleTrue": "Motion alarm turned on",
                "titleFalse": "Motion alarm turned off",
                "units": null,
                "decimals": null
            },
            {
                "uri": "homey:device:3cec56c9-b0d8-4f35-bf47-0dcfc9b7bfa6",
                "id": "measure_temperature",
                "type": "number",
                "title": "Temperature",
                "titleTrue": null,
                "titleFalse": null,
                "units": "°C"
            }
        ],
        "color": "#20dfcb"
    },
    "9e187372-3f92-4ab0-a30b-77ef4ea8fe1e": {
        "__athom_api_type": "HomeyAPI.ManagerDevices.Device",
        "id": "9e187372-3f92-4ab0-a30b-77ef4ea8fe1e",
        "name": "Heater - Kitchen",
        "driverUri": "homey:app:com.ecobee",
        "driverId": "ecobee3_room_sensor",
        "zone": "2ab5a003-0120-4c01-80f2-a237dcf4ba14",
        "data": {
            "id": "rs:104H8VQ",
            "thermostatId": "511813451412"
        },
        "icon": null,
        "iconObj": {
            "id": "63a960ec969d15684a960ab6c4fa934c",
            "url": "/icon/63a960ec969d15684a960ab6c4fa934c/icon.svg"
        },
        "settings": {},
        "settingsObj": false,
        "class": "sensor",
        "virtualClass": null,
        "capabilities": [
            "alarm_motion",
            "measure_temperature"
        ],
        "capabilitiesObj": {
            "alarm_motion": {
                "value": false,
                "lastUpdated": "2018-12-17T14:32:55.632Z",
                "type": "boolean",
                "getable": true,
                "setable": false,
                "title": "Motion alarm",
                "desc": null,
                "units": null,
                "id": "alarm_motion",
                "options": {}
            },
            "measure_temperature": {
                "value": 21.7,
                "lastUpdated": "2018-12-17T14:32:55.630Z",
                "type": "number",
                "getable": true,
                "setable": false,
                "title": "Temperature",
                "desc": null,
                "units": "°C",
                "decimals": 2,
                "chartType": "spline",
                "id": "measure_temperature",
                "options": {}
            }
        },
        "flags": [],
        "ui": {
            "components": [
                {
                    "id": "sensor",
                    "capabilities": [
                        "alarm_motion",
                        "measure_temperature"
                    ]
                }
            ],
            "componentsStartAt": 0
        },
        "ready": true,
        "available": true,
        "repair": false,
        "unpair": false,
        "unavailableMessage": null,
        "speechExamples": [
            "What is the average temperature at home?"
        ],
        "images": [],
        "insights": [
            {
                "uri": "homey:device:9e187372-3f92-4ab0-a30b-77ef4ea8fe1e",
                "id": "alarm_motion",
                "type": "boolean",
                "title": "Motion alarm",
                "titleTrue": "Motion alarm turned on",
                "titleFalse": "Motion alarm turned off",
                "units": null,
                "decimals": null
            },
            {
                "uri": "homey:device:9e187372-3f92-4ab0-a30b-77ef4ea8fe1e",
                "id": "measure_temperature",
                "type": "number",
                "title": "Temperature",
                "titleTrue": null,
                "titleFalse": null,
                "units": "°C"
            }
        ],
        "color": "#20dfcb"
    },
    "cba9d05b-34ca-4bb0-8234-f258134a3921": {
        "__athom_api_type": "HomeyAPI.ManagerDevices.Device",
        "id": "cba9d05b-34ca-4bb0-8234-f258134a3921",
        "name": "Heater",
        "driverUri": "homey:app:com.ecobee",
        "driverId": "ecobee3lite",
        "zone": "9919ee1e-ffbc-480b-bc4b-77fb047e9e68",
        "data": {
            "id": "511813451412"
        },
        "icon": null,
        "iconObj": {
            "id": "1163e65630c3c2e240b836c8e2da672d",
            "url": "/icon/1163e65630c3c2e240b836c8e2da672d/icon.svg"
        },
        "settings": {
            "temperatureOverrideType": "nextTransition",
            "temperatureHoldDuration": 4
        },
        "settingsObj": true,
        "class": "thermostat",
        "virtualClass": null,
        "capabilities": [
            "target_temperature",
            "measure_temperature",
            "measure_humidity",
            "thermostat_mode"
        ],
        "capabilitiesObj": {
            "target_temperature": {
                "value": 14,
                "lastUpdated": "2018-12-17T14:33:35.420Z",
                "type": "number",
                "getable": true,
                "setable": true,
                "title": "Target temperature",
                "desc": null,
                "units": "°C",
                "decimals": 2,
                "min": 7,
                "max": 33.5,
                "step": 0.5,
                "chartType": "stepLine",
                "id": "target_temperature",
                "options": {
                    "step": 0.5,
                    "min": 7,
                    "max": 33.5
                }
            },
            "measure_temperature": {
                "value": 21.3,
                "lastUpdated": "2018-12-17T14:33:35.420Z",
                "type": "number",
                "getable": true,
                "setable": false,
                "title": "Temperature",
                "desc": null,
                "units": "°C",
                "decimals": 2,
                "chartType": "spline",
                "id": "measure_temperature",
                "options": {}
            },
            "measure_humidity": {
                "value": 67,
                "lastUpdated": "2018-12-17T14:33:35.419Z",
                "type": "number",
                "getable": true,
                "setable": false,
                "title": "Humidity",
                "desc": "Humidity in percent (%)",
                "units": "%",
                "decimals": 2,
                "chartType": "spline",
                "id": "measure_humidity",
                "options": {}
            },
            "thermostat_mode": {
                "value": "heat",
                "lastUpdated": "2018-12-17T14:33:35.419Z",
                "type": "enum",
                "getable": true,
                "setable": true,
                "title": "Thermostat mode",
                "desc": "Mode of the thermostat",
                "units": null,
                "values": [
                    {
                        "id": "auto",
                        "title": "Automatic"
                    },
                    {
                        "id": "heat",
                        "title": "Heat"
                    },
                    {
                        "id": "cool",
                        "title": "Cool"
                    },
                    {
                        "id": "off",
                        "title": "Off"
                    }
                ],
                "id": "thermostat_mode",
                "options": {}
            }
        },
        "flags": [],
        "ui": {
            "components": [
                {
                    "id": "thermostat",
                    "capabilities": [
                        "measure_temperature",
                        "target_temperature"
                    ]
                },
                {
                    "id": "picker",
                    "capabilities": [
                        "thermostat_mode"
                    ]
                },
                {
                    "id": "sensor",
                    "capabilities": [
                        "measure_humidity"
                    ]
                }
            ],
            "componentsStartAt": 0
        },
        "ready": true,
        "available": true,
        "repair": false,
        "unpair": false,
        "unavailableMessage": null,
        "speechExamples": [
            "Set the temperature to 21 degrees",
            "What is the average temperature at home?",
            "What is the average humidity at home?"
        ],
        "images": [],
        "insights": [
            {
                "uri": "homey:device:cba9d05b-34ca-4bb0-8234-f258134a3921",
                "id": "target_temperature",
                "type": "number",
                "title": "Target temperature",
                "titleTrue": null,
                "titleFalse": null,
                "units": "°C"
            },
            {
                "uri": "homey:device:cba9d05b-34ca-4bb0-8234-f258134a3921",
                "id": "measure_temperature",
                "type": "number",
                "title": "Temperature",
                "titleTrue": null,
                "titleFalse": null,
                "units": "°C"
            },
            {
                "uri": "homey:device:cba9d05b-34ca-4bb0-8234-f258134a3921",
                "id": "measure_humidity",
                "type": "number",
                "title": "Humidity",
                "titleTrue": null,
                "titleFalse": null,
                "units": "%"
            }
        ],
        "color": "#20dfcb"
    },
    "09656b9e-930e-4eed-85f4-f1ae0349f8d8": {
        "__athom_api_type": "HomeyAPI.ManagerDevices.Device",
        "id": "09656b9e-930e-4eed-85f4-f1ae0349f8d8",
        "name": "Jamies Blanket",
        "driverUri": "homey:app:com.wemo",
        "driverId": "insight",
        "zone": "ddc3cdaa-8172-4c4a-97c9-22d8ec462972",
        "data": {
            "id": "uuid:Insight-1_0-221537K1200367"
        },
        "icon": null,
        "iconObj": {
            "id": "6045b678f053dcb1b141fc754ffe6f74",
            "url": "/icon/6045b678f053dcb1b141fc754ffe6f74/icon.svg"
        },
        "settings": {},
        "settingsObj": false,
        "class": "socket",
        "virtualClass": null,
        "capabilities": [
            "onoff",
            "measure_power"
        ],
        "capabilitiesObj": {
            "onoff": {
                "value": false,
                "lastUpdated": "2018-12-19T11:17:46.539Z",
                "type": "boolean",
                "getable": true,
                "setable": true,
                "title": "Turned on",
                "desc": null,
                "units": null,
                "id": "onoff",
                "options": {}
            },
            "measure_power": {
                "value": 0,
                "lastUpdated": "2018-12-19T11:17:46.621Z",
                "type": "number",
                "getable": true,
                "setable": false,
                "title": "Power",
                "desc": "Power in Watt (W)",
                "units": "W",
                "decimals": 2,
                "chartType": "stepLine",
                "id": "measure_power",
                "options": {}
            }
        },
        "flags": [],
        "ui": {
            "quickAction": "onoff",
            "components": [
                {
                    "id": "toggle",
                    "capabilities": [
                        "onoff"
                    ]
                },
                {
                    "id": "sensor",
                    "capabilities": [
                        "measure_power"
                    ]
                }
            ],
            "componentsStartAt": 1
        },
        "ready": true,
        "available": true,
        "repair": false,
        "unpair": false,
        "unavailableMessage": null,
        "speechExamples": [
            "Turn all lights on",
            "Turn off all devices",
            "Toggle all lights"
        ],
        "images": [],
        "insights": [
            {
                "uri": "homey:device:09656b9e-930e-4eed-85f4-f1ae0349f8d8",
                "id": "onoff",
                "type": "boolean",
                "title": "Turned on",
                "titleTrue": "Turned on",
                "titleFalse": "Turned off",
                "units": null,
                "decimals": null
            },
            {
                "uri": "homey:device:09656b9e-930e-4eed-85f4-f1ae0349f8d8",
                "id": "measure_power",
                "type": "number",
                "title": "Power",
                "titleTrue": null,
                "titleFalse": null,
                "units": "W"
            }
        ],
        "color": "#20bedf"
    },
    "552afc94-3769-49fd-8613-4c42e034c173": {
        "__athom_api_type": "HomeyAPI.ManagerDevices.Device",
        "id": "552afc94-3769-49fd-8613-4c42e034c173",
        "name": "Power Meter",
        "driverUri": "homey:app:com.rainforestautomation",
        "driverId": "eagle200",
        "zone": "9919ee1e-ffbc-480b-bc4b-77fb047e9e68",
        "data": {
            "hardwareAddress": "0x00135003001196cf",
            "gateway": {
                "cloudId": "00a582",
                "macAddress": "1258565ca7685e27",
                "installCode": "1258565ca7685e27"
            }
        },
        "icon": "/icons/generic-electric_meter.svg",
        "iconObj": {
            "id": "060a55f24c81fddafce1076f3f42ad04",
            "url": "/icon/060a55f24c81fddafce1076f3f42ad04/icon.svg"
        },
        "settings": {
            "labelManufacturer": "Generic",
            "labelModel": "electric_meter",
            "ipAddress": "192.168.0.16",
            "measurePollingFrequency": 60,
            "meterPollingFrequency": 15
        },
        "settingsObj": true,
        "class": "sensor",
        "virtualClass": null,
        "capabilities": [
            "meter_power",
            "measure_power"
        ],
        "capabilitiesObj": {
            "meter_power": {
                "value": 26052.1,
                "lastUpdated": "2018-11-22T04:09:54.554Z",
                "type": "number",
                "getable": true,
                "setable": false,
                "title": "Power Meter",
                "desc": "Power usage in KiloWattHour (kWh)",
                "units": "KWh",
                "decimals": 2,
                "chartType": "spline",
                "id": "meter_power",
                "options": {}
            },
            "measure_power": {
                "value": 729,
                "lastUpdated": "2018-11-22T04:09:54.554Z",
                "type": "number",
                "getable": true,
                "setable": false,
                "title": "Power",
                "desc": "Power in Watt (W)",
                "units": "W",
                "decimals": 2,
                "chartType": "stepLine",
                "id": "measure_power",
                "options": {}
            }
        },
        "flags": [],
        "ui": {
            "components": [
                {
                    "id": "sensor",
                    "capabilities": [
                        "meter_power",
                        "measure_power"
                    ]
                }
            ],
            "componentsStartAt": 0
        },
        "ready": true,
        "available": true,
        "repair": false,
        "unpair": false,
        "speechExamples": [],
        "images": [],
        "insights": [
            {
                "uri": "homey:device:552afc94-3769-49fd-8613-4c42e034c173",
                "id": "meter_power",
                "type": "number",
                "title": "Power Meter",
                "titleTrue": null,
                "titleFalse": null,
                "units": "KWh"
            },
            {
                "uri": "homey:device:552afc94-3769-49fd-8613-4c42e034c173",
                "id": "measure_power",
                "type": "number",
                "title": "Power",
                "titleTrue": null,
                "titleFalse": null,
                "units": "W"
            }
        ],
        "color": "#20dfb5"
    },
    "dc9ba814-413a-45ce-88ac-ab090a459646": {
        "__athom_api_type": "HomeyAPI.ManagerDevices.Device",
        "id": "dc9ba814-413a-45ce-88ac-ab090a459646",
        "name": "Lounge Chrome",
        "driverUri": "homey:app:com.google.chromecast",
        "driverId": "chromecast",
        "zone": "9eb2975d-49ea-4033-8db0-105a3e982117",
        "data": {
            "id": "dbb13bf2a147ed23a7619609cbb33da1"
        },
        "icon": null,
        "iconObj": {
            "id": "35b9f25e45cf12d4cc1067c8a6fd3b8a",
            "url": "/icon/35b9f25e45cf12d4cc1067c8a6fd3b8a/icon.svg"
        },
        "settings": {},
        "settingsObj": false,
        "class": "speaker",
        "virtualClass": null,
        "capabilities": [
            "speaker_playing",
            "speaker_prev",
            "speaker_next",
            "volume_mute",
            "volume_set"
        ],
        "capabilitiesObj": {
            "speaker_playing": {
                "value": null,
                "type": "boolean",
                "getable": true,
                "setable": true,
                "title": "Playing",
                "desc": null,
                "units": null,
                "id": "speaker_playing",
                "options": {}
            },
            "speaker_prev": {
                "value": null,
                "type": "boolean",
                "getable": false,
                "setable": true,
                "title": "Previous",
                "desc": null,
                "units": null,
                "id": "speaker_prev",
                "options": {}
            },
            "speaker_next": {
                "value": null,
                "type": "boolean",
                "getable": false,
                "setable": true,
                "title": "Next",
                "desc": null,
                "units": null,
                "id": "speaker_next",
                "options": {}
            },
            "volume_mute": {
                "value": null,
                "type": "boolean",
                "getable": true,
                "setable": true,
                "title": "Volume muted",
                "desc": null,
                "units": null,
                "id": "volume_mute",
                "options": {}
            },
            "volume_set": {
                "value": null,
                "type": "number",
                "getable": true,
                "setable": true,
                "title": "Set volume",
                "desc": "Volume",
                "units": null,
                "decimals": 2,
                "min": 0,
                "max": 1,
                "chartType": "stepLine",
                "id": "volume_set",
                "options": {}
            }
        },
        "flags": [],
        "ui": {
            "quickAction": "speaker_playing",
            "components": [
                {
                    "id": "media",
                    "capabilities": [
                        "speaker_playing",
                        "speaker_prev",
                        "speaker_next"
                    ]
                },
                {
                    "id": "slider",
                    "capabilities": [
                        "volume_set"
                    ]
                },
                {
                    "id": "button",
                    "capabilities": [
                        "volume_mute"
                    ]
                }
            ],
            "componentsStartAt": 0
        },
        "ready": true,
        "available": true,
        "repair": false,
        "unpair": false,
        "unavailableMessage": null,
        "speechExamples": [
            "Mute the volume of my amplifier",
            "Turn the volume of my speaker to 50%"
        ],
        "images": [],
        "insights": [],
        "color": "#20b2df"
    },
    "fb6eeeca-19d3-4b56-9e56-a08b81cee296": {
        "__athom_api_type": "HomeyAPI.ManagerDevices.Device",
        "id": "fb6eeeca-19d3-4b56-9e56-a08b81cee296",
        "name": "Study Chrome",
        "driverUri": "homey:app:com.google.chromecast",
        "driverId": "chromecast",
        "zone": "1815c884-af06-4d53-a2c1-6f4c77e9eb4e",
        "data": {
            "id": "85ed69e85324b1dd03f097740520e36a"
        },
        "icon": null,
        "iconObj": {
            "id": "35b9f25e45cf12d4cc1067c8a6fd3b8a",
            "url": "/icon/35b9f25e45cf12d4cc1067c8a6fd3b8a/icon.svg"
        },
        "settings": {},
        "settingsObj": false,
        "class": "speaker",
        "virtualClass": null,
        "capabilities": [
            "speaker_playing",
            "speaker_prev",
            "speaker_next",
            "volume_mute",
            "volume_set"
        ],
        "capabilitiesObj": {
            "speaker_playing": {
                "value": null,
                "type": "boolean",
                "getable": true,
                "setable": true,
                "title": "Playing",
                "desc": null,
                "units": null,
                "id": "speaker_playing",
                "options": {}
            },
            "speaker_prev": {
                "value": null,
                "type": "boolean",
                "getable": false,
                "setable": true,
                "title": "Previous",
                "desc": null,
                "units": null,
                "id": "speaker_prev",
                "options": {}
            },
            "speaker_next": {
                "value": null,
                "type": "boolean",
                "getable": false,
                "setable": true,
                "title": "Next",
                "desc": null,
                "units": null,
                "id": "speaker_next",
                "options": {}
            },
            "volume_mute": {
                "value": null,
                "type": "boolean",
                "getable": true,
                "setable": true,
                "title": "Volume muted",
                "desc": null,
                "units": null,
                "id": "volume_mute",
                "options": {}
            },
            "volume_set": {
                "value": null,
                "type": "number",
                "getable": true,
                "setable": true,
                "title": "Set volume",
                "desc": "Volume",
                "units": null,
                "decimals": 2,
                "min": 0,
                "max": 1,
                "chartType": "stepLine",
                "id": "volume_set",
                "options": {}
            }
        },
        "flags": [],
        "ui": {
            "quickAction": "speaker_playing",
            "components": [
                {
                    "id": "media",
                    "capabilities": [
                        "speaker_playing",
                        "speaker_prev",
                        "speaker_next"
                    ]
                },
                {
                    "id": "slider",
                    "capabilities": [
                        "volume_set"
                    ]
                },
                {
                    "id": "button",
                    "capabilities": [
                        "volume_mute"
                    ]
                }
            ],
            "componentsStartAt": 0
        },
        "ready": true,
        "available": true,
        "repair": false,
        "unpair": false,
        "unavailableMessage": null,
        "speechExamples": [
            "Mute the volume of my amplifier",
            "Turn the volume of my speaker to 50%"
        ],
        "images": [],
        "insights": [],
        "color": "#20b2df"
    },
    "88359188-bbe6-46bd-88d7-12086ce4150c": {
        "__athom_api_type": "HomeyAPI.ManagerDevices.Device",
        "id": "88359188-bbe6-46bd-88d7-12086ce4150c",
        "name": "Bedroom Chrome",
        "driverUri": "homey:app:com.google.chromecast",
        "driverId": "chromecast",
        "zone": "ddc3cdaa-8172-4c4a-97c9-22d8ec462972",
        "data": {
            "id": "9739a3aff893e5ff6cce13630aaa35a8"
        },
        "icon": null,
        "iconObj": {
            "id": "35b9f25e45cf12d4cc1067c8a6fd3b8a",
            "url": "/icon/35b9f25e45cf12d4cc1067c8a6fd3b8a/icon.svg"
        },
        "settings": {},
        "settingsObj": false,
        "class": "speaker",
        "virtualClass": null,
        "capabilities": [
            "speaker_playing",
            "speaker_prev",
            "speaker_next",
            "volume_mute",
            "volume_set"
        ],
        "capabilitiesObj": {
            "speaker_playing": {
                "value": null,
                "type": "boolean",
                "getable": true,
                "setable": true,
                "title": "Playing",
                "desc": null,
                "units": null,
                "id": "speaker_playing",
                "options": {}
            },
            "speaker_prev": {
                "value": null,
                "type": "boolean",
                "getable": false,
                "setable": true,
                "title": "Previous",
                "desc": null,
                "units": null,
                "id": "speaker_prev",
                "options": {}
            },
            "speaker_next": {
                "value": null,
                "type": "boolean",
                "getable": false,
                "setable": true,
                "title": "Next",
                "desc": null,
                "units": null,
                "id": "speaker_next",
                "options": {}
            },
            "volume_mute": {
                "value": null,
                "type": "boolean",
                "getable": true,
                "setable": true,
                "title": "Volume muted",
                "desc": null,
                "units": null,
                "id": "volume_mute",
                "options": {}
            },
            "volume_set": {
                "value": null,
                "type": "number",
                "getable": true,
                "setable": true,
                "title": "Set volume",
                "desc": "Volume",
                "units": null,
                "decimals": 2,
                "min": 0,
                "max": 1,
                "chartType": "stepLine",
                "id": "volume_set",
                "options": {}
            }
        },
        "flags": [],
        "ui": {
            "quickAction": "speaker_playing",
            "components": [
                {
                    "id": "media",
                    "capabilities": [
                        "speaker_playing",
                        "speaker_prev",
                        "speaker_next"
                    ]
                },
                {
                    "id": "slider",
                    "capabilities": [
                        "volume_set"
                    ]
                },
                {
                    "id": "button",
                    "capabilities": [
                        "volume_mute"
                    ]
                }
            ],
            "componentsStartAt": 0
        },
        "ready": true,
        "available": false,
        "repair": false,
        "unpair": false,
        "unavailableMessage": "Unavailable",
        "speechExamples": [
            "Mute the volume of my amplifier",
            "Turn the volume of my speaker to 50%"
        ],
        "images": [],
        "insights": [],
        "color": "#20b2df"
    },
    "5fd7e509-b82e-42d4-a97a-508274ad4703": {
        "__athom_api_type": "HomeyAPI.ManagerDevices.Device",
        "id": "5fd7e509-b82e-42d4-a97a-508274ad4703",
        "name": "Wine Rack Sensor",
        "driverUri": "homey:app:com.xiaomi-mi",
        "driverId": "weather",
        "zone": "4eebb10d-adcf-4d15-80f7-ff7ebb376ffa",
        "data": {
            "token": "df370487-5a55-447d-9e67-57a442eae559"
        },
        "icon": "/icon.svg",
        "iconObj": {
            "id": "68e70ee5f187a180df5e2397041bc742",
            "url": "/icon/68e70ee5f187a180df5e2397041bc742/icon.svg"
        },
        "settings": {
            "temperature_offset": 0,
            "temperature_decimals": "1",
            "humidity_decimals": "1",
            "battery_threshold": 20,
            "zb_profile_id": "260",
            "zb_device_id": "24321",
            "zb_ieee_addr": "0x00158d000273a515",
            "zb_product_id": "lumi.weather",
            "zb_manufacturer_name": "LUMI"
        },
        "settingsObj": true,
        "class": "sensor",
        "virtualClass": null,
        "capabilities": [
            "measure_battery",
            "measure_temperature",
            "measure_pressure",
            "measure_humidity",
            "alarm_battery"
        ],
        "capabilitiesObj": {
            "measure_battery": {
                "value": null,
                "lastUpdated": "2018-12-19T11:18:09.613Z",
                "type": "number",
                "getable": true,
                "setable": false,
                "title": "Battery",
                "desc": "Battery charge in percentage (%)",
                "units": "%",
                "decimals": 2,
                "min": 0,
                "max": 100,
                "chartType": "spline",
                "id": "measure_battery",
                "options": {}
            },
            "measure_temperature": {
                "value": 21.5,
                "lastUpdated": "2018-12-19T23:37:49.038Z",
                "type": "number",
                "getable": true,
                "setable": false,
                "title": "Temperature",
                "desc": null,
                "units": "°C",
                "decimals": 2,
                "chartType": "spline",
                "id": "measure_temperature",
                "options": {}
            },
            "measure_pressure": {
                "value": 999,
                "lastUpdated": "2018-12-19T23:37:49.061Z",
                "type": "number",
                "getable": true,
                "setable": false,
                "title": "Pressure",
                "desc": "Pressure in millibar (mbar)",
                "units": "mbar",
                "decimals": 2,
                "chartType": "spline",
                "id": "measure_pressure",
                "options": {}
            },
            "measure_humidity": {
                "value": 75.1,
                "lastUpdated": "2018-12-19T23:37:49.053Z",
                "type": "number",
                "getable": true,
                "setable": false,
                "title": "Humidity",
                "desc": "Humidity in percent (%)",
                "units": "%",
                "decimals": 2,
                "chartType": "spline",
                "id": "measure_humidity",
                "options": {}
            },
            "alarm_battery": {
                "value": null,
                "lastUpdated": "2018-12-19T11:18:09.613Z",
                "type": "boolean",
                "getable": true,
                "setable": false,
                "title": "Battery alarm",
                "desc": "True when there is a battery warning",
                "units": null,
                "id": "alarm_battery",
                "options": {}
            }
        },
        "flags": [
            "zigbee"
        ],
        "ui": {
            "components": [
                {
                    "id": "sensor",
                    "capabilities": [
                        "measure_temperature",
                        "measure_pressure",
                        "measure_humidity"
                    ]
                },
                {
                    "id": "battery",
                    "capabilities": [
                        "measure_battery",
                        "alarm_battery"
                    ]
                }
            ],
            "componentsStartAt": 0
        },
        "ready": true,
        "available": true,
        "repair": false,
        "unpair": true,
        "speechExamples": [
            "What is the average temperature at home?",
            "What is the average humidity at home?"
        ],
        "images": [],
        "insights": [
            {
                "uri": "homey:device:5fd7e509-b82e-42d4-a97a-508274ad4703",
                "id": "measure_battery",
                "type": "number",
                "title": "Battery",
                "titleTrue": null,
                "titleFalse": null,
                "units": "%"
            },
            {
                "uri": "homey:device:5fd7e509-b82e-42d4-a97a-508274ad4703",
                "id": "measure_temperature",
                "type": "number",
                "title": "Temperature",
                "titleTrue": null,
                "titleFalse": null,
                "units": "°C"
            },
            {
                "uri": "homey:device:5fd7e509-b82e-42d4-a97a-508274ad4703",
                "id": "measure_pressure",
                "type": "number",
                "title": "Pressure",
                "titleTrue": null,
                "titleFalse": null,
                "units": "mbar"
            },
            {
                "uri": "homey:device:5fd7e509-b82e-42d4-a97a-508274ad4703",
                "id": "measure_humidity",
                "type": "number",
                "title": "Humidity",
                "titleTrue": null,
                "titleFalse": null,
                "units": "%"
            },
            {
                "uri": "homey:device:5fd7e509-b82e-42d4-a97a-508274ad4703",
                "id": "alarm_battery",
                "type": "boolean",
                "title": "Battery alarm",
                "titleTrue": "Battery alarm turned on",
                "titleFalse": "Battery alarm turned off",
                "units": null,
                "decimals": null
            }
        ],
        "color": "#dfc120"
    },
    "84ce01ee-3921-4869-b3a1-75a6a6ba3b44": {
        "__athom_api_type": "HomeyAPI.ManagerDevices.Device",
        "id": "84ce01ee-3921-4869-b3a1-75a6a6ba3b44",
        "name": "Freezer Sensor",
        "driverUri": "homey:app:com.xiaomi-mi",
        "driverId": "weather",
        "zone": "2ab5a003-0120-4c01-80f2-a237dcf4ba14",
        "data": {
            "token": "dee0c2d7-f992-4024-8980-90a6b7424dfe"
        },
        "icon": "/icon.svg",
        "iconObj": {
            "id": "68e70ee5f187a180df5e2397041bc742",
            "url": "/icon/68e70ee5f187a180df5e2397041bc742/icon.svg"
        },
        "settings": {
            "temperature_offset": 0,
            "temperature_decimals": "1",
            "humidity_decimals": "1",
            "battery_threshold": 20,
            "zb_profile_id": "260",
            "zb_device_id": "24321",
            "zb_ieee_addr": "0x00158d000273a456",
            "zb_product_id": "lumi.weather",
            "zb_manufacturer_name": "LUMI"
        },
        "settingsObj": true,
        "class": "sensor",
        "virtualClass": null,
        "capabilities": [
            "measure_battery",
            "measure_temperature",
            "measure_pressure",
            "measure_humidity",
            "alarm_battery"
        ],
        "capabilitiesObj": {
            "measure_battery": {
                "value": null,
                "lastUpdated": "2018-12-19T11:18:09.613Z",
                "type": "number",
                "getable": true,
                "setable": false,
                "title": "Battery",
                "desc": "Battery charge in percentage (%)",
                "units": "%",
                "decimals": 2,
                "min": 0,
                "max": 100,
                "chartType": "spline",
                "id": "measure_battery",
                "options": {}
            },
            "measure_temperature": {
                "value": -100,
                "lastUpdated": "2018-12-17T09:47:03.561Z",
                "type": "number",
                "getable": true,
                "setable": false,
                "title": "Temperature",
                "desc": null,
                "units": "°C",
                "decimals": 2,
                "chartType": "spline",
                "id": "measure_temperature",
                "options": {}
            },
            "measure_pressure": {
                "value": 1003,
                "lastUpdated": "2018-12-17T09:39:12.135Z",
                "type": "number",
                "getable": true,
                "setable": false,
                "title": "Pressure",
                "desc": "Pressure in millibar (mbar)",
                "units": "mbar",
                "decimals": 2,
                "chartType": "spline",
                "id": "measure_pressure",
                "options": {}
            },
            "measure_humidity": {
                "value": 61.8,
                "lastUpdated": "2018-12-17T09:42:56.356Z",
                "type": "number",
                "getable": true,
                "setable": false,
                "title": "Humidity",
                "desc": "Humidity in percent (%)",
                "units": "%",
                "decimals": 2,
                "chartType": "spline",
                "id": "measure_humidity",
                "options": {}
            },
            "alarm_battery": {
                "value": null,
                "lastUpdated": "2018-12-19T11:18:09.613Z",
                "type": "boolean",
                "getable": true,
                "setable": false,
                "title": "Battery alarm",
                "desc": "True when there is a battery warning",
                "units": null,
                "id": "alarm_battery",
                "options": {}
            }
        },
        "flags": [
            "zigbee"
        ],
        "ui": {
            "components": [
                {
                    "id": "sensor",
                    "capabilities": [
                        "measure_temperature",
                        "measure_pressure",
                        "measure_humidity"
                    ]
                },
                {
                    "id": "battery",
                    "capabilities": [
                        "measure_battery",
                        "alarm_battery"
                    ]
                }
            ],
            "componentsStartAt": 0
        },
        "ready": true,
        "available": true,
        "repair": false,
        "unpair": true,
        "speechExamples": [
            "What is the average temperature at home?",
            "What is the average humidity at home?"
        ],
        "images": [],
        "insights": [
            {
                "uri": "homey:device:84ce01ee-3921-4869-b3a1-75a6a6ba3b44",
                "id": "measure_battery",
                "type": "number",
                "title": "Battery",
                "titleTrue": null,
                "titleFalse": null,
                "units": "%"
            },
            {
                "uri": "homey:device:84ce01ee-3921-4869-b3a1-75a6a6ba3b44",
                "id": "measure_temperature",
                "type": "number",
                "title": "Temperature",
                "titleTrue": null,
                "titleFalse": null,
                "units": "°C"
            },
            {
                "uri": "homey:device:84ce01ee-3921-4869-b3a1-75a6a6ba3b44",
                "id": "measure_pressure",
                "type": "number",
                "title": "Pressure",
                "titleTrue": null,
                "titleFalse": null,
                "units": "mbar"
            },
            {
                "uri": "homey:device:84ce01ee-3921-4869-b3a1-75a6a6ba3b44",
                "id": "measure_humidity",
                "type": "number",
                "title": "Humidity",
                "titleTrue": null,
                "titleFalse": null,
                "units": "%"
            },
            {
                "uri": "homey:device:84ce01ee-3921-4869-b3a1-75a6a6ba3b44",
                "id": "alarm_battery",
                "type": "boolean",
                "title": "Battery alarm",
                "titleTrue": "Battery alarm turned on",
                "titleFalse": "Battery alarm turned off",
                "units": null,
                "decimals": null
            }
        ],
        "color": "#dfc120"
    },
    "271ecd1f-fda4-4d92-bd7f-1457b15ebb66": {
        "__athom_api_type": "HomeyAPI.ManagerDevices.Device",
        "id": "271ecd1f-fda4-4d92-bd7f-1457b15ebb66",
        "name": "Laundry Sensor",
        "driverUri": "homey:app:com.xiaomi-mi",
        "driverId": "weather",
        "zone": "a9da0ff3-91e3-4529-880a-cdf55c3662ab",
        "data": {
            "token": "69b12c50-d419-4079-b267-d124660f451d"
        },
        "icon": "/icon.svg",
        "iconObj": {
            "id": "68e70ee5f187a180df5e2397041bc742",
            "url": "/icon/68e70ee5f187a180df5e2397041bc742/icon.svg"
        },
        "settings": {
            "temperature_offset": 0,
            "temperature_decimals": "2",
            "humidity_decimals": "2",
            "battery_threshold": 20,
            "zb_profile_id": "260",
            "zb_device_id": "24321",
            "zb_ieee_addr": "0x00158d000275353c",
            "zb_product_id": "lumi.weather",
            "zb_manufacturer_name": "LUMI"
        },
        "settingsObj": true,
        "class": "sensor",
        "virtualClass": null,
        "capabilities": [
            "measure_battery",
            "measure_temperature",
            "measure_pressure",
            "measure_humidity",
            "alarm_battery"
        ],
        "capabilitiesObj": {
            "measure_battery": {
                "value": null,
                "lastUpdated": "2018-12-19T11:18:09.613Z",
                "type": "number",
                "getable": true,
                "setable": false,
                "title": "Battery",
                "desc": "Battery charge in percentage (%)",
                "units": "%",
                "decimals": 2,
                "min": 0,
                "max": 100,
                "chartType": "spline",
                "id": "measure_battery",
                "options": {}
            },
            "measure_temperature": {
                "value": 20.84,
                "lastUpdated": "2018-12-19T23:27:11.887Z",
                "type": "number",
                "getable": true,
                "setable": false,
                "title": "Temperature",
                "desc": null,
                "units": "°C",
                "decimals": 2,
                "chartType": "spline",
                "id": "measure_temperature",
                "options": {}
            },
            "measure_pressure": {
                "value": 999,
                "lastUpdated": "2018-12-19T23:27:11.922Z",
                "type": "number",
                "getable": true,
                "setable": false,
                "title": "Pressure",
                "desc": "Pressure in millibar (mbar)",
                "units": "mbar",
                "decimals": 2,
                "chartType": "spline",
                "id": "measure_pressure",
                "options": {}
            },
            "measure_humidity": {
                "value": 78.64,
                "lastUpdated": "2018-12-19T23:27:11.915Z",
                "type": "number",
                "getable": true,
                "setable": false,
                "title": "Humidity",
                "desc": "Humidity in percent (%)",
                "units": "%",
                "decimals": 2,
                "chartType": "spline",
                "id": "measure_humidity",
                "options": {}
            },
            "alarm_battery": {
                "value": null,
                "lastUpdated": "2018-12-19T11:18:09.613Z",
                "type": "boolean",
                "getable": true,
                "setable": false,
                "title": "Battery alarm",
                "desc": "True when there is a battery warning",
                "units": null,
                "id": "alarm_battery",
                "options": {}
            }
        },
        "flags": [
            "zigbee"
        ],
        "ui": {
            "components": [
                {
                    "id": "sensor",
                    "capabilities": [
                        "measure_temperature",
                        "measure_pressure",
                        "measure_humidity"
                    ]
                },
                {
                    "id": "battery",
                    "capabilities": [
                        "measure_battery",
                        "alarm_battery"
                    ]
                }
            ],
            "componentsStartAt": 0
        },
        "ready": true,
        "available": true,
        "repair": false,
        "unpair": true,
        "speechExamples": [
            "What is the average temperature at home?",
            "What is the average humidity at home?"
        ],
        "images": [],
        "insights": [
            {
                "uri": "homey:device:271ecd1f-fda4-4d92-bd7f-1457b15ebb66",
                "id": "measure_battery",
                "type": "number",
                "title": "Battery",
                "titleTrue": null,
                "titleFalse": null,
                "units": "%"
            },
            {
                "uri": "homey:device:271ecd1f-fda4-4d92-bd7f-1457b15ebb66",
                "id": "measure_temperature",
                "type": "number",
                "title": "Temperature",
                "titleTrue": null,
                "titleFalse": null,
                "units": "°C"
            },
            {
                "uri": "homey:device:271ecd1f-fda4-4d92-bd7f-1457b15ebb66",
                "id": "measure_pressure",
                "type": "number",
                "title": "Pressure",
                "titleTrue": null,
                "titleFalse": null,
                "units": "mbar"
            },
            {
                "uri": "homey:device:271ecd1f-fda4-4d92-bd7f-1457b15ebb66",
                "id": "measure_humidity",
                "type": "number",
                "title": "Humidity",
                "titleTrue": null,
                "titleFalse": null,
                "units": "%"
            },
            {
                "uri": "homey:device:271ecd1f-fda4-4d92-bd7f-1457b15ebb66",
                "id": "alarm_battery",
                "type": "boolean",
                "title": "Battery alarm",
                "titleTrue": "Battery alarm turned on",
                "titleFalse": "Battery alarm turned off",
                "units": null,
                "decimals": null
            }
        ],
        "color": "#dfc120"
    },
    "ce3b4951-c4ca-4b5e-81f1-6a4355760822": {
        "__athom_api_type": "HomeyAPI.ManagerDevices.Device",
        "id": "ce3b4951-c4ca-4b5e-81f1-6a4355760822",
        "name": "Cube",
        "driverUri": "homey:app:com.xiaomi-mi",
        "driverId": "cube",
        "zone": "9919ee1e-ffbc-480b-bc4b-77fb047e9e68",
        "data": {
            "token": "5c28edc4-a5c0-4a71-a439-d170ffee6319"
        },
        "icon": "/icon.svg",
        "iconObj": {
            "id": "a7abd2a5f784a0bada39fada6430fedd",
            "url": "/icon/a7abd2a5f784a0bada39fada6430fedd/icon.svg"
        },
        "settings": {
            "cube_relative_angle": 180,
            "battery_threshold": 20,
            "zb_profile_id": "260",
            "zb_device_id": "24321",
            "zb_ieee_addr": "0x00158d000289e507",
            "zb_product_id": "lumi.sensor_cube",
            "zb_manufacturer_name": "LUMI"
        },
        "settingsObj": true,
        "class": "sensor",
        "virtualClass": null,
        "capabilities": [
            "measure_battery",
            "cube_state_motion",
            "cube_state_face",
            "cube_measure_rotation",
            "alarm_battery"
        ],
        "capabilitiesObj": {
            "measure_battery": {
                "value": null,
                "lastUpdated": "2018-12-19T11:18:06.635Z",
                "type": "number",
                "getable": true,
                "setable": false,
                "title": "Battery",
                "desc": "Battery charge in percentage (%)",
                "units": "%",
                "decimals": 2,
                "min": 0,
                "max": 100,
                "chartType": "spline",
                "id": "measure_battery",
                "options": {}
            },
            "cube_state_motion": {
                "value": "Shake",
                "lastUpdated": "2018-12-19T23:28:19.498Z",
                "type": "enum",
                "getable": true,
                "setable": false,
                "title": "Motion",
                "desc": null,
                "units": null,
                "values": [
                    {
                        "id": "Shake",
                        "title": "Shake"
                    },
                    {
                        "id": "Flip90",
                        "title": "Flip 90°"
                    },
                    {
                        "id": "Flip180",
                        "title": "Flip 180°"
                    },
                    {
                        "id": "Slide",
                        "title": "Slide"
                    },
                    {
                        "id": "DoubleTap",
                        "title": "Double tap"
                    },
                    {
                        "id": "Rotate",
                        "title": "Rotate"
                    },
                    {
                        "id": "Catch",
                        "title": "Catch"
                    }
                ],
                "id": "cube_state_motion",
                "options": {}
            },
            "cube_state_face": {
                "value": "5",
                "lastUpdated": "2018-12-19T23:28:19.499Z",
                "type": "enum",
                "getable": true,
                "setable": false,
                "title": "Face up",
                "desc": null,
                "units": null,
                "values": [
                    {
                        "id": "1",
                        "title": "Face 1"
                    },
                    {
                        "id": "2",
                        "title": "Face 2"
                    },
                    {
                        "id": "3",
                        "title": "Face 3"
                    },
                    {
                        "id": "4",
                        "title": "Face 4"
                    },
                    {
                        "id": "5",
                        "title": "Face 5"
                    },
                    {
                        "id": "6",
                        "title": "Face 6"
                    }
                ],
                "id": "cube_state_face",
                "options": {}
            },
            "cube_measure_rotation": {
                "value": 13.19,
                "lastUpdated": "2018-12-13T12:50:21.099Z",
                "type": "number",
                "getable": true,
                "setable": false,
                "title": "Rotation",
                "desc": null,
                "units": "°",
                "decimals": 2,
                "id": "cube_measure_rotation",
                "options": {}
            },
            "alarm_battery": {
                "value": null,
                "lastUpdated": "2018-12-19T11:18:06.637Z",
                "type": "boolean",
                "getable": true,
                "setable": false,
                "title": "Battery alarm",
                "desc": "True when there is a battery warning",
                "units": null,
                "id": "alarm_battery",
                "options": {}
            }
        },
        "flags": [
            "zigbee"
        ],
        "ui": {
            "components": [
                {
                    "id": "picker",
                    "capabilities": [
                        "cube_state_motion",
                        "cube_state_face"
                    ]
                },
                {
                    "id": "sensor",
                    "capabilities": [
                        "cube_measure_rotation"
                    ]
                },
                {
                    "id": "battery",
                    "capabilities": [
                        "measure_battery",
                        "alarm_battery"
                    ]
                }
            ],
            "componentsStartAt": 0
        },
        "ready": true,
        "available": true,
        "repair": false,
        "unpair": true,
        "speechExamples": [],
        "images": [],
        "insights": [
            {
                "uri": "homey:device:ce3b4951-c4ca-4b5e-81f1-6a4355760822",
                "id": "measure_battery",
                "type": "number",
                "title": "Battery",
                "titleTrue": null,
                "titleFalse": null,
                "units": "%"
            },
            {
                "uri": "homey:device:ce3b4951-c4ca-4b5e-81f1-6a4355760822",
                "id": "alarm_battery",
                "type": "boolean",
                "title": "Battery alarm",
                "titleTrue": "Battery alarm turned on",
                "titleFalse": "Battery alarm turned off",
                "units": null,
                "decimals": null
            }
        ],
        "color": "#dfc120"
    },
    "6cdb9202-882c-47e8-a599-662193caf9ac": {
        "__athom_api_type": "HomeyAPI.ManagerDevices.Device",
        "id": "6cdb9202-882c-47e8-a599-662193caf9ac",
        "name": "Aqara Vibration Sensor",
        "driverUri": "homey:app:com.xiaomi-mi",
        "driverId": "vibration.aq1",
        "zone": "bf3cf5ab-044b-4124-8421-5c3d189f6004",
        "data": {
            "token": "e89d00c9-c9c5-427b-8e87-bf46e5a15866"
        },
        "icon": "/icon.svg",
        "iconObj": {
            "id": "ea741a13cc9bfa2644c89634f204dc40",
            "url": "/icon/ea741a13cc9bfa2644c89634f204dc40/icon.svg"
        },
        "settings": {
            "setReferenceVector": false,
            "tiltReferenceVector": "90,90,0",
            "capabilityTiltAngles": "absolute",
            "alarm_vibration_cancellation_delay": 10,
            "alarm_tilt_cancellation_delay": 30,
            "alarm_drop_cancellation_delay": 30,
            "battery_threshold": 20,
            "zb_profile_id": "260",
            "zb_device_id": "10",
            "zb_ieee_addr": "0x00158d0002b12b49",
            "zb_product_id": "lumi.vibration.aq1",
            "zb_manufacturer_name": "LUMI"
        },
        "settingsObj": true,
        "class": "sensor",
        "virtualClass": null,
        "capabilities": [
            "measure_tilt",
            "measure_tilt.relative",
            "measure_vibration",
            "alarm_vibration",
            "alarm_tilt",
            "alarm_drop",
            "alarm_battery",
            "measure_battery"
        ],
        "capabilitiesObj": {
            "measure_tilt": {
                "value": 2.71,
                "lastUpdated": "2018-12-18T12:18:52.523Z",
                "type": "number",
                "getable": true,
                "setable": false,
                "title": "Tilt angle",
                "desc": null,
                "units": "°",
                "decimals": 2,
                "id": "measure_tilt",
                "options": {}
            },
            "measure_tilt.relative": {
                "value": 70.25,
                "lastUpdated": "2018-12-18T12:18:52.532Z",
                "type": "number",
                "getable": true,
                "setable": false,
                "title": "Relative tilt angle",
                "desc": null,
                "units": "°",
                "decimals": 2,
                "id": "measure_tilt.relative",
                "options": {
                    "title": {
                        "en": "Relative tilt angle"
                    }
                }
            },
            "measure_vibration": {
                "value": 6,
                "lastUpdated": "2018-12-19T20:19:50.698Z",
                "type": "number",
                "getable": true,
                "setable": false,
                "title": "Vibration",
                "desc": null,
                "units": null,
                "decimals": 2,
                "id": "measure_vibration",
                "options": {}
            },
            "alarm_vibration": {
                "value": false,
                "lastUpdated": "2018-12-18T12:18:57.538Z",
                "type": "boolean",
                "getable": true,
                "setable": false,
                "title": "Vibration Alarm",
                "desc": "Detected vibration",
                "units": null,
                "id": "alarm_vibration",
                "options": {}
            },
            "alarm_tilt": {
                "value": false,
                "lastUpdated": "2018-12-18T12:19:22.546Z",
                "type": "boolean",
                "getable": true,
                "setable": false,
                "title": "Tilt Alarm",
                "desc": "Detected tilt motion",
                "units": null,
                "id": "alarm_tilt",
                "options": {}
            },
            "alarm_drop": {
                "value": false,
                "lastUpdated": "2018-12-08T11:15:40.448Z",
                "type": "boolean",
                "getable": true,
                "setable": false,
                "title": "Drop Alarm",
                "desc": "Detected drop motion",
                "units": null,
                "id": "alarm_drop",
                "options": {}
            },
            "alarm_battery": {
                "value": null,
                "lastUpdated": "2018-12-19T11:18:09.246Z",
                "type": "boolean",
                "getable": true,
                "setable": false,
                "title": "Battery alarm",
                "desc": "True when there is a battery warning",
                "units": null,
                "id": "alarm_battery",
                "options": {}
            },
            "measure_battery": {
                "value": null,
                "lastUpdated": "2018-12-19T11:18:09.250Z",
                "type": "number",
                "getable": true,
                "setable": false,
                "title": "Battery",
                "desc": "Battery charge in percentage (%)",
                "units": "%",
                "decimals": 2,
                "min": 0,
                "max": 100,
                "chartType": "spline",
                "id": "measure_battery",
                "options": {}
            }
        },
        "flags": [
            "zigbee"
        ],
        "ui": {
            "components": [
                {
                    "id": "sensor",
                    "capabilities": [
                        "measure_tilt",
                        "measure_tilt.relative",
                        "measure_vibration",
                        "alarm_vibration",
                        "alarm_tilt",
                        "alarm_drop"
                    ]
                },
                {
                    "id": "battery",
                    "capabilities": [
                        "alarm_battery",
                        "measure_battery"
                    ]
                }
            ],
            "componentsStartAt": 0
        },
        "ready": true,
        "available": true,
        "repair": false,
        "unpair": true,
        "speechExamples": [],
        "images": [],
        "insights": [
            {
                "uri": "homey:device:6cdb9202-882c-47e8-a599-662193caf9ac",
                "id": "alarm_battery",
                "type": "boolean",
                "title": "Battery alarm",
                "titleTrue": "Battery alarm turned on",
                "titleFalse": "Battery alarm turned off",
                "units": null,
                "decimals": null
            },
            {
                "uri": "homey:device:6cdb9202-882c-47e8-a599-662193caf9ac",
                "id": "measure_battery",
                "type": "number",
                "title": "Battery",
                "titleTrue": null,
                "titleFalse": null,
                "units": "%"
            }
        ],
        "color": "#dfc120"
    },
    "651184b5-16c6-4142-b955-b84618d16d7a": {
        "__athom_api_type": "HomeyAPI.ManagerDevices.Device",
        "id": "651184b5-16c6-4142-b955-b84618d16d7a",
        "name": "Left Window",
        "driverUri": "homey:app:com.xiaomi-mi",
        "driverId": "sensor_magnet.aq2",
        "zone": "235c928c-cdaa-4930-a8c6-5a2e44de9d80",
        "data": {
            "token": "da59c7e2-50c5-4aaf-a5e0-79574a823133"
        },
        "icon": "/icon.svg",
        "iconObj": {
            "id": "36f4b048c6bd51b26798bb009c041e71",
            "url": "/icon/36f4b048c6bd51b26798bb009c041e71/icon.svg"
        },
        "settings": {
            "battery_threshold": 20,
            "zb_profile_id": "260",
            "zb_device_id": "24321",
            "zb_ieee_addr": "0x00158d0002722ce7",
            "zb_product_id": "lumi.sensor_magnet.aq2",
            "zb_manufacturer_name": "LUMI"
        },
        "settingsObj": true,
        "class": "sensor",
        "virtualClass": null,
        "capabilities": [
            "alarm_contact",
            "alarm_battery",
            "measure_battery"
        ],
        "capabilitiesObj": {
            "alarm_contact": {
                "value": false,
                "lastUpdated": "2018-11-23T13:32:09.397Z",
                "type": "boolean",
                "getable": true,
                "setable": false,
                "title": "Contact alarm",
                "desc": "Contact sensor, e.g. for windows (true/false)",
                "units": null,
                "id": "alarm_contact",
                "options": {}
            },
            "alarm_battery": {
                "value": null,
                "lastUpdated": "2018-12-19T11:18:06.639Z",
                "type": "boolean",
                "getable": true,
                "setable": false,
                "title": "Battery alarm",
                "desc": "True when there is a battery warning",
                "units": null,
                "id": "alarm_battery",
                "options": {}
            },
            "measure_battery": {
                "value": null,
                "lastUpdated": "2018-12-19T11:18:06.646Z",
                "type": "number",
                "getable": true,
                "setable": false,
                "title": "Battery",
                "desc": "Battery charge in percentage (%)",
                "units": "%",
                "decimals": 2,
                "min": 0,
                "max": 100,
                "chartType": "spline",
                "id": "measure_battery",
                "options": {}
            }
        },
        "flags": [
            "zigbee"
        ],
        "ui": {
            "components": [
                {
                    "id": "sensor",
                    "capabilities": [
                        "alarm_contact"
                    ]
                },
                {
                    "id": "battery",
                    "capabilities": [
                        "alarm_battery",
                        "measure_battery"
                    ]
                }
            ],
            "componentsStartAt": 0
        },
        "ready": true,
        "available": true,
        "repair": false,
        "unpair": true,
        "speechExamples": [],
        "images": [],
        "insights": [
            {
                "uri": "homey:device:651184b5-16c6-4142-b955-b84618d16d7a",
                "id": "alarm_battery",
                "type": "boolean",
                "title": "Battery alarm",
                "titleTrue": "Battery alarm turned on",
                "titleFalse": "Battery alarm turned off",
                "units": null,
                "decimals": null
            },
            {
                "uri": "homey:device:651184b5-16c6-4142-b955-b84618d16d7a",
                "id": "measure_battery",
                "type": "number",
                "title": "Battery",
                "titleTrue": null,
                "titleFalse": null,
                "units": "%"
            },
            {
                "uri": "homey:device:651184b5-16c6-4142-b955-b84618d16d7a",
                "id": "alarm_contact",
                "type": "boolean",
                "title": "Contact alarm",
                "titleTrue": "Contact alarm turned on",
                "titleFalse": "Contact alarm turned off",
                "units": null,
                "decimals": null
            }
        ],
        "color": "#dfc120"
    },
    "ae9715ee-f2d3-4479-bfad-5a18bf3f5349": {
        "__athom_api_type": "HomeyAPI.ManagerDevices.Device",
        "id": "ae9715ee-f2d3-4479-bfad-5a18bf3f5349",
        "name": "Laundry Window",
        "driverUri": "homey:app:com.xiaomi-mi",
        "driverId": "sensor_magnet.aq2",
        "zone": "a9da0ff3-91e3-4529-880a-cdf55c3662ab",
        "data": {
            "token": "e630fda6-92b5-43ce-b476-36d5b1b5e852"
        },
        "icon": "/icon.svg",
        "iconObj": {
            "id": "36f4b048c6bd51b26798bb009c041e71",
            "url": "/icon/36f4b048c6bd51b26798bb009c041e71/icon.svg"
        },
        "settings": {
            "battery_threshold": 20,
            "zb_profile_id": "260",
            "zb_device_id": "24321",
            "zb_ieee_addr": "0x00158d00022d2e02",
            "zb_product_id": "lumi.sensor_magnet.aq2",
            "zb_manufacturer_name": "LUMI"
        },
        "settingsObj": true,
        "class": "sensor",
        "virtualClass": null,
        "capabilities": [
            "alarm_contact",
            "alarm_battery",
            "measure_battery"
        ],
        "capabilitiesObj": {
            "alarm_contact": {
                "value": false,
                "lastUpdated": "2018-11-23T13:32:09.429Z",
                "type": "boolean",
                "getable": true,
                "setable": false,
                "title": "Contact alarm",
                "desc": "Contact sensor, e.g. for windows (true/false)",
                "units": null,
                "id": "alarm_contact",
                "options": {}
            },
            "alarm_battery": {
                "value": null,
                "lastUpdated": "2018-12-19T11:18:06.650Z",
                "type": "boolean",
                "getable": true,
                "setable": false,
                "title": "Battery alarm",
                "desc": "True when there is a battery warning",
                "units": null,
                "id": "alarm_battery",
                "options": {}
            },
            "measure_battery": {
                "value": null,
                "lastUpdated": "2018-12-19T11:18:06.656Z",
                "type": "number",
                "getable": true,
                "setable": false,
                "title": "Battery",
                "desc": "Battery charge in percentage (%)",
                "units": "%",
                "decimals": 2,
                "min": 0,
                "max": 100,
                "chartType": "spline",
                "id": "measure_battery",
                "options": {}
            }
        },
        "flags": [
            "zigbee"
        ],
        "ui": {
            "components": [
                {
                    "id": "sensor",
                    "capabilities": [
                        "alarm_contact"
                    ]
                },
                {
                    "id": "battery",
                    "capabilities": [
                        "alarm_battery",
                        "measure_battery"
                    ]
                }
            ],
            "componentsStartAt": 0
        },
        "ready": true,
        "available": true,
        "repair": false,
        "unpair": true,
        "speechExamples": [],
        "images": [],
        "insights": [
            {
                "uri": "homey:device:ae9715ee-f2d3-4479-bfad-5a18bf3f5349",
                "id": "measure_battery",
                "type": "number",
                "title": "Battery",
                "titleTrue": null,
                "titleFalse": null,
                "units": "%"
            },
            {
                "uri": "homey:device:ae9715ee-f2d3-4479-bfad-5a18bf3f5349",
                "id": "alarm_contact",
                "type": "boolean",
                "title": "Contact alarm",
                "titleTrue": "Contact alarm turned on",
                "titleFalse": "Contact alarm turned off",
                "units": null,
                "decimals": null
            },
            {
                "uri": "homey:device:ae9715ee-f2d3-4479-bfad-5a18bf3f5349",
                "id": "alarm_battery",
                "type": "boolean",
                "title": "Battery alarm",
                "titleTrue": "Battery alarm turned on",
                "titleFalse": "Battery alarm turned off",
                "units": null,
                "decimals": null
            }
        ],
        "color": "#dfc120"
    },
    "ea62d596-1431-4102-a581-60ae080ec388": {
        "__athom_api_type": "HomeyAPI.ManagerDevices.Device",
        "id": "ea62d596-1431-4102-a581-60ae080ec388",
        "name": "Living Room Outside Door",
        "driverUri": "homey:app:com.xiaomi-mi",
        "driverId": "sensor_magnet.aq2",
        "zone": "9eb2975d-49ea-4033-8db0-105a3e982117",
        "data": {
            "token": "8d0a637c-6444-428e-9fd1-6ad267360d2e"
        },
        "icon": "/icon.svg",
        "iconObj": {
            "id": "36f4b048c6bd51b26798bb009c041e71",
            "url": "/icon/36f4b048c6bd51b26798bb009c041e71/icon.svg"
        },
        "settings": {
            "battery_threshold": 20,
            "zb_profile_id": "260",
            "zb_device_id": "24321",
            "zb_ieee_addr": "0x00158d000273e290",
            "zb_product_id": "lumi.sensor_magnet.aq2",
            "zb_manufacturer_name": "LUMI"
        },
        "settingsObj": true,
        "class": "sensor",
        "virtualClass": null,
        "capabilities": [
            "alarm_contact",
            "alarm_battery",
            "measure_battery"
        ],
        "capabilitiesObj": {
            "alarm_contact": {
                "value": false,
                "lastUpdated": "2018-11-23T13:32:09.450Z",
                "type": "boolean",
                "getable": true,
                "setable": false,
                "title": "Contact alarm",
                "desc": "Contact sensor, e.g. for windows (true/false)",
                "units": null,
                "id": "alarm_contact",
                "options": {}
            },
            "alarm_battery": {
                "value": null,
                "lastUpdated": "2018-12-19T11:18:06.687Z",
                "type": "boolean",
                "getable": true,
                "setable": false,
                "title": "Battery alarm",
                "desc": "True when there is a battery warning",
                "units": null,
                "id": "alarm_battery",
                "options": {}
            },
            "measure_battery": {
                "value": null,
                "lastUpdated": "2018-12-19T11:18:06.687Z",
                "type": "number",
                "getable": true,
                "setable": false,
                "title": "Battery",
                "desc": "Battery charge in percentage (%)",
                "units": "%",
                "decimals": 2,
                "min": 0,
                "max": 100,
                "chartType": "spline",
                "id": "measure_battery",
                "options": {}
            }
        },
        "flags": [
            "zigbee"
        ],
        "ui": {
            "components": [
                {
                    "id": "sensor",
                    "capabilities": [
                        "alarm_contact"
                    ]
                },
                {
                    "id": "battery",
                    "capabilities": [
                        "alarm_battery",
                        "measure_battery"
                    ]
                }
            ],
            "componentsStartAt": 0
        },
        "ready": true,
        "available": true,
        "repair": false,
        "unpair": true,
        "speechExamples": [],
        "images": [],
        "insights": [
            {
                "uri": "homey:device:ea62d596-1431-4102-a581-60ae080ec388",
                "id": "alarm_contact",
                "type": "boolean",
                "title": "Contact alarm",
                "titleTrue": "Contact alarm turned on",
                "titleFalse": "Contact alarm turned off",
                "units": null,
                "decimals": null
            },
            {
                "uri": "homey:device:ea62d596-1431-4102-a581-60ae080ec388",
                "id": "alarm_battery",
                "type": "boolean",
                "title": "Battery alarm",
                "titleTrue": "Battery alarm turned on",
                "titleFalse": "Battery alarm turned off",
                "units": null,
                "decimals": null
            },
            {
                "uri": "homey:device:ea62d596-1431-4102-a581-60ae080ec388",
                "id": "measure_battery",
                "type": "number",
                "title": "Battery",
                "titleTrue": null,
                "titleFalse": null,
                "units": "%"
            }
        ],
        "color": "#dfc120"
    },
    "d5d67964-8af5-4618-98db-ac219f6ee184": {
        "__athom_api_type": "HomeyAPI.ManagerDevices.Device",
        "id": "d5d67964-8af5-4618-98db-ac219f6ee184",
        "name": "Right Window",
        "driverUri": "homey:app:com.xiaomi-mi",
        "driverId": "sensor_magnet.aq2",
        "zone": "235c928c-cdaa-4930-a8c6-5a2e44de9d80",
        "data": {
            "token": "02b38dc5-ecd9-47eb-8d51-e2c23df8ce53"
        },
        "icon": "/icon.svg",
        "iconObj": {
            "id": "36f4b048c6bd51b26798bb009c041e71",
            "url": "/icon/36f4b048c6bd51b26798bb009c041e71/icon.svg"
        },
        "settings": {
            "battery_threshold": 20,
            "zb_profile_id": "260",
            "zb_device_id": "24321",
            "zb_ieee_addr": "0x00158d000273e243",
            "zb_product_id": "lumi.sensor_magnet.aq2",
            "zb_manufacturer_name": "LUMI"
        },
        "settingsObj": true,
        "class": "sensor",
        "virtualClass": null,
        "capabilities": [
            "alarm_contact",
            "alarm_battery",
            "measure_battery"
        ],
        "capabilitiesObj": {
            "alarm_contact": {
                "value": false,
                "lastUpdated": "2018-12-10T11:25:31.211Z",
                "type": "boolean",
                "getable": true,
                "setable": false,
                "title": "Contact alarm",
                "desc": "Contact sensor, e.g. for windows (true/false)",
                "units": null,
                "id": "alarm_contact",
                "options": {}
            },
            "alarm_battery": {
                "value": null,
                "lastUpdated": "2018-12-19T11:18:06.687Z",
                "type": "boolean",
                "getable": true,
                "setable": false,
                "title": "Battery alarm",
                "desc": "True when there is a battery warning",
                "units": null,
                "id": "alarm_battery",
                "options": {}
            },
            "measure_battery": {
                "value": null,
                "lastUpdated": "2018-12-19T11:18:06.687Z",
                "type": "number",
                "getable": true,
                "setable": false,
                "title": "Battery",
                "desc": "Battery charge in percentage (%)",
                "units": "%",
                "decimals": 2,
                "min": 0,
                "max": 100,
                "chartType": "spline",
                "id": "measure_battery",
                "options": {}
            }
        },
        "flags": [
            "zigbee"
        ],
        "ui": {
            "components": [
                {
                    "id": "sensor",
                    "capabilities": [
                        "alarm_contact"
                    ]
                },
                {
                    "id": "battery",
                    "capabilities": [
                        "alarm_battery",
                        "measure_battery"
                    ]
                }
            ],
            "componentsStartAt": 0
        },
        "ready": true,
        "available": true,
        "repair": false,
        "unpair": true,
        "speechExamples": [],
        "images": [],
        "insights": [
            {
                "uri": "homey:device:d5d67964-8af5-4618-98db-ac219f6ee184",
                "id": "alarm_contact",
                "type": "boolean",
                "title": "Contact alarm",
                "titleTrue": "Contact alarm turned on",
                "titleFalse": "Contact alarm turned off",
                "units": null,
                "decimals": null
            },
            {
                "uri": "homey:device:d5d67964-8af5-4618-98db-ac219f6ee184",
                "id": "alarm_battery",
                "type": "boolean",
                "title": "Battery alarm",
                "titleTrue": "Battery alarm turned on",
                "titleFalse": "Battery alarm turned off",
                "units": null,
                "decimals": null
            },
            {
                "uri": "homey:device:d5d67964-8af5-4618-98db-ac219f6ee184",
                "id": "measure_battery",
                "type": "number",
                "title": "Battery",
                "titleTrue": null,
                "titleFalse": null,
                "units": "%"
            }
        ],
        "color": "#dfc120"
    },
    "9b9c5f73-fdac-44eb-9c70-1fed30e23d63": {
        "__athom_api_type": "HomeyAPI.ManagerDevices.Device",
        "id": "9b9c5f73-fdac-44eb-9c70-1fed30e23d63",
        "name": "Front Door",
        "driverUri": "homey:app:com.xiaomi-mi",
        "driverId": "sensor_magnet.aq2",
        "zone": "478cfd92-6475-4214-80d9-27125e39863a",
        "data": {
            "token": "e242efa3-bc31-472e-a7f5-bfa3bc6647d1"
        },
        "icon": "/icon.svg",
        "iconObj": {
            "id": "36f4b048c6bd51b26798bb009c041e71",
            "url": "/icon/36f4b048c6bd51b26798bb009c041e71/icon.svg"
        },
        "settings": {
            "battery_threshold": 20,
            "zb_profile_id": "260",
            "zb_device_id": "24321",
            "zb_ieee_addr": "0x00158d0002329ee7",
            "zb_product_id": "lumi.sensor_magnet.aq2",
            "zb_manufacturer_name": "LUMI"
        },
        "settingsObj": true,
        "class": "sensor",
        "virtualClass": null,
        "capabilities": [
            "alarm_contact",
            "alarm_battery",
            "measure_battery"
        ],
        "capabilitiesObj": {
            "alarm_contact": {
                "value": false,
                "lastUpdated": "2018-12-19T20:38:46.584Z",
                "type": "boolean",
                "getable": true,
                "setable": false,
                "title": "Contact alarm",
                "desc": "Contact sensor, e.g. for windows (true/false)",
                "units": null,
                "id": "alarm_contact",
                "options": {}
            },
            "alarm_battery": {
                "value": null,
                "lastUpdated": "2018-12-19T11:18:06.687Z",
                "type": "boolean",
                "getable": true,
                "setable": false,
                "title": "Battery alarm",
                "desc": "True when there is a battery warning",
                "units": null,
                "id": "alarm_battery",
                "options": {}
            },
            "measure_battery": {
                "value": null,
                "lastUpdated": "2018-12-19T11:18:06.687Z",
                "type": "number",
                "getable": true,
                "setable": false,
                "title": "Battery",
                "desc": "Battery charge in percentage (%)",
                "units": "%",
                "decimals": 2,
                "min": 0,
                "max": 100,
                "chartType": "spline",
                "id": "measure_battery",
                "options": {}
            }
        },
        "flags": [
            "zigbee"
        ],
        "ui": {
            "components": [
                {
                    "id": "sensor",
                    "capabilities": [
                        "alarm_contact"
                    ]
                },
                {
                    "id": "battery",
                    "capabilities": [
                        "alarm_battery",
                        "measure_battery"
                    ]
                }
            ],
            "componentsStartAt": 0
        },
        "ready": true,
        "available": true,
        "repair": false,
        "unpair": true,
        "speechExamples": [],
        "images": [],
        "insights": [
            {
                "uri": "homey:device:9b9c5f73-fdac-44eb-9c70-1fed30e23d63",
                "id": "alarm_contact",
                "type": "boolean",
                "title": "Contact alarm",
                "titleTrue": "Contact alarm turned on",
                "titleFalse": "Contact alarm turned off",
                "units": null,
                "decimals": null
            },
            {
                "uri": "homey:device:9b9c5f73-fdac-44eb-9c70-1fed30e23d63",
                "id": "alarm_battery",
                "type": "boolean",
                "title": "Battery alarm",
                "titleTrue": "Battery alarm turned on",
                "titleFalse": "Battery alarm turned off",
                "units": null,
                "decimals": null
            },
            {
                "uri": "homey:device:9b9c5f73-fdac-44eb-9c70-1fed30e23d63",
                "id": "measure_battery",
                "type": "number",
                "title": "Battery",
                "titleTrue": null,
                "titleFalse": null,
                "units": "%"
            }
        ],
        "color": "#dfc120"
    },
    "8c535d74-f313-4150-9495-c216bf0694c9": {
        "__athom_api_type": "HomeyAPI.ManagerDevices.Device",
        "id": "8c535d74-f313-4150-9495-c216bf0694c9",
        "name": "Dining Room Outside Door",
        "driverUri": "homey:app:com.xiaomi-mi",
        "driverId": "sensor_magnet.aq2",
        "zone": "235c928c-cdaa-4930-a8c6-5a2e44de9d80",
        "data": {
            "token": "e659e8a1-2007-4ed7-9f29-35aecb148920"
        },
        "icon": "/icon.svg",
        "iconObj": {
            "id": "36f4b048c6bd51b26798bb009c041e71",
            "url": "/icon/36f4b048c6bd51b26798bb009c041e71/icon.svg"
        },
        "settings": {
            "battery_threshold": 20,
            "zb_profile_id": "260",
            "zb_device_id": "24321",
            "zb_ieee_addr": "0x00158d0002434bbc",
            "zb_product_id": "lumi.sensor_magnet.aq2",
            "zb_manufacturer_name": "LUMI"
        },
        "settingsObj": true,
        "class": "sensor",
        "virtualClass": null,
        "capabilities": [
            "alarm_contact",
            "alarm_battery",
            "measure_battery"
        ],
        "capabilitiesObj": {
            "alarm_contact": {
                "value": false,
                "lastUpdated": "2018-12-19T12:37:03.010Z",
                "type": "boolean",
                "getable": true,
                "setable": false,
                "title": "Contact alarm",
                "desc": "Contact sensor, e.g. for windows (true/false)",
                "units": null,
                "id": "alarm_contact",
                "options": {}
            },
            "alarm_battery": {
                "value": null,
                "lastUpdated": "2018-12-19T11:18:06.687Z",
                "type": "boolean",
                "getable": true,
                "setable": false,
                "title": "Battery alarm",
                "desc": "True when there is a battery warning",
                "units": null,
                "id": "alarm_battery",
                "options": {}
            },
            "measure_battery": {
                "value": null,
                "lastUpdated": "2018-12-19T11:18:06.687Z",
                "type": "number",
                "getable": true,
                "setable": false,
                "title": "Battery",
                "desc": "Battery charge in percentage (%)",
                "units": "%",
                "decimals": 2,
                "min": 0,
                "max": 100,
                "chartType": "spline",
                "id": "measure_battery",
                "options": {}
            }
        },
        "flags": [
            "zigbee"
        ],
        "ui": {
            "components": [
                {
                    "id": "sensor",
                    "capabilities": [
                        "alarm_contact"
                    ]
                },
                {
                    "id": "battery",
                    "capabilities": [
                        "alarm_battery",
                        "measure_battery"
                    ]
                }
            ],
            "componentsStartAt": 0
        },
        "ready": true,
        "available": true,
        "repair": false,
        "unpair": true,
        "speechExamples": [],
        "images": [],
        "insights": [
            {
                "uri": "homey:device:8c535d74-f313-4150-9495-c216bf0694c9",
                "id": "alarm_contact",
                "type": "boolean",
                "title": "Contact alarm",
                "titleTrue": "Contact alarm turned on",
                "titleFalse": "Contact alarm turned off",
                "units": null,
                "decimals": null
            },
            {
                "uri": "homey:device:8c535d74-f313-4150-9495-c216bf0694c9",
                "id": "alarm_battery",
                "type": "boolean",
                "title": "Battery alarm",
                "titleTrue": "Battery alarm turned on",
                "titleFalse": "Battery alarm turned off",
                "units": null,
                "decimals": null
            },
            {
                "uri": "homey:device:8c535d74-f313-4150-9495-c216bf0694c9",
                "id": "measure_battery",
                "type": "number",
                "title": "Battery",
                "titleTrue": null,
                "titleFalse": null,
                "units": "%"
            }
        ],
        "color": "#dfc120"
    },
    "29c82ff2-b196-4f7c-95af-86be891e4b83": {
        "__athom_api_type": "HomeyAPI.ManagerDevices.Device",
        "id": "29c82ff2-b196-4f7c-95af-86be891e4b83",
        "name": "Garage Door",
        "driverUri": "homey:app:com.xiaomi-mi",
        "driverId": "sensor_magnet.aq2",
        "zone": "b2cc9dc7-c8a1-4303-bbb0-12eeca6bf2a9",
        "data": {
            "token": "fcb1d578-dc94-4d0a-9418-8d2bfd966cab"
        },
        "icon": "/icon.svg",
        "iconObj": {
            "id": "36f4b048c6bd51b26798bb009c041e71",
            "url": "/icon/36f4b048c6bd51b26798bb009c041e71/icon.svg"
        },
        "settings": {
            "battery_threshold": 20,
            "zb_profile_id": "260",
            "zb_device_id": "24321",
            "zb_ieee_addr": "0x00158d00022d2dc0",
            "zb_product_id": "lumi.sensor_magnet.aq2",
            "zb_manufacturer_name": "LUMI"
        },
        "settingsObj": true,
        "class": "sensor",
        "virtualClass": null,
        "capabilities": [
            "alarm_contact",
            "alarm_battery",
            "measure_battery"
        ],
        "capabilitiesObj": {
            "alarm_contact": {
                "value": false,
                "lastUpdated": "2018-12-19T23:36:42.666Z",
                "type": "boolean",
                "getable": true,
                "setable": false,
                "title": "Contact alarm",
                "desc": "Contact sensor, e.g. for windows (true/false)",
                "units": null,
                "id": "alarm_contact",
                "options": {}
            },
            "alarm_battery": {
                "value": null,
                "lastUpdated": "2018-12-19T11:18:06.687Z",
                "type": "boolean",
                "getable": true,
                "setable": false,
                "title": "Battery alarm",
                "desc": "True when there is a battery warning",
                "units": null,
                "id": "alarm_battery",
                "options": {}
            },
            "measure_battery": {
                "value": null,
                "lastUpdated": "2018-12-19T11:18:06.687Z",
                "type": "number",
                "getable": true,
                "setable": false,
                "title": "Battery",
                "desc": "Battery charge in percentage (%)",
                "units": "%",
                "decimals": 2,
                "min": 0,
                "max": 100,
                "chartType": "spline",
                "id": "measure_battery",
                "options": {}
            }
        },
        "flags": [
            "zigbee"
        ],
        "ui": {
            "components": [
                {
                    "id": "sensor",
                    "capabilities": [
                        "alarm_contact"
                    ]
                },
                {
                    "id": "battery",
                    "capabilities": [
                        "alarm_battery",
                        "measure_battery"
                    ]
                }
            ],
            "componentsStartAt": 0
        },
        "ready": true,
        "available": true,
        "repair": false,
        "unpair": true,
        "speechExamples": [],
        "images": [],
        "insights": [
            {
                "uri": "homey:device:29c82ff2-b196-4f7c-95af-86be891e4b83",
                "id": "alarm_contact",
                "type": "boolean",
                "title": "Contact alarm",
                "titleTrue": "Contact alarm turned on",
                "titleFalse": "Contact alarm turned off",
                "units": null,
                "decimals": null
            },
            {
                "uri": "homey:device:29c82ff2-b196-4f7c-95af-86be891e4b83",
                "id": "alarm_battery",
                "type": "boolean",
                "title": "Battery alarm",
                "titleTrue": "Battery alarm turned on",
                "titleFalse": "Battery alarm turned off",
                "units": null,
                "decimals": null
            },
            {
                "uri": "homey:device:29c82ff2-b196-4f7c-95af-86be891e4b83",
                "id": "measure_battery",
                "type": "number",
                "title": "Battery",
                "titleTrue": null,
                "titleFalse": null,
                "units": "%"
            }
        ],
        "color": "#dfc120"
    },
    "a1e28c5a-f428-4e5f-b708-ffc13b52b35e": {
        "__athom_api_type": "HomeyAPI.ManagerDevices.Device",
        "id": "a1e28c5a-f428-4e5f-b708-ffc13b52b35e",
        "name": "Pantry Door",
        "driverUri": "homey:app:com.xiaomi-mi",
        "driverId": "sensor_magnet.aq2",
        "zone": "4eebb10d-adcf-4d15-80f7-ff7ebb376ffa",
        "data": {
            "token": "7b6836f3-af19-4701-9cad-682b2d523c2c"
        },
        "icon": "/icon.svg",
        "iconObj": {
            "id": "36f4b048c6bd51b26798bb009c041e71",
            "url": "/icon/36f4b048c6bd51b26798bb009c041e71/icon.svg"
        },
        "settings": {
            "battery_threshold": 20,
            "zb_profile_id": "260",
            "zb_device_id": "24321",
            "zb_ieee_addr": "0x00158d0002370873",
            "zb_product_id": "lumi.sensor_magnet.aq2",
            "zb_manufacturer_name": "LUMI"
        },
        "settingsObj": true,
        "class": "sensor",
        "virtualClass": null,
        "capabilities": [
            "alarm_contact",
            "alarm_battery",
            "measure_battery"
        ],
        "capabilitiesObj": {
            "alarm_contact": {
                "value": false,
                "lastUpdated": "2018-12-19T12:42:11.581Z",
                "type": "boolean",
                "getable": true,
                "setable": false,
                "title": "Contact alarm",
                "desc": "Contact sensor, e.g. for windows (true/false)",
                "units": null,
                "id": "alarm_contact",
                "options": {}
            },
            "alarm_battery": {
                "value": null,
                "lastUpdated": "2018-12-19T11:18:06.687Z",
                "type": "boolean",
                "getable": true,
                "setable": false,
                "title": "Battery alarm",
                "desc": "True when there is a battery warning",
                "units": null,
                "id": "alarm_battery",
                "options": {}
            },
            "measure_battery": {
                "value": null,
                "lastUpdated": "2018-12-19T11:18:06.687Z",
                "type": "number",
                "getable": true,
                "setable": false,
                "title": "Battery",
                "desc": "Battery charge in percentage (%)",
                "units": "%",
                "decimals": 2,
                "min": 0,
                "max": 100,
                "chartType": "spline",
                "id": "measure_battery",
                "options": {}
            }
        },
        "flags": [
            "zigbee"
        ],
        "ui": {
            "components": [
                {
                    "id": "sensor",
                    "capabilities": [
                        "alarm_contact"
                    ]
                },
                {
                    "id": "battery",
                    "capabilities": [
                        "alarm_battery",
                        "measure_battery"
                    ]
                }
            ],
            "componentsStartAt": 0
        },
        "ready": true,
        "available": true,
        "repair": false,
        "unpair": true,
        "speechExamples": [],
        "images": [],
        "insights": [
            {
                "uri": "homey:device:a1e28c5a-f428-4e5f-b708-ffc13b52b35e",
                "id": "alarm_contact",
                "type": "boolean",
                "title": "Contact alarm",
                "titleTrue": "Contact alarm turned on",
                "titleFalse": "Contact alarm turned off",
                "units": null,
                "decimals": null
            },
            {
                "uri": "homey:device:a1e28c5a-f428-4e5f-b708-ffc13b52b35e",
                "id": "alarm_battery",
                "type": "boolean",
                "title": "Battery alarm",
                "titleTrue": "Battery alarm turned on",
                "titleFalse": "Battery alarm turned off",
                "units": null,
                "decimals": null
            },
            {
                "uri": "homey:device:a1e28c5a-f428-4e5f-b708-ffc13b52b35e",
                "id": "measure_battery",
                "type": "number",
                "title": "Battery",
                "titleTrue": null,
                "titleFalse": null,
                "units": "%"
            }
        ],
        "color": "#dfc120"
    },
    "202bf5d6-9894-4b2d-b8c8-29b0efe30281": {
        "__athom_api_type": "HomeyAPI.ManagerDevices.Device",
        "id": "202bf5d6-9894-4b2d-b8c8-29b0efe30281",
        "name": "Downstairs Nest Protect",
        "driverUri": "homey:app:com.nest",
        "driverId": "nest_protect",
        "zone": "855113f1-f488-4223-b675-2f01270f573e",
        "data": {
            "id": "3sCbDR_50V4Xe9K36NHY8cK7sPFCw0Q3",
            "appVersion": "2.5.4"
        },
        "icon": null,
        "iconObj": {
            "id": "b0a18d0ab05a7f55147d0b71143e3606",
            "url": "/icon/b0a18d0ab05a7f55147d0b71143e3606/icon.svg"
        },
        "settings": {},
        "settingsObj": false,
        "class": "sensor",
        "virtualClass": null,
        "capabilities": [
            "alarm_co",
            "alarm_smoke",
            "alarm_battery"
        ],
        "capabilitiesObj": {
            "alarm_co": {
                "value": false,
                "lastUpdated": "2018-12-19T22:47:37.919Z",
                "type": "boolean",
                "getable": true,
                "setable": false,
                "title": "CO alarm",
                "desc": "True when dangerous CO values have been detected",
                "units": null,
                "id": "alarm_co",
                "options": {
                    "preventInsights": true
                }
            },
            "alarm_smoke": {
                "value": false,
                "lastUpdated": "2018-12-19T22:47:37.921Z",
                "type": "boolean",
                "getable": true,
                "setable": false,
                "title": "Smoke alarm",
                "desc": "True when smoke has been detected",
                "units": null,
                "id": "alarm_smoke",
                "options": {
                    "preventInsights": true
                }
            },
            "alarm_battery": {
                "value": false,
                "lastUpdated": "2018-12-19T22:47:37.917Z",
                "type": "boolean",
                "getable": true,
                "setable": false,
                "title": "Battery alarm",
                "desc": "True when there is a battery warning",
                "units": null,
                "id": "alarm_battery",
                "options": {
                    "preventInsights": true
                }
            }
        },
        "flags": [],
        "ui": {
            "components": [
                {
                    "id": "sensor",
                    "capabilities": [
                        "alarm_co",
                        "alarm_smoke"
                    ]
                },
                {
                    "id": "battery",
                    "capabilities": [
                        "alarm_battery"
                    ]
                }
            ],
            "componentsStartAt": 0
        },
        "ready": true,
        "available": true,
        "repair": false,
        "unpair": false,
        "unavailableMessage": null,
        "speechExamples": [],
        "images": [],
        "insights": [],
        "color": "#df205c"
    },
    "c4dd461c-2481-45a1-bdba-be8d9245974f": {
        "__athom_api_type": "HomeyAPI.ManagerDevices.Device",
        "id": "c4dd461c-2481-45a1-bdba-be8d9245974f",
        "name": "Upstairs Nest Protect",
        "driverUri": "homey:app:com.nest",
        "driverId": "nest_protect",
        "zone": "b840a982-a3a7-4513-9d96-902d81128f5c",
        "data": {
            "id": "3sCbDR_50V6HgARlQqm3gMK7sPFCw0Q3",
            "appVersion": "2.5.4"
        },
        "icon": null,
        "iconObj": {
            "id": "b0a18d0ab05a7f55147d0b71143e3606",
            "url": "/icon/b0a18d0ab05a7f55147d0b71143e3606/icon.svg"
        },
        "settings": {},
        "settingsObj": false,
        "class": "sensor",
        "virtualClass": null,
        "capabilities": [
            "alarm_co",
            "alarm_smoke",
            "alarm_battery"
        ],
        "capabilitiesObj": {
            "alarm_co": {
                "value": false,
                "lastUpdated": "2018-12-19T22:47:37.927Z",
                "type": "boolean",
                "getable": true,
                "setable": false,
                "title": "CO alarm",
                "desc": "True when dangerous CO values have been detected",
                "units": null,
                "id": "alarm_co",
                "options": {
                    "preventInsights": true
                }
            },
            "alarm_smoke": {
                "value": false,
                "lastUpdated": "2018-12-19T22:47:37.929Z",
                "type": "boolean",
                "getable": true,
                "setable": false,
                "title": "Smoke alarm",
                "desc": "True when smoke has been detected",
                "units": null,
                "id": "alarm_smoke",
                "options": {
                    "preventInsights": true
                }
            },
            "alarm_battery": {
                "value": false,
                "lastUpdated": "2018-12-19T22:47:37.924Z",
                "type": "boolean",
                "getable": true,
                "setable": false,
                "title": "Battery alarm",
                "desc": "True when there is a battery warning",
                "units": null,
                "id": "alarm_battery",
                "options": {
                    "preventInsights": true
                }
            }
        },
        "flags": [],
        "ui": {
            "components": [
                {
                    "id": "sensor",
                    "capabilities": [
                        "alarm_co",
                        "alarm_smoke"
                    ]
                },
                {
                    "id": "battery",
                    "capabilities": [
                        "alarm_battery"
                    ]
                }
            ],
            "componentsStartAt": 0
        },
        "ready": true,
        "available": true,
        "repair": false,
        "unpair": false,
        "unavailableMessage": null,
        "speechExamples": [],
        "images": [],
        "insights": [],
        "color": "#df205c"
    },
    "fa509b3b-726f-4d24-b8d7-1a71aeb2ce31": {
        "__athom_api_type": "HomeyAPI.ManagerDevices.Device",
        "id": "fa509b3b-726f-4d24-b8d7-1a71aeb2ce31",
        "name": "Dot",
        "driverUri": "homey:app:com.spotify",
        "driverId": "connect",
        "zone": "1815c884-af06-4d53-a2c1-6f4c77e9eb4e",
        "data": {
            "id": "3dceefe057881d7e2bd69b11c75335ffd7eae0e0"
        },
        "icon": null,
        "iconObj": {
            "id": "4dfb914998d0f6f09bf127c8f03099f0",
            "url": "/icon/4dfb914998d0f6f09bf127c8f03099f0/icon.svg"
        },
        "settings": {},
        "settingsObj": false,
        "class": "speaker",
        "virtualClass": null,
        "capabilities": [
            "speaker_playing",
            "speaker_prev",
            "speaker_next",
            "speaker_shuffle",
            "speaker_repeat",
            "speaker_artist",
            "speaker_album",
            "speaker_track",
            "speaker_duration",
            "speaker_position",
            "volume_set"
        ],
        "capabilitiesObj": {
            "speaker_playing": {
                "value": null,
                "lastUpdated": "2018-12-19T11:19:03.371Z",
                "type": "boolean",
                "getable": true,
                "setable": true,
                "title": "Playing",
                "desc": null,
                "units": null,
                "id": "speaker_playing",
                "options": {}
            },
            "speaker_prev": {
                "value": null,
                "type": "boolean",
                "getable": false,
                "setable": true,
                "title": "Previous",
                "desc": null,
                "units": null,
                "id": "speaker_prev",
                "options": {}
            },
            "speaker_next": {
                "value": null,
                "type": "boolean",
                "getable": false,
                "setable": true,
                "title": "Next",
                "desc": null,
                "units": null,
                "id": "speaker_next",
                "options": {}
            },
            "speaker_shuffle": {
                "value": null,
                "lastUpdated": "2018-12-19T11:19:03.382Z",
                "type": "boolean",
                "getable": true,
                "setable": true,
                "title": "Shuffle",
                "desc": null,
                "units": null,
                "id": "speaker_shuffle",
                "options": {}
            },
            "speaker_repeat": {
                "value": null,
                "lastUpdated": "2018-12-19T11:19:03.385Z",
                "type": "enum",
                "getable": true,
                "setable": true,
                "title": "Repeat",
                "desc": null,
                "units": null,
                "values": [
                    {
                        "id": "none",
                        "title": "Off"
                    },
                    {
                        "id": "track",
                        "title": "Repeat Track"
                    },
                    {
                        "id": "playlist",
                        "title": "Repeat Playlist"
                    }
                ],
                "id": "speaker_repeat",
                "options": {}
            },
            "speaker_artist": {
                "value": null,
                "lastUpdated": "2018-12-19T11:19:03.387Z",
                "type": "string",
                "getable": true,
                "setable": false,
                "title": "Artist",
                "desc": null,
                "units": null,
                "id": "speaker_artist",
                "options": {}
            },
            "speaker_album": {
                "value": null,
                "lastUpdated": "2018-12-19T11:19:03.392Z",
                "type": "string",
                "getable": true,
                "setable": false,
                "title": "Album",
                "desc": null,
                "units": null,
                "id": "speaker_album",
                "options": {}
            },
            "speaker_track": {
                "value": null,
                "lastUpdated": "2018-12-19T11:19:03.390Z",
                "type": "string",
                "getable": true,
                "setable": false,
                "title": "Track",
                "desc": null,
                "units": null,
                "id": "speaker_track",
                "options": {}
            },
            "speaker_duration": {
                "value": null,
                "type": "number",
                "getable": true,
                "setable": false,
                "title": "Duration",
                "desc": null,
                "units": null,
                "id": "speaker_duration",
                "options": {}
            },
            "speaker_position": {
                "value": null,
                "type": "number",
                "getable": true,
                "setable": true,
                "title": "Position",
                "desc": null,
                "units": null,
                "id": "speaker_position",
                "options": {}
            },
            "volume_set": {
                "value": null,
                "lastUpdated": "2018-12-19T11:19:03.374Z",
                "type": "number",
                "getable": true,
                "setable": true,
                "title": "Set volume",
                "desc": "Volume",
                "units": null,
                "decimals": 2,
                "min": 0,
                "max": 1,
                "chartType": "stepLine",
                "id": "volume_set",
                "options": {}
            }
        },
        "flags": [],
        "ui": {
            "quickAction": "speaker_playing",
            "components": [
                {
                    "id": "media",
                    "capabilities": [
                        "speaker_playing",
                        "speaker_prev",
                        "speaker_next",
                        "speaker_shuffle",
                        "speaker_repeat",
                        "speaker_artist",
                        "speaker_album",
                        "speaker_track",
                        "speaker_duration",
                        "speaker_position"
                    ]
                },
                {
                    "id": "slider",
                    "capabilities": [
                        "volume_set"
                    ]
                }
            ],
            "componentsStartAt": 0
        },
        "ready": true,
        "available": true,
        "repair": false,
        "unpair": false,
        "unavailableMessage": null,
        "speechExamples": [
            "Turn the volume of my speaker to 50%"
        ],
        "images": [
            {
                "type": "media",
                "id": "albumart",
                "imageObj": {
                    "__athom_api_type": "HomeyAPI.ManagerImages.Image",
                    "id": "53496a6b-13a4-45d8-b4e1-00cef68bf5ee",
                    "ownerUri": "homey:app:com.spotify",
                    "type": "png",
                    "url": "/image/53496a6b-13a4-45d8-b4e1-00cef68bf5ee/image.png",
                    "lastUpdated": "2018-12-19T11:19:03.524Z"
                }
            }
        ],
        "insights": [],
        "color": "#00D768"
    },
    "ca4a9615-2b9c-4784-a2ad-caac8ccd382d": {
        "__athom_api_type": "HomeyAPI.ManagerDevices.Device",
        "id": "ca4a9615-2b9c-4784-a2ad-caac8ccd382d",
        "name": "Spot",
        "driverUri": "homey:app:com.spotify",
        "driverId": "connect",
        "zone": "ddc3cdaa-8172-4c4a-97c9-22d8ec462972",
        "data": {
            "id": "8137ddde2ac17da8b8cf1cc2ea6262bd898606f5"
        },
        "icon": null,
        "iconObj": {
            "id": "4dfb914998d0f6f09bf127c8f03099f0",
            "url": "/icon/4dfb914998d0f6f09bf127c8f03099f0/icon.svg"
        },
        "settings": {},
        "settingsObj": false,
        "class": "speaker",
        "virtualClass": null,
        "capabilities": [
            "speaker_playing",
            "speaker_prev",
            "speaker_next",
            "speaker_shuffle",
            "speaker_repeat",
            "speaker_artist",
            "speaker_album",
            "speaker_track",
            "speaker_duration",
            "speaker_position",
            "volume_set"
        ],
        "capabilitiesObj": {
            "speaker_playing": {
                "value": null,
                "lastUpdated": "2018-12-19T11:19:03.397Z",
                "type": "boolean",
                "getable": true,
                "setable": true,
                "title": "Playing",
                "desc": null,
                "units": null,
                "id": "speaker_playing",
                "options": {}
            },
            "speaker_prev": {
                "value": null,
                "type": "boolean",
                "getable": false,
                "setable": true,
                "title": "Previous",
                "desc": null,
                "units": null,
                "id": "speaker_prev",
                "options": {}
            },
            "speaker_next": {
                "value": null,
                "type": "boolean",
                "getable": false,
                "setable": true,
                "title": "Next",
                "desc": null,
                "units": null,
                "id": "speaker_next",
                "options": {}
            },
            "speaker_shuffle": {
                "value": null,
                "lastUpdated": "2018-12-19T11:19:03.402Z",
                "type": "boolean",
                "getable": true,
                "setable": true,
                "title": "Shuffle",
                "desc": null,
                "units": null,
                "id": "speaker_shuffle",
                "options": {}
            },
            "speaker_repeat": {
                "value": null,
                "lastUpdated": "2018-12-19T11:19:03.405Z",
                "type": "enum",
                "getable": true,
                "setable": true,
                "title": "Repeat",
                "desc": null,
                "units": null,
                "values": [
                    {
                        "id": "none",
                        "title": "Off"
                    },
                    {
                        "id": "track",
                        "title": "Repeat Track"
                    },
                    {
                        "id": "playlist",
                        "title": "Repeat Playlist"
                    }
                ],
                "id": "speaker_repeat",
                "options": {}
            },
            "speaker_artist": {
                "value": null,
                "lastUpdated": "2018-12-19T11:19:03.409Z",
                "type": "string",
                "getable": true,
                "setable": false,
                "title": "Artist",
                "desc": null,
                "units": null,
                "id": "speaker_artist",
                "options": {}
            },
            "speaker_album": {
                "value": null,
                "lastUpdated": "2018-12-19T11:19:03.416Z",
                "type": "string",
                "getable": true,
                "setable": false,
                "title": "Album",
                "desc": null,
                "units": null,
                "id": "speaker_album",
                "options": {}
            },
            "speaker_track": {
                "value": null,
                "lastUpdated": "2018-12-19T11:19:03.412Z",
                "type": "string",
                "getable": true,
                "setable": false,
                "title": "Track",
                "desc": null,
                "units": null,
                "id": "speaker_track",
                "options": {}
            },
            "speaker_duration": {
                "value": null,
                "type": "number",
                "getable": true,
                "setable": false,
                "title": "Duration",
                "desc": null,
                "units": null,
                "id": "speaker_duration",
                "options": {}
            },
            "speaker_position": {
                "value": null,
                "type": "number",
                "getable": true,
                "setable": true,
                "title": "Position",
                "desc": null,
                "units": null,
                "id": "speaker_position",
                "options": {}
            },
            "volume_set": {
                "value": null,
                "lastUpdated": "2018-12-19T11:19:03.400Z",
                "type": "number",
                "getable": true,
                "setable": true,
                "title": "Set volume",
                "desc": "Volume",
                "units": null,
                "decimals": 2,
                "min": 0,
                "max": 1,
                "chartType": "stepLine",
                "id": "volume_set",
                "options": {}
            }
        },
        "flags": [],
        "ui": {
            "quickAction": "speaker_playing",
            "components": [
                {
                    "id": "media",
                    "capabilities": [
                        "speaker_playing",
                        "speaker_prev",
                        "speaker_next",
                        "speaker_shuffle",
                        "speaker_repeat",
                        "speaker_artist",
                        "speaker_album",
                        "speaker_track",
                        "speaker_duration",
                        "speaker_position"
                    ]
                },
                {
                    "id": "slider",
                    "capabilities": [
                        "volume_set"
                    ]
                }
            ],
            "componentsStartAt": 0
        },
        "ready": true,
        "available": true,
        "repair": false,
        "unpair": false,
        "unavailableMessage": null,
        "speechExamples": [
            "Turn the volume of my speaker to 50%"
        ],
        "images": [
            {
                "type": "media",
                "id": "albumart",
                "imageObj": {
                    "__athom_api_type": "HomeyAPI.ManagerImages.Image",
                    "id": "ef3e27d6-d470-4938-afe6-eb573203fbf9",
                    "ownerUri": "homey:app:com.spotify",
                    "type": "png",
                    "url": "/image/ef3e27d6-d470-4938-afe6-eb573203fbf9/image.png",
                    "lastUpdated": "2018-12-19T11:19:03.524Z"
                }
            }
        ],
        "insights": [],
        "color": "#00D768"
    },
    "87096ddb-490a-42cd-ac1e-f71b0811f311": {
        "__athom_api_type": "HomeyAPI.ManagerDevices.Device",
        "id": "87096ddb-490a-42cd-ac1e-f71b0811f311",
        "name": "Bathroom Echo",
        "driverUri": "homey:app:com.spotify",
        "driverId": "connect",
        "zone": "8a6928ea-26b2-4922-9ead-d20ee6695dd3",
        "data": {
            "id": "fa6e243210e193e9fbc089398e16fd2253273976"
        },
        "icon": null,
        "iconObj": {
            "id": "4dfb914998d0f6f09bf127c8f03099f0",
            "url": "/icon/4dfb914998d0f6f09bf127c8f03099f0/icon.svg"
        },
        "settings": {},
        "settingsObj": false,
        "class": "speaker",
        "virtualClass": null,
        "capabilities": [
            "speaker_playing",
            "speaker_prev",
            "speaker_next",
            "speaker_shuffle",
            "speaker_repeat",
            "speaker_artist",
            "speaker_album",
            "speaker_track",
            "speaker_duration",
            "speaker_position",
            "volume_set"
        ],
        "capabilitiesObj": {
            "speaker_playing": {
                "value": null,
                "lastUpdated": "2018-12-19T11:19:03.426Z",
                "type": "boolean",
                "getable": true,
                "setable": true,
                "title": "Playing",
                "desc": null,
                "units": null,
                "id": "speaker_playing",
                "options": {}
            },
            "speaker_prev": {
                "value": null,
                "type": "boolean",
                "getable": false,
                "setable": true,
                "title": "Previous",
                "desc": null,
                "units": null,
                "id": "speaker_prev",
                "options": {}
            },
            "speaker_next": {
                "value": null,
                "type": "boolean",
                "getable": false,
                "setable": true,
                "title": "Next",
                "desc": null,
                "units": null,
                "id": "speaker_next",
                "options": {}
            },
            "speaker_shuffle": {
                "value": null,
                "lastUpdated": "2018-12-19T11:19:03.431Z",
                "type": "boolean",
                "getable": true,
                "setable": true,
                "title": "Shuffle",
                "desc": null,
                "units": null,
                "id": "speaker_shuffle",
                "options": {}
            },
            "speaker_repeat": {
                "value": null,
                "lastUpdated": "2018-12-19T11:19:03.436Z",
                "type": "enum",
                "getable": true,
                "setable": true,
                "title": "Repeat",
                "desc": null,
                "units": null,
                "values": [
                    {
                        "id": "none",
                        "title": "Off"
                    },
                    {
                        "id": "track",
                        "title": "Repeat Track"
                    },
                    {
                        "id": "playlist",
                        "title": "Repeat Playlist"
                    }
                ],
                "id": "speaker_repeat",
                "options": {}
            },
            "speaker_artist": {
                "value": null,
                "lastUpdated": "2018-12-19T11:19:03.439Z",
                "type": "string",
                "getable": true,
                "setable": false,
                "title": "Artist",
                "desc": null,
                "units": null,
                "id": "speaker_artist",
                "options": {}
            },
            "speaker_album": {
                "value": null,
                "lastUpdated": "2018-12-19T11:19:03.445Z",
                "type": "string",
                "getable": true,
                "setable": false,
                "title": "Album",
                "desc": null,
                "units": null,
                "id": "speaker_album",
                "options": {}
            },
            "speaker_track": {
                "value": null,
                "lastUpdated": "2018-12-19T11:19:03.442Z",
                "type": "string",
                "getable": true,
                "setable": false,
                "title": "Track",
                "desc": null,
                "units": null,
                "id": "speaker_track",
                "options": {}
            },
            "speaker_duration": {
                "value": null,
                "type": "number",
                "getable": true,
                "setable": false,
                "title": "Duration",
                "desc": null,
                "units": null,
                "id": "speaker_duration",
                "options": {}
            },
            "speaker_position": {
                "value": null,
                "type": "number",
                "getable": true,
                "setable": true,
                "title": "Position",
                "desc": null,
                "units": null,
                "id": "speaker_position",
                "options": {}
            },
            "volume_set": {
                "value": null,
                "lastUpdated": "2018-12-19T11:19:03.429Z",
                "type": "number",
                "getable": true,
                "setable": true,
                "title": "Set volume",
                "desc": "Volume",
                "units": null,
                "decimals": 2,
                "min": 0,
                "max": 1,
                "chartType": "stepLine",
                "id": "volume_set",
                "options": {}
            }
        },
        "flags": [],
        "ui": {
            "quickAction": "speaker_playing",
            "components": [
                {
                    "id": "media",
                    "capabilities": [
                        "speaker_playing",
                        "speaker_prev",
                        "speaker_next",
                        "speaker_shuffle",
                        "speaker_repeat",
                        "speaker_artist",
                        "speaker_album",
                        "speaker_track",
                        "speaker_duration",
                        "speaker_position"
                    ]
                },
                {
                    "id": "slider",
                    "capabilities": [
                        "volume_set"
                    ]
                }
            ],
            "componentsStartAt": 0
        },
        "ready": true,
        "available": true,
        "repair": false,
        "unpair": false,
        "unavailableMessage": null,
        "speechExamples": [
            "Turn the volume of my speaker to 50%"
        ],
        "images": [
            {
                "type": "media",
                "id": "albumart",
                "imageObj": {
                    "__athom_api_type": "HomeyAPI.ManagerImages.Image",
                    "id": "ae562099-cc9a-48c8-a449-7c6893aefb84",
                    "ownerUri": "homey:app:com.spotify",
                    "type": "png",
                    "url": "/image/ae562099-cc9a-48c8-a449-7c6893aefb84/image.png",
                    "lastUpdated": "2018-12-19T11:19:03.524Z"
                }
            }
        ],
        "insights": [],
        "color": "#00D768"
    },
    "acc0990f-bf3a-4579-b76f-b1d03344e693": {
        "__athom_api_type": "HomeyAPI.ManagerDevices.Device",
        "id": "acc0990f-bf3a-4579-b76f-b1d03344e693",
        "name": "Echo",
        "driverUri": "homey:app:com.spotify",
        "driverId": "connect",
        "zone": "235c928c-cdaa-4930-a8c6-5a2e44de9d80",
        "data": {
            "id": "2c55199eb6c667fa6eae18e27d0bfcf97fbad944"
        },
        "icon": null,
        "iconObj": {
            "id": "4dfb914998d0f6f09bf127c8f03099f0",
            "url": "/icon/4dfb914998d0f6f09bf127c8f03099f0/icon.svg"
        },
        "settings": {},
        "settingsObj": false,
        "class": "speaker",
        "virtualClass": null,
        "capabilities": [
            "speaker_playing",
            "speaker_prev",
            "speaker_next",
            "speaker_shuffle",
            "speaker_repeat",
            "speaker_artist",
            "speaker_album",
            "speaker_track",
            "speaker_duration",
            "speaker_position",
            "volume_set"
        ],
        "capabilitiesObj": {
            "speaker_playing": {
                "value": null,
                "lastUpdated": "2018-12-19T11:19:03.453Z",
                "type": "boolean",
                "getable": true,
                "setable": true,
                "title": "Playing",
                "desc": null,
                "units": null,
                "id": "speaker_playing",
                "options": {}
            },
            "speaker_prev": {
                "value": null,
                "type": "boolean",
                "getable": false,
                "setable": true,
                "title": "Previous",
                "desc": null,
                "units": null,
                "id": "speaker_prev",
                "options": {}
            },
            "speaker_next": {
                "value": null,
                "type": "boolean",
                "getable": false,
                "setable": true,
                "title": "Next",
                "desc": null,
                "units": null,
                "id": "speaker_next",
                "options": {}
            },
            "speaker_shuffle": {
                "value": null,
                "lastUpdated": "2018-12-19T11:19:03.466Z",
                "type": "boolean",
                "getable": true,
                "setable": true,
                "title": "Shuffle",
                "desc": null,
                "units": null,
                "id": "speaker_shuffle",
                "options": {}
            },
            "speaker_repeat": {
                "value": null,
                "lastUpdated": "2018-12-19T11:19:03.469Z",
                "type": "enum",
                "getable": true,
                "setable": true,
                "title": "Repeat",
                "desc": null,
                "units": null,
                "values": [
                    {
                        "id": "none",
                        "title": "Off"
                    },
                    {
                        "id": "track",
                        "title": "Repeat Track"
                    },
                    {
                        "id": "playlist",
                        "title": "Repeat Playlist"
                    }
                ],
                "id": "speaker_repeat",
                "options": {}
            },
            "speaker_artist": {
                "value": null,
                "lastUpdated": "2018-12-19T11:19:03.472Z",
                "type": "string",
                "getable": true,
                "setable": false,
                "title": "Artist",
                "desc": null,
                "units": null,
                "id": "speaker_artist",
                "options": {}
            },
            "speaker_album": {
                "value": null,
                "lastUpdated": "2018-12-19T11:19:03.477Z",
                "type": "string",
                "getable": true,
                "setable": false,
                "title": "Album",
                "desc": null,
                "units": null,
                "id": "speaker_album",
                "options": {}
            },
            "speaker_track": {
                "value": null,
                "lastUpdated": "2018-12-19T11:19:03.475Z",
                "type": "string",
                "getable": true,
                "setable": false,
                "title": "Track",
                "desc": null,
                "units": null,
                "id": "speaker_track",
                "options": {}
            },
            "speaker_duration": {
                "value": null,
                "type": "number",
                "getable": true,
                "setable": false,
                "title": "Duration",
                "desc": null,
                "units": null,
                "id": "speaker_duration",
                "options": {}
            },
            "speaker_position": {
                "value": null,
                "type": "number",
                "getable": true,
                "setable": true,
                "title": "Position",
                "desc": null,
                "units": null,
                "id": "speaker_position",
                "options": {}
            },
            "volume_set": {
                "value": null,
                "lastUpdated": "2018-12-19T11:19:03.456Z",
                "type": "number",
                "getable": true,
                "setable": true,
                "title": "Set volume",
                "desc": "Volume",
                "units": null,
                "decimals": 2,
                "min": 0,
                "max": 1,
                "chartType": "stepLine",
                "id": "volume_set",
                "options": {}
            }
        },
        "flags": [],
        "ui": {
            "quickAction": "speaker_playing",
            "components": [
                {
                    "id": "media",
                    "capabilities": [
                        "speaker_playing",
                        "speaker_prev",
                        "speaker_next",
                        "speaker_shuffle",
                        "speaker_repeat",
                        "speaker_artist",
                        "speaker_album",
                        "speaker_track",
                        "speaker_duration",
                        "speaker_position"
                    ]
                },
                {
                    "id": "slider",
                    "capabilities": [
                        "volume_set"
                    ]
                }
            ],
            "componentsStartAt": 0
        },
        "ready": true,
        "available": true,
        "repair": false,
        "unpair": false,
        "unavailableMessage": null,
        "speechExamples": [
            "Turn the volume of my speaker to 50%"
        ],
        "images": [
            {
                "type": "media",
                "id": "albumart",
                "imageObj": {
                    "__athom_api_type": "HomeyAPI.ManagerImages.Image",
                    "id": "b89cce47-0d57-40f8-b9a5-492588092245",
                    "ownerUri": "homey:app:com.spotify",
                    "type": "png",
                    "url": "/image/b89cce47-0d57-40f8-b9a5-492588092245/image.png",
                    "lastUpdated": "2018-12-19T11:19:03.524Z"
                }
            }
        ],
        "insights": [],
        "color": "#00D768"
    },
    "54dfa616-587c-4d99-bafa-e79c47d0f81c": {
        "__athom_api_type": "HomeyAPI.ManagerDevices.Device",
        "id": "54dfa616-587c-4d99-bafa-e79c47d0f81c",
        "name": "Amazon FireTV Stick Gen 2 ♕",
        "driverUri": "homey:app:com.spotify",
        "driverId": "connect",
        "zone": "9eb2975d-49ea-4033-8db0-105a3e982117",
        "data": {
            "id": "4a3758a7c36808e7d4385fea9d4c907f8180344a"
        },
        "icon": null,
        "iconObj": {
            "id": "4dfb914998d0f6f09bf127c8f03099f0",
            "url": "/icon/4dfb914998d0f6f09bf127c8f03099f0/icon.svg"
        },
        "settings": {},
        "settingsObj": false,
        "class": "speaker",
        "virtualClass": null,
        "capabilities": [
            "speaker_playing",
            "speaker_prev",
            "speaker_next",
            "speaker_shuffle",
            "speaker_repeat",
            "speaker_artist",
            "speaker_album",
            "speaker_track",
            "speaker_duration",
            "speaker_position",
            "volume_set"
        ],
        "capabilitiesObj": {
            "speaker_playing": {
                "value": null,
                "lastUpdated": "2018-12-19T11:19:03.489Z",
                "type": "boolean",
                "getable": true,
                "setable": true,
                "title": "Playing",
                "desc": null,
                "units": null,
                "id": "speaker_playing",
                "options": {}
            },
            "speaker_prev": {
                "value": null,
                "type": "boolean",
                "getable": false,
                "setable": true,
                "title": "Previous",
                "desc": null,
                "units": null,
                "id": "speaker_prev",
                "options": {}
            },
            "speaker_next": {
                "value": null,
                "type": "boolean",
                "getable": false,
                "setable": true,
                "title": "Next",
                "desc": null,
                "units": null,
                "id": "speaker_next",
                "options": {}
            },
            "speaker_shuffle": {
                "value": null,
                "lastUpdated": "2018-12-19T11:19:03.494Z",
                "type": "boolean",
                "getable": true,
                "setable": true,
                "title": "Shuffle",
                "desc": null,
                "units": null,
                "id": "speaker_shuffle",
                "options": {}
            },
            "speaker_repeat": {
                "value": null,
                "lastUpdated": "2018-12-19T11:19:03.497Z",
                "type": "enum",
                "getable": true,
                "setable": true,
                "title": "Repeat",
                "desc": null,
                "units": null,
                "values": [
                    {
                        "id": "none",
                        "title": "Off"
                    },
                    {
                        "id": "track",
                        "title": "Repeat Track"
                    },
                    {
                        "id": "playlist",
                        "title": "Repeat Playlist"
                    }
                ],
                "id": "speaker_repeat",
                "options": {}
            },
            "speaker_artist": {
                "value": null,
                "lastUpdated": "2018-12-19T11:19:03.499Z",
                "type": "string",
                "getable": true,
                "setable": false,
                "title": "Artist",
                "desc": null,
                "units": null,
                "id": "speaker_artist",
                "options": {}
            },
            "speaker_album": {
                "value": null,
                "lastUpdated": "2018-12-19T11:19:03.505Z",
                "type": "string",
                "getable": true,
                "setable": false,
                "title": "Album",
                "desc": null,
                "units": null,
                "id": "speaker_album",
                "options": {}
            },
            "speaker_track": {
                "value": null,
                "lastUpdated": "2018-12-19T11:19:03.502Z",
                "type": "string",
                "getable": true,
                "setable": false,
                "title": "Track",
                "desc": null,
                "units": null,
                "id": "speaker_track",
                "options": {}
            },
            "speaker_duration": {
                "value": null,
                "type": "number",
                "getable": true,
                "setable": false,
                "title": "Duration",
                "desc": null,
                "units": null,
                "id": "speaker_duration",
                "options": {}
            },
            "speaker_position": {
                "value": null,
                "type": "number",
                "getable": true,
                "setable": true,
                "title": "Position",
                "desc": null,
                "units": null,
                "id": "speaker_position",
                "options": {}
            },
            "volume_set": {
                "value": null,
                "lastUpdated": "2018-12-19T11:19:03.492Z",
                "type": "number",
                "getable": true,
                "setable": true,
                "title": "Set volume",
                "desc": "Volume",
                "units": null,
                "decimals": 2,
                "min": 0,
                "max": 1,
                "chartType": "stepLine",
                "id": "volume_set",
                "options": {}
            }
        },
        "flags": [],
        "ui": {
            "quickAction": "speaker_playing",
            "components": [
                {
                    "id": "media",
                    "capabilities": [
                        "speaker_playing",
                        "speaker_prev",
                        "speaker_next",
                        "speaker_shuffle",
                        "speaker_repeat",
                        "speaker_artist",
                        "speaker_album",
                        "speaker_track",
                        "speaker_duration",
                        "speaker_position"
                    ]
                },
                {
                    "id": "slider",
                    "capabilities": [
                        "volume_set"
                    ]
                }
            ],
            "componentsStartAt": 0
        },
        "ready": true,
        "available": true,
        "repair": false,
        "unpair": false,
        "unavailableMessage": null,
        "speechExamples": [
            "Turn the volume of my speaker to 50%"
        ],
        "images": [
            {
                "type": "media",
                "id": "albumart",
                "imageObj": {
                    "__athom_api_type": "HomeyAPI.ManagerImages.Image",
                    "id": "0f298771-1407-49ea-b721-25efe76d0137",
                    "ownerUri": "homey:app:com.spotify",
                    "type": "png",
                    "url": "/image/0f298771-1407-49ea-b721-25efe76d0137/image.png",
                    "lastUpdated": "2018-12-19T11:19:03.524Z"
                }
            }
        ],
        "insights": [],
        "color": "#00D768"
    },
    "3c13cbc2-b05a-4053-83aa-b24eedc36871": {
        "__athom_api_type": "HomeyAPI.ManagerDevices.Device",
        "id": "3c13cbc2-b05a-4053-83aa-b24eedc36871",
        "name": "Everywhere",
        "driverUri": "homey:app:com.spotify",
        "driverId": "connect",
        "zone": "9919ee1e-ffbc-480b-bc4b-77fb047e9e68",
        "data": {
            "id": "53d8f9e7de091861b0b5a20c67987aadd3f229a7"
        },
        "icon": null,
        "iconObj": {
            "id": "4dfb914998d0f6f09bf127c8f03099f0",
            "url": "/icon/4dfb914998d0f6f09bf127c8f03099f0/icon.svg"
        },
        "settings": {},
        "settingsObj": false,
        "class": "speaker",
        "virtualClass": null,
        "capabilities": [
            "speaker_playing",
            "speaker_prev",
            "speaker_next",
            "speaker_shuffle",
            "speaker_repeat",
            "speaker_artist",
            "speaker_album",
            "speaker_track",
            "speaker_duration",
            "speaker_position",
            "volume_set"
        ],
        "capabilitiesObj": {
            "speaker_playing": {
                "value": null,
                "lastUpdated": "2018-12-19T11:19:03.525Z",
                "type": "boolean",
                "getable": true,
                "setable": true,
                "title": "Playing",
                "desc": null,
                "units": null,
                "id": "speaker_playing",
                "options": {}
            },
            "speaker_prev": {
                "value": null,
                "type": "boolean",
                "getable": false,
                "setable": true,
                "title": "Previous",
                "desc": null,
                "units": null,
                "id": "speaker_prev",
                "options": {}
            },
            "speaker_next": {
                "value": null,
                "type": "boolean",
                "getable": false,
                "setable": true,
                "title": "Next",
                "desc": null,
                "units": null,
                "id": "speaker_next",
                "options": {}
            },
            "speaker_shuffle": {
                "value": null,
                "lastUpdated": "2018-12-19T11:19:03.526Z",
                "type": "boolean",
                "getable": true,
                "setable": true,
                "title": "Shuffle",
                "desc": null,
                "units": null,
                "id": "speaker_shuffle",
                "options": {}
            },
            "speaker_repeat": {
                "value": null,
                "lastUpdated": "2018-12-19T11:19:03.526Z",
                "type": "enum",
                "getable": true,
                "setable": true,
                "title": "Repeat",
                "desc": null,
                "units": null,
                "values": [
                    {
                        "id": "none",
                        "title": "Off"
                    },
                    {
                        "id": "track",
                        "title": "Repeat Track"
                    },
                    {
                        "id": "playlist",
                        "title": "Repeat Playlist"
                    }
                ],
                "id": "speaker_repeat",
                "options": {}
            },
            "speaker_artist": {
                "value": null,
                "lastUpdated": "2018-12-19T11:19:03.527Z",
                "type": "string",
                "getable": true,
                "setable": false,
                "title": "Artist",
                "desc": null,
                "units": null,
                "id": "speaker_artist",
                "options": {}
            },
            "speaker_album": {
                "value": null,
                "lastUpdated": "2018-12-19T11:19:03.541Z",
                "type": "string",
                "getable": true,
                "setable": false,
                "title": "Album",
                "desc": null,
                "units": null,
                "id": "speaker_album",
                "options": {}
            },
            "speaker_track": {
                "value": null,
                "lastUpdated": "2018-12-19T11:19:03.540Z",
                "type": "string",
                "getable": true,
                "setable": false,
                "title": "Track",
                "desc": null,
                "units": null,
                "id": "speaker_track",
                "options": {}
            },
            "speaker_duration": {
                "value": null,
                "type": "number",
                "getable": true,
                "setable": false,
                "title": "Duration",
                "desc": null,
                "units": null,
                "id": "speaker_duration",
                "options": {}
            },
            "speaker_position": {
                "value": null,
                "type": "number",
                "getable": true,
                "setable": true,
                "title": "Position",
                "desc": null,
                "units": null,
                "id": "speaker_position",
                "options": {}
            },
            "volume_set": {
                "value": null,
                "lastUpdated": "2018-12-19T11:19:03.525Z",
                "type": "number",
                "getable": true,
                "setable": true,
                "title": "Set volume",
                "desc": "Volume",
                "units": null,
                "decimals": 2,
                "min": 0,
                "max": 1,
                "chartType": "stepLine",
                "id": "volume_set",
                "options": {}
            }
        },
        "flags": [],
        "ui": {
            "quickAction": "speaker_playing",
            "components": [
                {
                    "id": "media",
                    "capabilities": [
                        "speaker_playing",
                        "speaker_prev",
                        "speaker_next",
                        "speaker_shuffle",
                        "speaker_repeat",
                        "speaker_artist",
                        "speaker_album",
                        "speaker_track",
                        "speaker_duration",
                        "speaker_position"
                    ]
                },
                {
                    "id": "slider",
                    "capabilities": [
                        "volume_set"
                    ]
                }
            ],
            "componentsStartAt": 0
        },
        "ready": true,
        "available": true,
        "repair": false,
        "unpair": false,
        "unavailableMessage": null,
        "speechExamples": [
            "Turn the volume of my speaker to 50%"
        ],
        "images": [
            {
                "type": "media",
                "id": "albumart",
                "imageObj": {
                    "__athom_api_type": "HomeyAPI.ManagerImages.Image",
                    "id": "3b55d0b3-220d-4d2f-ab28-ed5d561a03e6",
                    "ownerUri": "homey:app:com.spotify",
                    "type": "png",
                    "url": "/image/3b55d0b3-220d-4d2f-ab28-ed5d561a03e6/image.png",
                    "lastUpdated": "2018-12-19T11:19:03.524Z"
                }
            }
        ],
        "insights": [],
        "color": "#00D768"
    },
    "8beb2eb7-d7a7-4498-9809-81ad4017e0f4": {
        "__athom_api_type": "HomeyAPI.ManagerDevices.Device",
        "id": "8beb2eb7-d7a7-4498-9809-81ad4017e0f4",
        "name": "Stairs Light",
        "driverUri": "homey:app:com.fibaro",
        "driverId": "FGS-223",
        "zone": "bf3cf5ab-044b-4124-8421-5c3d189f6004",
        "data": {
            "token": "179b6acc-02bd-41cc-b68e-c04535800ccb"
        },
        "icon": "/icon.svg",
        "iconObj": {
            "id": "6ae912856e64e1d2f4e5c7cd850cb618",
            "url": "/icon/6ae912856e64e1d2f4e5c7cd850cb618/icon.svg"
        },
        "settings": {
            "save_state": true,
            "switch_type": "2",
            "s1_power_report": 20,
            "s1_power_report_interval": 10,
            "s1_kwh_report": 1,
            "s2_power_report": 20,
            "s2_power_report_interval": 10,
            "s2_kwh_report": 1,
            "power_report_interval": 3600,
            "energie_report_interval": 3600,
            "own_power": false,
            "zw_node_id": "8",
            "zw_manufacturer_id": "271",
            "zw_product_type_id": "515",
            "zw_product_id": "12288",
            "zw_secure": "manager.vdevice.drivers.zwavebasic.devicesettings.yes_true",
            "zw_battery": "manager.vdevice.drivers.zwavebasic.devicesettings.yes_false",
            "zw_device_class_basic": "BASIC_TYPE_ROUTING_SLAVE",
            "zw_device_class_generic": "GENERIC_TYPE_SWITCH_BINARY",
            "zw_device_class_specific": "SPECIFIC_TYPE_POWER_SWITCH_BINARY",
            "zw_firmware_id": "563",
            "zw_wakeup_interval": 0,
            "zw_group_1": "1",
            "zw_group_2": "",
            "zw_group_3": "",
            "zw_group_4": "",
            "zw_group_5": "",
            "zw_configuration_value": ""
        },
        "settingsObj": true,
        "class": "socket",
        "virtualClass": "light",
        "capabilities": [
            "onoff",
            "measure_power",
            "meter_power",
            "double_switch_2_custom_capability"
        ],
        "capabilitiesObj": {
            "onoff": {
                "value": false,
                "lastUpdated": "2018-12-19T15:09:44.479Z",
                "type": "boolean",
                "getable": true,
                "setable": true,
                "title": "Turned on",
                "desc": null,
                "units": null,
                "id": "onoff",
                "options": {}
            },
            "measure_power": {
                "value": 0,
                "lastUpdated": "2018-12-20T02:09:44.318Z",
                "type": "number",
                "getable": true,
                "setable": false,
                "title": "Power",
                "desc": "Power in Watt (W)",
                "units": "W",
                "decimals": 2,
                "chartType": "stepLine",
                "id": "measure_power",
                "options": {}
            },
            "meter_power": {
                "value": 26.14,
                "lastUpdated": "2018-12-20T02:15:57.318Z",
                "type": "number",
                "getable": true,
                "setable": false,
                "title": "Power Meter",
                "desc": "Power usage in KiloWattHour (kWh)",
                "units": "KWh",
                "decimals": 2,
                "chartType": "spline",
                "id": "meter_power",
                "options": {}
            }
        },
        "flags": [
            "zwave"
        ],
        "ui": {},
        "ready": true,
        "available": true,
        "repair": false,
        "unpair": true,
        "speechExamples": [
            "Turn all lights on",
            "Turn off all devices",
            "Toggle all lights"
        ],
        "images": [],
        "insights": [
            {
                "uri": "homey:device:8beb2eb7-d7a7-4498-9809-81ad4017e0f4",
                "id": "onoff",
                "type": "boolean",
                "title": "Turned on",
                "titleTrue": "Turned on",
                "titleFalse": "Turned off",
                "units": null,
                "decimals": null
            },
            {
                "uri": "homey:device:8beb2eb7-d7a7-4498-9809-81ad4017e0f4",
                "id": "measure_power",
                "type": "number",
                "title": "Power",
                "titleTrue": null,
                "titleFalse": null,
                "units": "W"
            },
            {
                "uri": "homey:device:8beb2eb7-d7a7-4498-9809-81ad4017e0f4",
                "id": "meter_power",
                "type": "number",
                "title": "Power Meter",
                "titleTrue": null,
                "titleFalse": null,
                "units": "KWh"
            }
        ],
        "color": "#000000"
    },
    "7204b6e6-12a2-412c-9b08-b75469ca35cb": {
        "__athom_api_type": "HomeyAPI.ManagerDevices.Device",
        "id": "7204b6e6-12a2-412c-9b08-b75469ca35cb",
        "name": "Backyard Light",
        "driverUri": "homey:app:com.fibaro",
        "driverId": "FGS-223",
        "zone": "5204dc44-8e9c-49e7-aed8-9d5c93330126",
        "data": {
            "token": "82f6f3b4-afbf-40bd-9e82-3e2029eed9f8"
        },
        "icon": "/icon.svg",
        "iconObj": {
            "id": "6ae912856e64e1d2f4e5c7cd850cb618",
            "url": "/icon/6ae912856e64e1d2f4e5c7cd850cb618/icon.svg"
        },
        "settings": {
            "save_state": true,
            "switch_type": "2",
            "s1_power_report": 20,
            "s1_power_report_interval": 10,
            "s1_kwh_report": 1,
            "s2_power_report": 20,
            "s2_power_report_interval": 10,
            "s2_kwh_report": 1,
            "power_report_interval": 3600,
            "energie_report_interval": 3600,
            "own_power": false,
            "zw_node_id": "5",
            "zw_manufacturer_id": "271",
            "zw_product_type_id": "515",
            "zw_product_id": "12288",
            "zw_secure": "manager.vdevice.drivers.zwavebasic.devicesettings.yes_true",
            "zw_battery": "manager.vdevice.drivers.zwavebasic.devicesettings.yes_false",
            "zw_device_class_basic": "BASIC_TYPE_ROUTING_SLAVE",
            "zw_device_class_generic": "GENERIC_TYPE_SWITCH_BINARY",
            "zw_device_class_specific": "SPECIFIC_TYPE_POWER_SWITCH_BINARY",
            "zw_firmware_id": "563",
            "zw_wakeup_interval": 0,
            "zw_group_1": "1",
            "zw_group_2": "",
            "zw_group_3": "",
            "zw_group_4": "",
            "zw_group_5": "",
            "zw_configuration_value": ""
        },
        "settingsObj": true,
        "class": "socket",
        "virtualClass": "light",
        "capabilities": [
            "onoff",
            "measure_power",
            "meter_power",
            "double_switch_2_custom_capability"
        ],
        "capabilitiesObj": {
            "onoff": {
                "value": false,
                "lastUpdated": "2018-12-19T12:37:55.400Z",
                "type": "boolean",
                "getable": true,
                "setable": true,
                "title": "Turned on",
                "desc": null,
                "units": null,
                "id": "onoff",
                "options": {}
            },
            "measure_power": {
                "value": 0,
                "lastUpdated": "2018-12-20T01:37:20.846Z",
                "type": "number",
                "getable": true,
                "setable": false,
                "title": "Power",
                "desc": "Power in Watt (W)",
                "units": "W",
                "decimals": 2,
                "chartType": "stepLine",
                "id": "measure_power",
                "options": {}
            },
            "meter_power": {
                "value": 8.82,
                "lastUpdated": "2018-12-20T02:03:56.859Z",
                "type": "number",
                "getable": true,
                "setable": false,
                "title": "Power Meter",
                "desc": "Power usage in KiloWattHour (kWh)",
                "units": "KWh",
                "decimals": 2,
                "chartType": "spline",
                "id": "meter_power",
                "options": {}
            }
        },
        "flags": [
            "zwave"
        ],
        "ui": {},
        "ready": true,
        "available": true,
        "repair": false,
        "unpair": true,
        "speechExamples": [
            "Turn all lights on",
            "Turn off all devices",
            "Toggle all lights"
        ],
        "images": [],
        "insights": [
            {
                "uri": "homey:device:7204b6e6-12a2-412c-9b08-b75469ca35cb",
                "id": "measure_power",
                "type": "number",
                "title": "Power",
                "titleTrue": null,
                "titleFalse": null,
                "units": "W"
            },
            {
                "uri": "homey:device:7204b6e6-12a2-412c-9b08-b75469ca35cb",
                "id": "meter_power",
                "type": "number",
                "title": "Power Meter",
                "titleTrue": null,
                "titleFalse": null,
                "units": "KWh"
            },
            {
                "uri": "homey:device:7204b6e6-12a2-412c-9b08-b75469ca35cb",
                "id": "onoff",
                "type": "boolean",
                "title": "Turned on",
                "titleTrue": "Turned on",
                "titleFalse": "Turned off",
                "units": null,
                "decimals": null
            }
        ],
        "color": "#000000"
    },
    "b31d2a41-fb13-49c6-9148-ed7d42a9c192": {
        "__athom_api_type": "HomeyAPI.ManagerDevices.Device",
        "id": "b31d2a41-fb13-49c6-9148-ed7d42a9c192",
        "name": "Hallway Light",
        "driverUri": "homey:app:com.fibaro",
        "driverId": "FGS-223",
        "zone": "37782dac-6d40-40a2-a0a4-17a0dd05003a",
        "data": {
            "token": "acb0f2a0-97b2-40e7-810b-38124ff3f5e8",
            "multiChannelNodeId": "2"
        },
        "icon": "/icon.svg",
        "iconObj": {
            "id": "6ae912856e64e1d2f4e5c7cd850cb618",
            "url": "/icon/6ae912856e64e1d2f4e5c7cd850cb618/icon.svg"
        },
        "settings": {
            "save_state": true,
            "switch_type": "2",
            "s1_power_report": 20,
            "s1_power_report_interval": 10,
            "s1_kwh_report": 1,
            "s2_power_report": 20,
            "s2_power_report_interval": 10,
            "s2_kwh_report": 1,
            "power_report_interval": 3600,
            "energie_report_interval": 3600,
            "own_power": false,
            "zw_node_id": "8.2",
            "zw_device_class_generic": "GENERIC_TYPE_SWITCH_BINARY",
            "zw_device_class_specific": "SPECIFIC_TYPE_POWER_SWITCH_BINARY"
        },
        "settingsObj": true,
        "class": "socket",
        "virtualClass": "light",
        "capabilities": [
            "onoff",
            "measure_power",
            "meter_power"
        ],
        "capabilitiesObj": {
            "onoff": {
                "value": true,
                "lastUpdated": "2018-12-19T11:18:56.380Z",
                "type": "boolean",
                "getable": true,
                "setable": true,
                "title": "Turned on",
                "desc": null,
                "units": null,
                "id": "onoff",
                "options": {}
            },
            "measure_power": {
                "value": 0,
                "lastUpdated": "2018-12-12T12:05:44.135Z",
                "type": "number",
                "getable": true,
                "setable": false,
                "title": "Power",
                "desc": "Power in Watt (W)",
                "units": "W",
                "decimals": 2,
                "chartType": "stepLine",
                "id": "measure_power",
                "options": {}
            },
            "meter_power": {
                "value": 2.65,
                "lastUpdated": "2018-12-19T11:19:15.411Z",
                "type": "number",
                "getable": true,
                "setable": false,
                "title": "Power Meter",
                "desc": "Power usage in KiloWattHour (kWh)",
                "units": "KWh",
                "decimals": 2,
                "chartType": "spline",
                "id": "meter_power",
                "options": {}
            }
        },
        "flags": [
            "zwave",
            "zwaveMultiChannel"
        ],
        "ui": {
            "quickAction": "onoff",
            "components": [
                {
                    "id": "toggle",
                    "capabilities": [
                        "onoff"
                    ]
                },
                {
                    "id": "sensor",
                    "capabilities": [
                        "measure_power",
                        "meter_power"
                    ]
                }
            ],
            "componentsStartAt": 1
        },
        "ready": true,
        "available": true,
        "repair": false,
        "unpair": true,
        "speechExamples": [
            "Turn all lights on",
            "Turn off all devices",
            "Toggle all lights"
        ],
        "images": [],
        "insights": [
            {
                "uri": "homey:device:b31d2a41-fb13-49c6-9148-ed7d42a9c192",
                "id": "onoff",
                "type": "boolean",
                "title": "Turned on",
                "titleTrue": "Turned on",
                "titleFalse": "Turned off",
                "units": null,
                "decimals": null
            },
            {
                "uri": "homey:device:b31d2a41-fb13-49c6-9148-ed7d42a9c192",
                "id": "measure_power",
                "type": "number",
                "title": "Power",
                "titleTrue": null,
                "titleFalse": null,
                "units": "W"
            },
            {
                "uri": "homey:device:b31d2a41-fb13-49c6-9148-ed7d42a9c192",
                "id": "meter_power",
                "type": "number",
                "title": "Power Meter",
                "titleTrue": null,
                "titleFalse": null,
                "units": "KWh"
            }
        ],
        "color": "#000000"
    },
    "ffdcc5b1-aae1-4fa4-8f84-b09a15bf94f7": {
        "__athom_api_type": "HomeyAPI.ManagerDevices.Device",
        "id": "ffdcc5b1-aae1-4fa4-8f84-b09a15bf94f7",
        "name": "Kitchen Bench Light",
        "driverUri": "homey:app:com.fibaro",
        "driverId": "FGS-223",
        "zone": "2ab5a003-0120-4c01-80f2-a237dcf4ba14",
        "data": {
            "token": "537fe0a7-e842-4ddc-88fb-cc59a98b9aab",
            "multiChannelNodeId": "2"
        },
        "icon": "/icon.svg",
        "iconObj": {
            "id": "6ae912856e64e1d2f4e5c7cd850cb618",
            "url": "/icon/6ae912856e64e1d2f4e5c7cd850cb618/icon.svg"
        },
        "settings": {
            "save_state": true,
            "switch_type": "2",
            "s1_power_report": 20,
            "s1_power_report_interval": 10,
            "s1_kwh_report": 1,
            "s2_power_report": 20,
            "s2_power_report_interval": 10,
            "s2_kwh_report": 1,
            "power_report_interval": 3600,
            "energie_report_interval": 3600,
            "own_power": false,
            "zw_node_id": "13.2",
            "zw_device_class_generic": "GENERIC_TYPE_SWITCH_BINARY",
            "zw_device_class_specific": "SPECIFIC_TYPE_POWER_SWITCH_BINARY"
        },
        "settingsObj": true,
        "class": "socket",
        "virtualClass": "light",
        "capabilities": [
            "onoff",
            "measure_power",
            "meter_power"
        ],
        "capabilitiesObj": {
            "onoff": {
                "value": false,
                "lastUpdated": "2018-12-19T11:18:48.542Z",
                "type": "boolean",
                "getable": true,
                "setable": true,
                "title": "Turned on",
                "desc": null,
                "units": null,
                "id": "onoff",
                "options": {}
            },
            "measure_power": {
                "value": 0,
                "lastUpdated": "2018-12-19T11:18:56.513Z",
                "type": "number",
                "getable": true,
                "setable": false,
                "title": "Power",
                "desc": "Power in Watt (W)",
                "units": "W",
                "decimals": 2,
                "chartType": "stepLine",
                "id": "measure_power",
                "options": {}
            },
            "meter_power": {
                "value": 10.81,
                "lastUpdated": "2018-12-19T11:19:15.424Z",
                "type": "number",
                "getable": true,
                "setable": false,
                "title": "Power Meter",
                "desc": "Power usage in KiloWattHour (kWh)",
                "units": "KWh",
                "decimals": 2,
                "chartType": "spline",
                "id": "meter_power",
                "options": {}
            }
        },
        "flags": [
            "zwave",
            "zwaveMultiChannel"
        ],
        "ui": {
            "quickAction": "onoff",
            "components": [
                {
                    "id": "toggle",
                    "capabilities": [
                        "onoff"
                    ]
                },
                {
                    "id": "sensor",
                    "capabilities": [
                        "measure_power",
                        "meter_power"
                    ]
                }
            ],
            "componentsStartAt": 1
        },
        "ready": true,
        "available": true,
        "repair": false,
        "unpair": true,
        "speechExamples": [
            "Turn all lights on",
            "Turn off all devices",
            "Toggle all lights"
        ],
        "images": [],
        "insights": [
            {
                "uri": "homey:device:ffdcc5b1-aae1-4fa4-8f84-b09a15bf94f7",
                "id": "onoff",
                "type": "boolean",
                "title": "Turned on",
                "titleTrue": "Turned on",
                "titleFalse": "Turned off",
                "units": null,
                "decimals": null
            },
            {
                "uri": "homey:device:ffdcc5b1-aae1-4fa4-8f84-b09a15bf94f7",
                "id": "measure_power",
                "type": "number",
                "title": "Power",
                "titleTrue": null,
                "titleFalse": null,
                "units": "W"
            },
            {
                "uri": "homey:device:ffdcc5b1-aae1-4fa4-8f84-b09a15bf94f7",
                "id": "meter_power",
                "type": "number",
                "title": "Power Meter",
                "titleTrue": null,
                "titleFalse": null,
                "units": "KWh"
            }
        ],
        "color": "#000000"
    },
    "4a56cae2-c90b-4c1e-81f8-c2b0208360ef": {
        "__athom_api_type": "HomeyAPI.ManagerDevices.Device",
        "id": "4a56cae2-c90b-4c1e-81f8-c2b0208360ef",
        "name": "Mirror Lights",
        "driverUri": "homey:app:com.fibaro",
        "driverId": "FGS-223",
        "zone": "8a6928ea-26b2-4922-9ead-d20ee6695dd3",
        "data": {
            "token": "3ea92fb2-00b9-4023-ae49-f7264a36a3aa",
            "multiChannelNodeId": "2"
        },
        "icon": "/icon.svg",
        "iconObj": {
            "id": "6ae912856e64e1d2f4e5c7cd850cb618",
            "url": "/icon/6ae912856e64e1d2f4e5c7cd850cb618/icon.svg"
        },
        "settings": {
            "save_state": true,
            "switch_type": "2",
            "s1_power_report": 20,
            "s1_power_report_interval": 10,
            "s1_kwh_report": 1,
            "s2_power_report": 20,
            "s2_power_report_interval": 10,
            "s2_kwh_report": 1,
            "power_report_interval": 3600,
            "energie_report_interval": 3600,
            "own_power": false,
            "zw_node_id": "12.2",
            "zw_device_class_generic": "GENERIC_TYPE_SWITCH_BINARY",
            "zw_device_class_specific": "SPECIFIC_TYPE_POWER_SWITCH_BINARY"
        },
        "settingsObj": true,
        "class": "socket",
        "virtualClass": "light",
        "capabilities": [
            "onoff",
            "measure_power",
            "meter_power"
        ],
        "capabilitiesObj": {
            "onoff": {
                "value": true,
                "lastUpdated": "2018-12-19T11:18:51.022Z",
                "type": "boolean",
                "getable": true,
                "setable": true,
                "title": "Turned on",
                "desc": null,
                "units": null,
                "id": "onoff",
                "options": {}
            },
            "measure_power": {
                "value": 0,
                "lastUpdated": "2018-12-17T14:39:14.786Z",
                "type": "number",
                "getable": true,
                "setable": false,
                "title": "Power",
                "desc": "Power in Watt (W)",
                "units": "W",
                "decimals": 2,
                "chartType": "stepLine",
                "id": "measure_power",
                "options": {}
            },
            "meter_power": {
                "value": 38.21,
                "lastUpdated": "2018-12-19T11:19:17.262Z",
                "type": "number",
                "getable": true,
                "setable": false,
                "title": "Power Meter",
                "desc": "Power usage in KiloWattHour (kWh)",
                "units": "KWh",
                "decimals": 2,
                "chartType": "spline",
                "id": "meter_power",
                "options": {}
            }
        },
        "flags": [
            "zwave",
            "zwaveMultiChannel"
        ],
        "ui": {
            "quickAction": "onoff",
            "components": [
                {
                    "id": "toggle",
                    "capabilities": [
                        "onoff"
                    ]
                },
                {
                    "id": "sensor",
                    "capabilities": [
                        "measure_power",
                        "meter_power"
                    ]
                }
            ],
            "componentsStartAt": 1
        },
        "ready": true,
        "available": true,
        "repair": false,
        "unpair": true,
        "speechExamples": [
            "Turn all lights on",
            "Turn off all devices",
            "Toggle all lights"
        ],
        "images": [],
        "insights": [
            {
                "uri": "homey:device:4a56cae2-c90b-4c1e-81f8-c2b0208360ef",
                "id": "onoff",
                "type": "boolean",
                "title": "Turned on",
                "titleTrue": "Turned on",
                "titleFalse": "Turned off",
                "units": null,
                "decimals": null
            },
            {
                "uri": "homey:device:4a56cae2-c90b-4c1e-81f8-c2b0208360ef",
                "id": "measure_power",
                "type": "number",
                "title": "Power",
                "titleTrue": null,
                "titleFalse": null,
                "units": "W"
            },
            {
                "uri": "homey:device:4a56cae2-c90b-4c1e-81f8-c2b0208360ef",
                "id": "meter_power",
                "type": "number",
                "title": "Power Meter",
                "titleTrue": null,
                "titleFalse": null,
                "units": "KWh"
            }
        ],
        "color": "#000000"
    },
    "a5afc7bc-633e-47fc-9839-8ba90d74da08": {
        "__athom_api_type": "HomeyAPI.ManagerDevices.Device",
        "id": "a5afc7bc-633e-47fc-9839-8ba90d74da08",
        "name": "Garden Lights",
        "driverUri": "homey:app:com.fibaro",
        "driverId": "FGS-223",
        "zone": "5204dc44-8e9c-49e7-aed8-9d5c93330126",
        "data": {
            "token": "47a521c3-8ef6-4557-be39-300a260e0ec7",
            "multiChannelNodeId": "2"
        },
        "icon": "/icon.svg",
        "iconObj": {
            "id": "6ae912856e64e1d2f4e5c7cd850cb618",
            "url": "/icon/6ae912856e64e1d2f4e5c7cd850cb618/icon.svg"
        },
        "settings": {
            "save_state": true,
            "switch_type": "2",
            "s1_power_report": 20,
            "s1_power_report_interval": 10,
            "s1_kwh_report": 1,
            "s2_power_report": 20,
            "s2_power_report_interval": 10,
            "s2_kwh_report": 1,
            "power_report_interval": 3600,
            "energie_report_interval": 3600,
            "own_power": false,
            "zw_node_id": "5.2",
            "zw_device_class_generic": "GENERIC_TYPE_SWITCH_BINARY",
            "zw_device_class_specific": "SPECIFIC_TYPE_POWER_SWITCH_BINARY"
        },
        "settingsObj": true,
        "class": "socket",
        "virtualClass": "light",
        "capabilities": [
            "onoff",
            "measure_power",
            "meter_power"
        ],
        "capabilitiesObj": {
            "onoff": {
                "value": false,
                "lastUpdated": "2018-12-16T14:13:13.477Z",
                "type": "boolean",
                "getable": true,
                "setable": true,
                "title": "Turned on",
                "desc": null,
                "units": null,
                "id": "onoff",
                "options": {}
            },
            "measure_power": {
                "value": 0,
                "lastUpdated": "2018-12-12T12:05:44.328Z",
                "type": "number",
                "getable": true,
                "setable": false,
                "title": "Power",
                "desc": "Power in Watt (W)",
                "units": "W",
                "decimals": 2,
                "chartType": "stepLine",
                "id": "measure_power",
                "options": {}
            },
            "meter_power": {
                "value": 20.73,
                "lastUpdated": "2018-12-17T14:39:22.661Z",
                "type": "number",
                "getable": true,
                "setable": false,
                "title": "Power Meter",
                "desc": "Power usage in KiloWattHour (kWh)",
                "units": "KWh",
                "decimals": 2,
                "chartType": "spline",
                "id": "meter_power",
                "options": {}
            }
        },
        "flags": [
            "zwave",
            "zwaveMultiChannel"
        ],
        "ui": {
            "quickAction": "onoff",
            "components": [
                {
                    "id": "toggle",
                    "capabilities": [
                        "onoff"
                    ]
                },
                {
                    "id": "sensor",
                    "capabilities": [
                        "measure_power",
                        "meter_power"
                    ]
                }
            ],
            "componentsStartAt": 1
        },
        "ready": true,
        "available": true,
        "repair": false,
        "unpair": true,
        "speechExamples": [
            "Turn all lights on",
            "Turn off all devices",
            "Toggle all lights"
        ],
        "images": [],
        "insights": [
            {
                "uri": "homey:device:a5afc7bc-633e-47fc-9839-8ba90d74da08",
                "id": "onoff",
                "type": "boolean",
                "title": "Turned on",
                "titleTrue": "Turned on",
                "titleFalse": "Turned off",
                "units": null,
                "decimals": null
            },
            {
                "uri": "homey:device:a5afc7bc-633e-47fc-9839-8ba90d74da08",
                "id": "measure_power",
                "type": "number",
                "title": "Power",
                "titleTrue": null,
                "titleFalse": null,
                "units": "W"
            },
            {
                "uri": "homey:device:a5afc7bc-633e-47fc-9839-8ba90d74da08",
                "id": "meter_power",
                "type": "number",
                "title": "Power Meter",
                "titleTrue": null,
                "titleFalse": null,
                "units": "KWh"
            }
        ],
        "color": "#000000"
    },
    "c1edb414-0f72-47ee-8197-3229efafcb53": {
        "__athom_api_type": "HomeyAPI.ManagerDevices.Device",
        "id": "c1edb414-0f72-47ee-8197-3229efafcb53",
        "name": "Entrance Light",
        "driverUri": "homey:app:com.fibaro",
        "driverId": "FGS-223",
        "zone": "478cfd92-6475-4214-80d9-27125e39863a",
        "data": {
            "token": "79acf3ad-c182-49ec-8b50-d144cf8eb2f9"
        },
        "icon": "/icon.svg",
        "iconObj": {
            "id": "6ae912856e64e1d2f4e5c7cd850cb618",
            "url": "/icon/6ae912856e64e1d2f4e5c7cd850cb618/icon.svg"
        },
        "settings": {
            "save_state": true,
            "switch_type": "2",
            "s1_power_report": 20,
            "s1_power_report_interval": 10,
            "s1_kwh_report": 1,
            "s2_power_report": 20,
            "s2_power_report_interval": 10,
            "s2_kwh_report": 1,
            "power_report_interval": 3600,
            "energie_report_interval": 3600,
            "own_power": false,
            "zw_node_id": "7",
            "zw_manufacturer_id": "271",
            "zw_product_type_id": "515",
            "zw_product_id": "12288",
            "zw_secure": "manager.vdevice.drivers.zwavebasic.devicesettings.yes_true",
            "zw_battery": "manager.vdevice.drivers.zwavebasic.devicesettings.yes_false",
            "zw_device_class_basic": "BASIC_TYPE_ROUTING_SLAVE",
            "zw_device_class_generic": "GENERIC_TYPE_SWITCH_BINARY",
            "zw_device_class_specific": "SPECIFIC_TYPE_POWER_SWITCH_BINARY",
            "zw_firmware_id": "563",
            "zw_wakeup_interval": 0,
            "zw_group_1": "1",
            "zw_group_2": "",
            "zw_group_3": "",
            "zw_group_4": "",
            "zw_group_5": "",
            "zw_configuration_value": ""
        },
        "settingsObj": true,
        "class": "socket",
        "virtualClass": "light",
        "capabilities": [
            "onoff",
            "measure_power",
            "meter_power",
            "double_switch_2_custom_capability"
        ],
        "capabilitiesObj": {
            "onoff": {
                "value": true,
                "lastUpdated": "2018-12-19T12:27:14.974Z",
                "type": "boolean",
                "getable": true,
                "setable": true,
                "title": "Turned on",
                "desc": null,
                "units": null,
                "id": "onoff",
                "options": {}
            },
            "measure_power": {
                "value": 50.4,
                "lastUpdated": "2018-12-20T01:27:17.290Z",
                "type": "number",
                "getable": true,
                "setable": false,
                "title": "Power",
                "desc": "Power in Watt (W)",
                "units": "W",
                "decimals": 2,
                "chartType": "stepLine",
                "id": "measure_power",
                "options": {}
            },
            "meter_power": {
                "value": 26.17,
                "lastUpdated": "2018-12-20T02:16:15.292Z",
                "type": "number",
                "getable": true,
                "setable": false,
                "title": "Power Meter",
                "desc": "Power usage in KiloWattHour (kWh)",
                "units": "KWh",
                "decimals": 2,
                "chartType": "spline",
                "id": "meter_power",
                "options": {}
            }
        },
        "flags": [
            "zwave"
        ],
        "ui": {},
        "ready": true,
        "available": true,
        "repair": false,
        "unpair": true,
        "speechExamples": [
            "Turn all lights on",
            "Turn off all devices",
            "Toggle all lights"
        ],
        "images": [],
        "insights": [
            {
                "uri": "homey:device:c1edb414-0f72-47ee-8197-3229efafcb53",
                "id": "onoff",
                "type": "boolean",
                "title": "Turned on",
                "titleTrue": "Turned on",
                "titleFalse": "Turned off",
                "units": null,
                "decimals": null
            },
            {
                "uri": "homey:device:c1edb414-0f72-47ee-8197-3229efafcb53",
                "id": "measure_power",
                "type": "number",
                "title": "Power",
                "titleTrue": null,
                "titleFalse": null,
                "units": "W"
            },
            {
                "uri": "homey:device:c1edb414-0f72-47ee-8197-3229efafcb53",
                "id": "meter_power",
                "type": "number",
                "title": "Power Meter",
                "titleTrue": null,
                "titleFalse": null,
                "units": "KWh"
            }
        ],
        "color": "#000000"
    },
    "3afe7078-1b3a-4116-b14b-03dd4a127e87": {
        "__athom_api_type": "HomeyAPI.ManagerDevices.Device",
        "id": "3afe7078-1b3a-4116-b14b-03dd4a127e87",
        "name": "Bathroom Fan",
        "driverUri": "homey:app:com.fibaro",
        "driverId": "FGS-223",
        "zone": "8a6928ea-26b2-4922-9ead-d20ee6695dd3",
        "data": {
            "token": "b2bdb51f-126e-4790-b7c6-41513f056bf7"
        },
        "icon": "/icon.svg",
        "iconObj": {
            "id": "6ae912856e64e1d2f4e5c7cd850cb618",
            "url": "/icon/6ae912856e64e1d2f4e5c7cd850cb618/icon.svg"
        },
        "settings": {
            "save_state": true,
            "switch_type": "2",
            "s1_power_report": 20,
            "s1_power_report_interval": 10,
            "s1_kwh_report": 1,
            "s2_power_report": 20,
            "s2_power_report_interval": 10,
            "s2_kwh_report": 1,
            "power_report_interval": 3600,
            "energie_report_interval": 3600,
            "own_power": false,
            "zw_node_id": "12",
            "zw_manufacturer_id": "271",
            "zw_product_type_id": "515",
            "zw_product_id": "12288",
            "zw_secure": "manager.vdevice.drivers.zwavebasic.devicesettings.yes_true",
            "zw_battery": "manager.vdevice.drivers.zwavebasic.devicesettings.yes_false",
            "zw_device_class_basic": "BASIC_TYPE_ROUTING_SLAVE",
            "zw_device_class_generic": "GENERIC_TYPE_SWITCH_BINARY",
            "zw_device_class_specific": "SPECIFIC_TYPE_POWER_SWITCH_BINARY",
            "zw_firmware_id": "563",
            "zw_wakeup_interval": 0,
            "zw_group_1": "1",
            "zw_group_2": "",
            "zw_group_3": "",
            "zw_group_4": "",
            "zw_group_5": "",
            "zw_configuration_value": ""
        },
        "settingsObj": true,
        "class": "socket",
        "virtualClass": "light",
        "capabilities": [
            "onoff",
            "measure_power",
            "meter_power",
            "double_switch_2_custom_capability"
        ],
        "capabilitiesObj": {
            "onoff": {
                "value": false,
                "lastUpdated": "2018-12-19T19:58:32.588Z",
                "type": "boolean",
                "getable": true,
                "setable": true,
                "title": "Turned on",
                "desc": null,
                "units": null,
                "id": "onoff",
                "options": {}
            },
            "measure_power": {
                "value": 0,
                "lastUpdated": "2018-12-20T02:23:55.490Z",
                "type": "number",
                "getable": true,
                "setable": false,
                "title": "Power",
                "desc": "Power in Watt (W)",
                "units": "W",
                "decimals": 2,
                "chartType": "stepLine",
                "id": "measure_power",
                "options": {}
            },
            "meter_power": {
                "value": 2.29,
                "lastUpdated": "2018-12-20T02:17:30.493Z",
                "type": "number",
                "getable": true,
                "setable": false,
                "title": "Power Meter",
                "desc": "Power usage in KiloWattHour (kWh)",
                "units": "KWh",
                "decimals": 2,
                "chartType": "spline",
                "id": "meter_power",
                "options": {}
            }
        },
        "flags": [
            "zwave"
        ],
        "ui": {},
        "ready": true,
        "available": true,
        "repair": false,
        "unpair": true,
        "speechExamples": [
            "Turn all lights on",
            "Turn off all devices",
            "Toggle all lights"
        ],
        "images": [],
        "insights": [
            {
                "uri": "homey:device:3afe7078-1b3a-4116-b14b-03dd4a127e87",
                "id": "onoff",
                "type": "boolean",
                "title": "Turned on",
                "titleTrue": "Turned on",
                "titleFalse": "Turned off",
                "units": null,
                "decimals": null
            },
            {
                "uri": "homey:device:3afe7078-1b3a-4116-b14b-03dd4a127e87",
                "id": "measure_power",
                "type": "number",
                "title": "Power",
                "titleTrue": null,
                "titleFalse": null,
                "units": "W"
            },
            {
                "uri": "homey:device:3afe7078-1b3a-4116-b14b-03dd4a127e87",
                "id": "meter_power",
                "type": "number",
                "title": "Power Meter",
                "titleTrue": null,
                "titleFalse": null,
                "units": "KWh"
            }
        ],
        "color": "#000000"
    },
    "8f970bbf-99cd-44de-8e39-6d790be53331": {
        "__athom_api_type": "HomeyAPI.ManagerDevices.Device",
        "id": "8f970bbf-99cd-44de-8e39-6d790be53331",
        "name": "Kitchen Light",
        "driverUri": "homey:app:com.fibaro",
        "driverId": "FGS-223",
        "zone": "2ab5a003-0120-4c01-80f2-a237dcf4ba14",
        "data": {
            "token": "c45d1613-5e57-4a87-8350-a25d2cdd2095"
        },
        "icon": "/icon.svg",
        "iconObj": {
            "id": "6ae912856e64e1d2f4e5c7cd850cb618",
            "url": "/icon/6ae912856e64e1d2f4e5c7cd850cb618/icon.svg"
        },
        "settings": {
            "save_state": true,
            "switch_type": "2",
            "s1_power_report": 20,
            "s1_power_report_interval": 10,
            "s1_kwh_report": 1,
            "s2_power_report": 20,
            "s2_power_report_interval": 10,
            "s2_kwh_report": 1,
            "power_report_interval": 3600,
            "energie_report_interval": 3600,
            "own_power": false,
            "zw_node_id": "13",
            "zw_manufacturer_id": "271",
            "zw_product_type_id": "515",
            "zw_product_id": "12288",
            "zw_secure": "manager.vdevice.drivers.zwavebasic.devicesettings.yes_true",
            "zw_battery": "manager.vdevice.drivers.zwavebasic.devicesettings.yes_false",
            "zw_device_class_basic": "BASIC_TYPE_ROUTING_SLAVE",
            "zw_device_class_generic": "GENERIC_TYPE_SWITCH_BINARY",
            "zw_device_class_specific": "SPECIFIC_TYPE_POWER_SWITCH_BINARY",
            "zw_firmware_id": "563",
            "zw_wakeup_interval": 0,
            "zw_group_1": "1",
            "zw_group_2": "",
            "zw_group_3": "",
            "zw_group_4": "",
            "zw_group_5": "",
            "zw_configuration_value": ""
        },
        "settingsObj": true,
        "class": "socket",
        "virtualClass": "light",
        "capabilities": [
            "onoff",
            "measure_power",
            "meter_power",
            "double_switch_2_custom_capability"
        ],
        "capabilitiesObj": {
            "onoff": {
                "value": true,
                "lastUpdated": "2018-12-19T11:19:13.732Z",
                "type": "boolean",
                "getable": true,
                "setable": true,
                "title": "Turned on",
                "desc": null,
                "units": null,
                "id": "onoff",
                "options": {}
            },
            "measure_power": {
                "value": 9.3,
                "lastUpdated": "2018-12-20T02:06:34.058Z",
                "type": "number",
                "getable": true,
                "setable": false,
                "title": "Power",
                "desc": "Power in Watt (W)",
                "units": "W",
                "decimals": 2,
                "chartType": "stepLine",
                "id": "measure_power",
                "options": {}
            },
            "meter_power": {
                "value": 12.38,
                "lastUpdated": "2018-12-20T01:47:57.052Z",
                "type": "number",
                "getable": true,
                "setable": false,
                "title": "Power Meter",
                "desc": "Power usage in KiloWattHour (kWh)",
                "units": "KWh",
                "decimals": 2,
                "chartType": "spline",
                "id": "meter_power",
                "options": {}
            }
        },
        "flags": [
            "zwave"
        ],
        "ui": {},
        "ready": true,
        "available": true,
        "repair": false,
        "unpair": true,
        "speechExamples": [
            "Turn all lights on",
            "Turn off all devices",
            "Toggle all lights"
        ],
        "images": [],
        "insights": [
            {
                "uri": "homey:device:8f970bbf-99cd-44de-8e39-6d790be53331",
                "id": "onoff",
                "type": "boolean",
                "title": "Turned on",
                "titleTrue": "Turned on",
                "titleFalse": "Turned off",
                "units": null,
                "decimals": null
            },
            {
                "uri": "homey:device:8f970bbf-99cd-44de-8e39-6d790be53331",
                "id": "measure_power",
                "type": "number",
                "title": "Power",
                "titleTrue": null,
                "titleFalse": null,
                "units": "W"
            },
            {
                "uri": "homey:device:8f970bbf-99cd-44de-8e39-6d790be53331",
                "id": "meter_power",
                "type": "number",
                "title": "Power Meter",
                "titleTrue": null,
                "titleFalse": null,
                "units": "KWh"
            }
        ],
        "color": "#000000"
    },
    "8b5fd589-d288-4d9b-a817-744aabfb9f18": {
        "__athom_api_type": "HomeyAPI.ManagerDevices.Device",
        "id": "8b5fd589-d288-4d9b-a817-744aabfb9f18",
        "name": "Light Color",
        "driverUri": "homey:app:com.groups",
        "driverId": "light",
        "zone": "9919ee1e-ffbc-480b-bc4b-77fb047e9e68",
        "data": {
            "id": "km6ks"
        },
        "icon": "../../../assets/icons/categories/light/standard/a_sultan.svg",
        "iconObj": {
            "id": "e0f736f87592e14107d5513673d22abe",
            "url": "/icon/e0f736f87592e14107d5513673d22abe/icon.svg"
        },
        "settings": {
            "capabilities": {
                "onoff": {
                    "method": "any"
                },
                "dim": {
                    "method": "mean"
                },
                "light_hue": {
                    "method": "mean"
                },
                "light_saturation": {
                    "method": "mean"
                },
                "light_temperature": {
                    "method": "mean"
                },
                "light_mode": {
                    "method": "ignore"
                }
            },
            "devices": [
                "977bedd9-9479-49fb-a729-69952a995e98",
                "af674494-61d3-4040-86ac-3b83fd05b877"
            ],
            "labelClass": "Light",
            "labelCapabilities": "Turned on (On if Any), Dim level (Mean Average), Hue (Mean Average), Color Saturation (Mean Average), Color Temperature (Mean Average), Light mode (Ignore Devices)",
            "labelDevices": "Dining Room Lamp, Hue Go",
            "notes": "this is some test notes"
        },
        "settingsObj": true,
        "class": "light",
        "virtualClass": null,
        "capabilities": [
            "onoff",
            "dim",
            "light_hue",
            "light_saturation",
            "light_temperature",
            "light_mode"
        ],
        "capabilitiesObj": {
            "onoff": {
                "value": false,
                "lastUpdated": "2018-12-19T23:51:35.769Z",
                "type": "boolean",
                "getable": true,
                "setable": true,
                "title": "Turned on",
                "desc": null,
                "units": null,
                "id": "onoff",
                "options": {}
            },
            "dim": {
                "value": 0.75,
                "lastUpdated": "2018-12-19T23:51:05.103Z",
                "type": "number",
                "getable": true,
                "setable": true,
                "title": "Dim level",
                "desc": null,
                "units": "%",
                "decimals": 2,
                "min": 0,
                "max": 1,
                "chartType": "stepLine",
                "id": "dim",
                "options": {}
            },
            "light_hue": {
                "value": 0.38,
                "lastUpdated": "2018-12-19T23:13:51.508Z",
                "type": "number",
                "getable": true,
                "setable": true,
                "title": "Hue",
                "desc": null,
                "units": null,
                "decimals": 2,
                "min": 0,
                "max": 1,
                "chartType": "stepLine",
                "id": "light_hue",
                "options": {}
            },
            "light_saturation": {
                "value": 0.43,
                "lastUpdated": "2018-12-19T23:13:51.520Z",
                "type": "number",
                "getable": true,
                "setable": true,
                "title": "Color Saturation",
                "desc": null,
                "units": null,
                "decimals": 2,
                "min": 0,
                "max": 1,
                "chartType": "stepLine",
                "id": "light_saturation",
                "options": {}
            },
            "light_temperature": {
                "value": 0.32,
                "lastUpdated": "2018-12-19T23:13:51.534Z",
                "type": "number",
                "getable": true,
                "setable": true,
                "title": "Color Temperature",
                "desc": null,
                "units": null,
                "decimals": 2,
                "min": 0,
                "max": 1,
                "chartType": "stepLine",
                "id": "light_temperature",
                "options": {}
            },
            "light_mode": {
                "value": null,
                "type": "enum",
                "getable": true,
                "setable": true,
                "title": "Light mode",
                "desc": "Switch between Color or Temperature mode",
                "units": null,
                "values": [
                    {
                        "id": "color",
                        "title": "Color"
                    },
                    {
                        "id": "temperature",
                        "title": "Temperature"
                    }
                ],
                "id": "light_mode",
                "options": {}
            }
        },
        "flags": [],
        "ui": {
            "quickAction": "onoff",
            "components": [
                {
                    "id": "toggle",
                    "capabilities": [
                        "onoff"
                    ]
                },
                {
                    "id": "slider",
                    "capabilities": [
                        "dim"
                    ]
                },
                {
                    "id": "color",
                    "capabilities": [
                        "light_hue",
                        "light_saturation",
                        "light_temperature",
                        "light_mode"
                    ]
                }
            ],
            "componentsStartAt": 1
        },
        "ready": true,
        "available": true,
        "repair": false,
        "unpair": false,
        "unavailableMessage": null,
        "speechExamples": [
            "Turn all lights on",
            "Turn off all devices",
            "Toggle all lights",
            "Dim all lights to 50%",
            "Set My Light to full brightness",
            "Turn all lights to blue",
            "Turn My Light to pink",
            "Turn all lights to warm white",
            "Turn My Light to cool white"
        ],
        "images": [],
        "insights": [
            {
                "uri": "homey:device:8b5fd589-d288-4d9b-a817-744aabfb9f18",
                "id": "onoff",
                "type": "boolean",
                "title": "Turned on",
                "titleTrue": "Turned on",
                "titleFalse": "Turned off",
                "units": null,
                "decimals": null
            }
        ],
        "color": "#000000"
    },
    "70d2cb52-5c2e-44ba-9d4a-f19a6896a262": {
        "__athom_api_type": "HomeyAPI.ManagerDevices.Device",
        "id": "70d2cb52-5c2e-44ba-9d4a-f19a6896a262",
        "name": "Relay",
        "driverUri": "homey:app:com.swttt.devicegroups",
        "driverId": "relay",
        "zone": "9919ee1e-ffbc-480b-bc4b-77fb047e9e68",
        "data": {
            "id": "2v02x"
        },
        "icon": "../../../assets/icons/categories/relay/standard.svg",
        "iconObj": {
            "id": "0121f082f518e515daf177b58dacbbfc",
            "url": "/icon/0121f082f518e515daf177b58dacbbfc/icon.svg"
        },
        "settings": {
            "capabilities": {},
            "devices": {},
            "labelClass": "Relay",
            "labelCapabilities": "",
            "labelDevices": "",
            "notes": ""
        },
        "settingsObj": true,
        "class": "relay",
        "capabilities": [],
        "capabilitiesObj": {},
        "flags": [],
        "ui": {},
        "ready": true,
        "available": true,
        "repair": false,
        "unpair": false,
        "unavailableMessage": null,
        "speechExamples": [],
        "images": [],
        "insights": [],
        "color": "#000000"
    },
    "ef92f2d0-8abb-4dbe-a978-29b904c409d3": {
        "__athom_api_type": "HomeyAPI.ManagerDevices.Device",
        "id": "ef92f2d0-8abb-4dbe-a978-29b904c409d3",
        "name": "Wall Plug",
        "driverUri": "homey:app:com.groups",
        "driverId": "socket",
        "zone": "9919ee1e-ffbc-480b-bc4b-77fb047e9e68",
        "data": {
            "id": "8qgw4"
        },
        "icon": "../../..//assets/icon.svg",
        "iconObj": {
            "id": "2390bd1595542dfaca78eab0bb6a37c5",
            "url": "/icon/2390bd1595542dfaca78eab0bb6a37c5/icon.svg"
        },
        "settings": {
            "capabilities": {
                "onoff": {
                    "method": "any"
                }
            },
            "devices": [
                "8beb2eb7-d7a7-4498-9809-81ad4017e0f4"
            ],
            "labelClass": "Wall Plug",
            "labelCapabilities": "Turned on (On if Any)",
            "labelDevices": "Stairs Light",
            "notes": ""
        },
        "settingsObj": true,
        "class": "socket",
        "capabilities": [
            "onoff"
        ],
        "capabilitiesObj": {
            "onoff": {
                "value": false,
                "lastUpdated": "2018-12-19T23:13:51.311Z",
                "type": "boolean",
                "getable": true,
                "setable": true,
                "title": "Turned on",
                "desc": null,
                "units": null,
                "id": "onoff",
                "options": {}
            }
        },
        "flags": [],
        "ui": {
            "quickAction": "onoff",
            "components": [
                {
                    "id": "toggle",
                    "capabilities": [
                        "onoff"
                    ]
                }
            ],
            "componentsStartAt": 0
        },
        "ready": true,
        "available": true,
        "repair": false,
        "unpair": false,
        "unavailableMessage": null,
        "speechExamples": [
            "Turn all lights on",
            "Turn off all devices",
            "Toggle all lights"
        ],
        "images": [],
        "insights": [
            {
                "uri": "homey:device:ef92f2d0-8abb-4dbe-a978-29b904c409d3",
                "id": "onoff",
                "type": "boolean",
                "title": "Turned on",
                "titleTrue": "Turned on",
                "titleFalse": "Turned off",
                "units": null,
                "decimals": null
            }
        ],
        "color": "#000000"
    }

}

let locale = {
    "_": {
        "Device Groups Editor": "Device Groups Editor",
        "Edit your device groups": "Edit your device groups",
        "Device Group Name": "Device Group Name",
        "Device Class": "Device Class",
        "Capabilities": "Capabilities",
        "Devices in group": "Devices in group",
        "Select device group": "Select device group",
        "Group": "Group"
    },
    "category": {
        "amplifier": {
            "title": "Amplifier",
            "description": "audio amplifier devices."
        },
        "blinds": {
            "title": "Blinds",
            "description": "blinds, both horizontal and vertical."
        },
        "button": {
            "title": "Button",
            "description": "buttons, and other items which do not have a state."
        },
        "coffeemachine": {
            "title": "Coffee machine",
            "description": "coffee machines."
        },
        "curtain": {
            "title": "Curtains",
            "description": "curtains."
        },
        "doorbell": {
            "title": "Doorbell",
            "description": "doorbells, usually together with the `button` capability."
        },
        "fan": {
            "title": "Fan",
            "description": "fans that cool your home."
        },
        "garagedoor": {
            "title": "Garage door",
            "description": "garage doors as well as other automatic doors and gates."
        },
        "heater": {
            "title": "Heater",
            "description": "heaters and other devices which warm your home."
        },
        "homealarm": {
            "title": "Home Security",
            "description": "home alarm systems."
        },
        "homeenergymonitor": {
            "title": "Home Energy Monitor",
            "description": "Devices that monitor a house's energy usage."
        },
        "kettle": {
            "title": "Kettle",
            "description": "Kettles and other devices that can heat water."
        },
        "light": {
            "title": "Light",
            "description": "an illuminating agent or source, lights, globes, lamps, etc."
        },
        "lock": {
            "title": "Lock",
            "description": "devices with locks."
        },
        "other": {
            "title": "Other",
            "description": "devices that do not fit any other device class."
        },
        "relay": {
            "title": "Relay",
            "description": "relays, which are connected to another device."
        },
        "remote": {
            "title": "Remote",
            "description": "TV, Sunblind, Keyfob, etc. remote controls."
        },
        "sensor": {
            "title": "Sensor",
            "description": "sensors, e.g. a contact or motion sensor. As well as alarms!"
        },
        "socket": {
            "title": "Wall Plug",
            "description": "wall plugs and sockets."
        },
        "speaker": {
            "title": "Speaker",
            "description": "devices that can play audio, such as music."
        },
        "sunshade": {
            "title": "Sunshade",
            "description": "sunshades (window coverings against the sun)."
        },
        "thermostat": {
            "title": "Thermostat",
            "description": "thermostats, either for the entire home or radiator-mounted."
        },
        "tv": {
            "title": "TV",
            "description": "TV/televisions."
        },
        "vacuumcleaner": {
            "title": "Vacuum Cleaner",
            "description": "vacuum cleaners."
        },
        "windowcoverings": {
            "title": "Window Coverings",
            "description": "window coverings, when the `curtains`, `blinds` or `sunshade` device class doesn't apply."
        }
    },
    "capability": {
        "onoff": {
            "title": "Turned on",
            "description": "Whether a device is on or off."
        },
        "dim": {
            "title": "Dim level",
            "description": "Dims level of a device as a percentage of its full value"
        },
        "light_hue": {
            "title": "Hue",
            "description": "The colour of the light"
        },
        "light_saturation": {
            "title": "Color Saturation",
            "description": "The colour intensity"
        },
        "light_temperature": {
            "title": "Color Temperature",
            "description": "The white light temperature warm to cold as a decimal"
        },
        "light_mode": {
            "title": "Light mode",
            "description": "Switch between Color or Temperature mode"
        },
        "vacuumcleaner_state": {
            "title": "Vacuum cleaner state",
            "description": "The state of a a vacuum cleaner, either it is cleaning, spot cleaning, docked, charging or stopped"
        },
        "thermostat_mode": {
            "title": "Thermostat mode",
            "description": "Mode of the thermostat, either it is set to auto, heat, cool or off."
        },
        "target_temperature": {
            "title": "Target temperature",
            "description": "Set the temperature which a device should target"
        },
        "measure_temperature": {
            "title": "measure_temperature",
            "description": "NONE"
        },
        "measure_co": {
            "title": "measure_co",
            "description": "NONE"
        },
        "measure_co2": {
            "title": "measure_co2",
            "description": "NONE"
        },
        "measure_pm25": {
            "title": "measure_pm25",
            "description": "NONE"
        },
        "measure_humidity": {
            "title": "measure_humidity",
            "description": "NONE"
        },
        "measure_pressure": {
            "title": "measure_pressure",
            "description": "NONE"
        },
        "measure_noise": {
            "title": "measure_noise",
            "description": "NONE"
        },
        "measure_rain": {
            "title": "measure_rain",
            "description": "NONE"
        },
        "measure_wind_strength": {
            "title": "measure_wind_strength",
            "description": "NONE"
        },
        "measure_wind_angle": {
            "title": "measure_wind_angle",
            "description": "NONE"
        },
        "measure_gust_strength": {
            "title": "measure_gust_strength",
            "description": "NONE"
        },
        "measure_gust_angle": {
            "title": "measure_gust_angle",
            "description": "NONE"
        },
        "measure_battery": {
            "title": "measure_battery",
            "description": "NONE"
        },
        "measure_power": {
            "title": "measure_power",
            "description": "NONE"
        },
        "measure_voltage": {
            "title": "measure_voltage",
            "description": "NONE"
        },
        "measure_current": {
            "title": "measure_current",
            "description": "NONE"
        },
        "measure_luminance": {
            "title": "measure_luminance",
            "description": "NONE"
        },
        "measure_ultraviolet": {
            "title": "measure_ultraviolet",
            "description": "NONE"
        },
        "measure_water": {
            "title": "measure_water",
            "description": "NONE"
        },
        "alarm_generic": {
            "title": "alarm_generic",
            "description": "NONE"
        },
        "alarm_motion": {
            "title": "alarm_motion",
            "description": "NONE"
        },
        "alarm_contact": {
            "title": "alarm_contact",
            "description": "NONE"
        },
        "alarm_co": {
            "title": "alarm_co",
            "description": "NONE"
        },
        "alarm_co2": {
            "title": "alarm_co2",
            "description": "NONE"
        },
        "alarm_pm25": {
            "title": "alarm_pm25",
            "description": "NONE"
        },
        "alarm_tamper": {
            "title": "alarm_tamper",
            "description": "NONE"
        },
        "alarm_smoke": {
            "title": "alarm_smoke",
            "description": "NONE"
        },
        "alarm_fire": {
            "title": "alarm_fire",
            "description": "NONE"
        },
        "alarm_heat": {
            "title": "alarm_heat",
            "description": "NONE"
        },
        "alarm_water": {
            "title": "alarm_water",
            "description": "NONE"
        },
        "alarm_battery": {
            "title": "alarm_battery",
            "description": "NONE"
        },
        "alarm_night": {
            "title": "alarm_night",
            "description": "NONE"
        },
        "meter_power": {
            "title": "Power Meter",
            "description": "Power usage in kilowatt hour (kWh)"
        },
        "meter_water": {
            "title": "Water Meter",
            "description": "Water usage in Cubic Meter (m³)"
        },
        "meter_gas": {
            "title": "Gas Meter",
            "description": "Gas usage in Cubic Meter (m³)"
        },
        "meter_rain": {
            "title": "Rain Meter",
            "description": "Rain in Cubic Meter (m³)"
        },
        "homealarm_state": {
            "title": "Home Alarm state",
            "description": "Switch between armed, disarmed and partially armed"
        },
        "volume_set": {
            "title": "Set Volume",
            "description": "Set volume to"
        },
        "volume_up": {
            "title": "Volume up",
            "description": "Turn the volume up"
        },
        "volume_down": {
            "title": "Volume down",
            "description": "Turn the volume down"
        },
        "volume_mute": {
            "title": "Volume muted",
            "description": "Mute the volume"
        },
        "channel_up": {
            "title": "Channel up",
            "description": "Change the channel up one"
        },
        "channel_down": {
            "title": "Channel down",
            "description": "Change the channel down one"
        },
        "locked": {
            "title": "Locked",
            "description": "True when the lock is locked"
        },
        "lock_mode": {
            "title": "Lock mode",
            "description": "Switch between Always locked, always unlocked and locked until unlocked modes"
        },
        "windowcoverings_state": {
            "title": "windowcoverings_state",
            "description": "NONE"
        },
        "windowcoverings_tilt_up": {
            "title": "windowcoverings_tilt_up",
            "description": "NONE"
        },
        "windowcoverings_tilt_down": {
            "title": "windowcoverings_tilt_down",
            "description": "NONE"
        },
        "windowcoverings_tilt_set": {
            "title": "windowcoverings_tilt_set",
            "description": "NONE"
        },
        "windowcoverings_closed": {
            "title": "windowcoverings_closed",
            "description": "NONE"
        },
        "windowcoverings_set": {
            "title": "windowcoverings_set",
            "description": "NONE"
        },
        "button": {
            "title": "button",
            "description": "NONE"
        },
        "speaker_playing": {
            "title": "speaker_playing",
            "description": "NONE"
        },
        "speaker_next": {
            "title": "speaker_next",
            "description": "NONE"
        },
        "speaker_prev": {
            "title": "speaker_prev",
            "description": "NONE"
        },
        "speaker_shuffle": {
            "title": "speaker_shuffle",
            "description": "NONE"
        },
        "speaker_repeat": {
            "title": "speaker_repeat",
            "description": "NONE"
        },
        "speaker_artist": {
            "title": "speaker_artist",
            "description": "NONE"
        },
        "speaker_album": {
            "title": "speaker_album",
            "description": "NONE"
        },
        "speaker_track": {
            "title": "speaker_track",
            "description": "NONE"
        },
        "speaker_duration": {
            "title": "speaker_duration",
            "description": "NONE"
        },
        "speaker_position": {
            "title": "speaker_position",
            "description": "NONE"
        }
    },
    "pair": {
        "capabilities": {
            "title": ""
        }
    },
    "method": {
        "all": {
            "title": "On if all on",
            "brief": "on if all devices are on",
            "description": "On if all devices are on. otherwise off"
        },
        "always": {
            "title": "Always On",
            "brief": "always on",
            "description": "Always returns to on"
        },
        "any": {
            "title": "On if any on",
            "brief": "on if any devices are on",
            "description": "On if any devices are on"
        },
        "highest": {
            "title": "Highest Value",
            "brief": "the highest value",
            "description": "The highest value of the all the grouped device"
        },
        "ignore": {
            "title": "Ignore Devices",
            "brief": "the last value set in the app",
            "description": "Don't update, only use values set by the card"
        },
        "lowest": {
            "title": "Lowest Value",
            "brief": "the lowest value",
            "description": "The lowest value of the all the grouped device"
        },
        "max": {
            "title": "Maximum value",
            "brief": "the highest value",
            "description": "The value of the device with the largest value"
        },
        "mean": {
            "title": "Mean Average",
            "brief": "the average value (mean)",
            "description": "The average your are used to (sum/count)"
        },
        "median": {
            "title": "Median Average",
            "brief": "the middle value (median)",
            "description": "The value of the device in the middle"
        },
        "min": {
            "title": "Minimum Value",
            "brief": "the lowest value",
            "description": "The value of the device with the smallest value"
        },
        "mode": {
            "title": "Mode Average",
            "brief": "the most common value",
            "description": "The value which the most devices has"
        },
        "most": {
            "title": "Most Devices",
            "brief": "most common value",
            "description": "On if at least half devices are on"
        },
        "never": {
            "title": "Never On",
            "brief": "never on",
            "description": "Never on, always returns to off"
        },
        "none": {
            "title": "On unless all on",
            "brief": "on unless all devices on",
            "description": "Off if all devices are on, otherwise on"
        },
        "sum": {
            "title": "Total Value",
            "brief": "the sum of all devices",
            "description": "The sum of all the grouped device values"
        },
        "nor": {
            "title": "On if None on",
            "brief": "on if none no devices are on",
            "description": "On if all devices are off, otherwise off"
        },
        "xor": {
            "title": "On unless all on or off",
            "brief": "on unless all devices are on or all off",
            "description": "Off when all devices are off or all devices are on"
        }
    }
}
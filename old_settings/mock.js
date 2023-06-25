    class App {
        static log() {
        }
    }


    // let locale = {'test': 'a copy of your locale file'};
    // let api = {
    //     'get' : {
    //         '/devices' : [
    //             { id : 'item1',  name : 'Foo Device' },
    //             { id : 'item2',  name : 'Bar Device' },
    //             { id : 'item3', name : 'Blah Device' },
    //         ]
    //     }
    // };

    let api = {
        'GET' : {
            '/devices' : devices,
            '/library' : library
        }
    };

    /**
     * Mock: Homey.App,
     * Homey.__()
     * Homey.alert()
     * Homey.Log()
     *
     * To use : Where data.js contains your locale and api.
     * <script src="data.js"></script>
     * <script src="mock.js"></script>
     * <script>
     * if (typeof Homey === 'undefined') {
     *   onHomeyReady(MockHomey);
     * }
     * </script>
     * @type {{App: App, FlowCardAction: (function(): {registerRunListener: (function(): exports), register: (function(): exports)}), FlowCardTrigger: (function(): {registerRunListener: (function(): exports), register: (function(): exports)}), FlowCardCondition: (function(): {registerRunListener: (function(): exports), register: (function(): exports)})}}
     */
    const MockHomey = {
        App: App,
        ready: () => {},
        __ : (path) => {
            var parts = path.split("."), part;
            let obj = locale;
            while(part = parts.shift()) {
                if( typeof obj[part] != "object") {
                    return obj[part]
                }
                obj = obj[part]; // update "pointer"
            }
            return obj;
        },
        alert : (message) => {
            alert(message);
        },
        log  : (message) => {
            console.log(message);
        },
        api  : (method, endpoint, callback) => {
            setTimeout(() => {
               return callback(null, api[method][endpoint]);
               // return callback(null, [{}]);
            }, 1500);
        }
    };
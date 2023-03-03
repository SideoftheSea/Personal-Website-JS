var U = {
    $: function(id) {
        'use strict';

        if(typeof id == 'string') {
            return document.getElementById(id);
        }
    },

    setText: function (id, msg) {
        'use strict';

        if((typeof id == 'string') && (typeof msg == 'string')) {

            var output = this.$(id);
        
            if (!output) return false;

            if(output.textContent !== undefined) {
                output.textContent = msg;
            } else {
                output.innerText = msg;
            }
            return true;
        }
    },

    addEvent: function(obj, type, fn) {
        'use strict';

        if(obj && obj.addEventListener) {
            obj.addEventListener(type, fn, false);
        } else if(obj && obj.attachEvent) {
            obj.attachEvent('on' + type, fn);
        }
    },

    removeEvent: function(obj, type, fn) {
        'use strict';

        if(obj && obj.removeEventListener) {
            obj.removeEventListener(type, fn, false);
        } else if(obj && obj.detachEvent) {
            obj.detachEvent('on' + type, fn);
        }
    },
};
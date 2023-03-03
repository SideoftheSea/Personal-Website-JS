function updateDuration() {
    'use strict';

    var now = new Date();

    var msg = "It has been " + now.getTime();
    msg += " seconds since the epoch. (mouseover to update)";

    U.setText('output', msg);

}

window.onload = function() {
    'use strict';
    U.addEvent(U.$('output'), 'mouseover', updateDuration);
    updateDuration();
}
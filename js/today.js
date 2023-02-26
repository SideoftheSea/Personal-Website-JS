function setText(elementId, message) {
    'use strict';

    if((typeof elementId == 'string') && (typeof message == 'string')) {
        var output = document.getElementById(elementId);

        if(output.textContent !== undefined) {
            output.textContent = message;
        } else { 
            output.innerText = message;
        }

    }
}

function init() {
    'use strict';

    var today = new Date();
    var msg;
    msg = 'Right now it is ' + today.toLocaleDateString();
    msg += ' Time is ' + today.getHours() + ':' + today.getMinutes();

    setText('output', msg);
    
}

window.onload = init;
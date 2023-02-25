function init() {
    'use strict';

    var today = new Date();
    var msg;
    msg = 'Right now it is ' + today.toLocaleDateString();
    msg += ' Time is ' + today.getHours() + ':' + today.getMinutes();

    var output = document.getElementById('output');

    if(output.textContent !== undefined) {
        output.textContent = msg;
    } else { 
        output.innerText = msg;
    }
}

window.onload = init;
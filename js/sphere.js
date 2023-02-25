function calculate() {
    
    'use strict';

    var radius = document.getElementById('radius');
    var volume;

    if(radius && (radius.value > 0)) {
        volume = (4/3) * Math.PI * Math.pow(radius, 3);
        volume = volume.toFixed(4);
    } else {
        volume = 'Please enter a valid and positive value for the radius!';
    }

    document.getElementById('volume').value = volume;

    return false;
}

function init() {

    'use strict';

    document.getElementById('theForm').onsubmit = calculate;

}

window.onload = init;
function formatNames() {
    'use strict';
    
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;

    var formattedName = lastName + ', ' + firstName;

    document.getElementById('result').value = formattedName;

    return false;
}

function init() {
    'use strict';

    document.getElementById('theForm').onsubmit = formatNames;
}

window.onload = init;
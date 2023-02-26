function $(id) {
    'use strict';

    if(typeof id != 'undefined') {
        return document.getElementById(id);
    }
}

function setText(elementId, msg) {
    'use strict';

    if((typeof elementId == 'string') && (typeof msg == 'string')) {
        var output = $(elementId);
        
        if(output.textContent !== undefined) {
            output.textContent = msg;
        } else {
            output.innerText = msg;
        }
    }
}

function sortWords(max) {
    'use strict';

    var words = $('words').value;
    words = words.split(' ');

    /*var changeToLowerCase(value) {
        return value.toLowerCase();
    }

    var sorted = words.map(changeToLowerCase);

    sorted = sorted.sort();*/

    var sorted = words.map(function(value) {
        return value.toLowerCase();
    }).sort();

    setText('output', sorted.join(', '));

    return false;
}

function init() {
    'use strict';

    $('theForm').onsubmit = sortWords;
}

window.onload = init;
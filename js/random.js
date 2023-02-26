function $(id) {
    'use strict';

    if(typeof id != 'undefined') {
        return document.getElementById(id);
    }
}

function setText(elementId, message) {
    'use strict';

    if((typeof elementId == 'string') && (typeof message == 'string')) {
        var output = $(elementId);

        if(output.textContent !== undefined) {
            output.textContent = message;
        } else { 
            output.innerText = message;
        }

    }
}

function getRandomNumber(max) {
    'use strict';

    var n = Math.random();
    
    if(typeof max == 'number') {
        n *= max;
        n = Math.floor(n);
    }

    return n;
}

function showNumbers() {
    'use strict';

    var numbers = '';

    for(var i = 0; i < 6; i++) {
        numbers += getRandomNumber(100) + ' ';
    }

    setText('output', numbers);

    /*
        declare variable numbers as empty string
        for loop with i initialized as 0 and condition less than 6
            set variable numbers to base 10 integer (parseInt) of random number (Math.random) from 0 to 100 (* 100) 
                and concatenate space after
        display numbers on page
            declare variable output based on ID
        if output.textContent is not undefined type (a defined type)
            set textContent property to numbers
        else
            set innerText property to numbers
    */
}

window.onload = showNumbers;
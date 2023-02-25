function process() {
    'use strict';

    var start = document.getElementById('start');
    var end = document.getElementById('end');
    var output = document.getElementById('output');

    var msg = '';
    var interval = '';
    var day = 1000 * 60 * 60 *  24; // 1000 ms * 60 seconds * 60 minutes * 24 hours = 1 day

    var startDate = new Date(start.value);
    var endDate = new Date(end.value);
        
    if(startDate.getTime() && endDate.getTime()) {
        if(startDate < endDate) {
            var diff = endDate - startDate;
                
            if(diff <= day) {
                interval = '1 day';
            } else {
                interval = Math.round(diff/day) + ' days';
            }

            msg = 'The event has been scheduled starting on ' + startDate.toLocaleDateString();
            msg += ' and ending on ' + endDate.toLocaleDateString();
            msg += ', which is a period of ' + interval + '.';
        } else {
            msg = 'The start date must come before the end date!';
        }
    } else {
        msg = 'Please enter valid start and end dates in the format MM/DD/YYYY!';
    }

    if(output.textContent !== undefined) {
        output.textContent = msg;
    } else {
        output.innerText = msg;
    }

    return false;
}

function init() {
    'use strict';

    document.getElementById('theForm').onsubmit = process;
}

window.onload = init;


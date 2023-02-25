var tasks = [];

function addTask() {
    'use strict';

    var task = document.getElementById('task');
    var output = document.getElementById('output');

    var msg = '';

    if(task.value) {
        tasks[tasks.length] = task;
        
        msg = 'You have ' + tasks.length + ' task(s) in your to-do list.';

        if(output.textContent !== undefined) {
            output.textContent = msg;
        } else {
            output.innerText = msg;
        }
    }

    return false;
}

function init() {
    'use strict';

    document.getElementById('theForm').onsubmit = addTask;
}

window.onload = init;
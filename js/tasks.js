(function() {
    var tasks = [];

    function addTask() {
        'use strict';

        var task = document.getElementById('task');
        var output = document.getElementById('output');

        var msg = '';

        if(task.value) {
            tasks.push(task.value);
            
            msg = '<h2>To-Do</h2><ol>';
            for(var i = 0, count = tasks.length; i < count; i++) {
                msg += '<li>' + tasks[i] + '</li>';
            }
            msg += '</ol>'

            output.innerHTML = msg;
        }

        return false;
    }

    function init() {
        'use strict';

        document.getElementById('theForm').onsubmit = addTask;
    }

    window.onload = init;
})();

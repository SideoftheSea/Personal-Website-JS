function process() {
    'use strict';

    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var department = document.getElementById('department').value;
    
    var output = document.getElementById('output');

    var employee = {
        firstName: firstName,
        lastName: lastName,
        department: department,
        getName: function() {
            return this.lastName + ', ' + this.firstName;
        },
        hireDate: new Date()
    };

    var msg = '<h2>Employee Added</h2>Name: ' + employee.getName() + '<br />';
    msg += 'Department: ' + employee.department + '<br />';
    msg += 'Hire Date: ' + employee.hireDate.toDateString();

    output.innerHTML = msg;

    return false;
}

function init() {
    'use strict';

    document.getElementById('theForm').onsubmit = process;
}

window.onload = init;
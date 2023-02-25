function process() {
    
    'use strict';

    var okay;
    var email = document.getElementById('email');
    var comments = document.getElementById('comments');

    if(!email || !email.value || (email.value.length < 6) || !(email.value.indexOf('@') != -1)) {
        okay = false;
        alert('Please enter a valid email address!');
    }

    if(!comments || !comments.value || (comments.value.indexOf('<') != -1)) {
        okay = false;
        alert('Please enter your comments, without any HTML!');
    }

    return okay;
    
    /*
        variable okay as flag set to true
        retrieve data for variables email and comments based on id
        validate email
            check if email element or value of email doesn't exist or length of email is below 6 or @ is not found in email
            set flag to false
            alert to enter a valid email address
        validate comments
            check if comments element or value of comments exists or < is found in comments
            set flag to false
            alert to enter comments without any HTML
        return value of okay
    */

}

function init() {
    
    'use strict';

    document.getElementById('theForm').onsubmit = process;

}

window.onload = init;
function calculate() {

    'use strict';

    var cost;
    var type = document.getElementById('type');
    var years = document.getElementById('years');

    if(years && years.value) {
        years = parseInt(years.value, 10);
    }

    if(type && type.value && years && (years > 0)) {
        switch (type.value) {
            case 'basic':
                cost = 10.00;
                break;
            case 'premium':
                cost = 15.00;
                break;
            case 'gold':
                cost = 20.00;
                break;
            case 'platinum':
                cost = 25.00;
                break;        
        }

        cost *= years;

        if(years > 1) {
            cost = cost - (cost * 0.20);
        }

        document.getElementById('cost').value = '$' + cost.toFixed(2);
    } else {
        document.getElementById('cost').value = 'Please enter valid values!';
    }

    return false;

    /* 
        variable cost
        variables type, years based on ID 
        validate years variable that it and its value is true
            convert years to number using parseInt base 10
        validate type variable that it and its value is true & years is true & years is greater than 0
            switch through values of type variable
                if basic
                    cost = 10.00
                    break
                if premium
                    cost = 15.00
                    break
                if gold
                    cost = 20.00
                    break
                if platinum
                    cost = 25.00
                    break
            set new value of cost = cost * years
            if years is greater than 1
                set discount (20% if more than 1 year purchased) and new value of cost = cost - (cost * .20)
            display total in the form with $ as prefix and 2 decimal places for cost
        show error to enter valid values if data wasn't valid

    */

}

function init() {

    'use strict';

    document.getElementById('theForm').onsubmit = calculate;

}

window.onload = init;
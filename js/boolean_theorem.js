

function calculate() {

    const pascal = 
    [
        [ 1 ],
        [ 1, 1 ],
        [ 1, 2, 1 ],
        [ 1, 3, 3, 1 ],
        [ 1, 4, 6, 4, 1 ],
        [ 1, 5, 10, 10, 5, 1 ],
        [ 1, 6, 15, 20, 15, 6, 1 ],
        [ 1, 7, 21, 35, 35, 21, 7, 1 ],
        [ 1, 8, 28, 56, 70, 56, 28, 8, 1 ],
        [ 1, 9, 36, 84, 126, 126, 84, 37, 9, 1 ],
        [ 1, 10, 45, 120, 210, 252, 210, 120, 45, 10, 1]
    ];

    var
        x = document.getElementById('x').value,
        y = document.getElementById('y').value,
        k = document.getElementById('k').value,
        i = 0,
        j = k,
        total;

    if(!isNaN(x) && !isNaN(y)) {
        total = 0;
        while(k >= 0) {

            total += pascal[j][i] * Math.pow(x, k) * Math.pow(y, i);
            k--;
            i++;

        }
    
        document.getElementById('total').innerHTML = total.toLocaleString();
    }
    else {
        total = '';
        if(isNaN(x) && isNaN(y)) { // if x and y are strings
            while(k >= 0) {

                if(pascal[j][i] != 1) {
                    total += pascal[j][i] + '';
                }

                if(k > 0) {
                    if(k == 1) total += x + '';
                    else total += x + '^' + k;
                }

                if(i > 0) {
                    if(i == 1) total +=  y + ' +';
                    else total +=  y + '^' + i;
                }
                
                if(i != j) total += ' + ';

                k--;
                i++;
            }
        }
        else if(isNaN(x)) { // if x is a string and y is a number
            while(k >= 0) {
                if(i > 0) {
                    console.log(i);
                    // console.log(y + "\n" + i + "\n" + pascal[j][i] + "\n" + (Math.pow(y, i) * pascal[j][i]));
                    total += '' + (Math.pow(y, i) * pascal[j][i]);
                }

                if(k > 0) {
                    if(k == 1) total += x + '';
                    else total += x + '^' + k;
                }

                if(i != j) total += ' + ';

                k--;
                i++;
            }
        } 
        else { // if y is a string and x is a number
            while(k >= 0) {
                if(k > 0) {
                    total += '' + (Math.pow(x, k) * pascal[j][i]);
                }

                if(i > 0) {
                    if(i == 1) total += y + '';
                    else total += y + '^' + i;
                }

                if(i != j) total += ' + ';

                k--;
                i++;
            }
        }

        document.getElementById('total').innerHTML = total;
        

    }

    return false;
            
}

function init() {
    'use strict';
    
    document.getElementById('theForm').onsubmit = calculate;
}

window.onload = init;
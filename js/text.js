function limitText() {
    
    'use strict';

    var limitedText;
    var originalText = U.$('comments');
    var count = comments.value.length;
    U.$('count').value = count;

    if(count > 100) {
        comments.value = comments.value.slice(0, 100);
    }

    return false;
}

function init() {

    'use strict';

    U.addEvent(U.$('comments'), 'keyup', limitText);

}

window.onload = init;
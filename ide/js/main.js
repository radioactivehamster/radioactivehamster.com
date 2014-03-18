'use strict';

var rhe = new RHE();

// onkeypress is only for character (printable) keys, 
// onkeydown/up is for backspace, etc.
$(document).keyup(function(e) {
    var charCodeActv = rhe.charCodes[e.keyCode];
    if (charCodeActv && ('ku' in charCodeActv)) {
        charCodeActv.ku.fn();
    }
    Rainbow.color($('#ed').text(), 'javascript', 
                  function(cde) {$('#ed').html(cde)});
    $.getJSON('./js/json/js.json', function() {
        //
    });
});

$(document).keypress(function(e) {
    var charCode = (typeof e.which == "number" && e.which !== 0)? e.which 
                                                                : e.keyCode;
    switch(e.keyCode) {
        case 8:
        case 13:
            break;
        default:
            $('#ed').append(String.fromCharCode(charCode));
    }
});

// Get last word...
// document.getElementById('ed').innerText.replace(/[\s-]+$/,'').split(/[\s-]/).pop();



String.prototype.trimr = function() {
 
    var i = this.length - 1;

    // For loops that do not have a loop statement need a semi-colon at the end - BOOM SCIENCE!
    // https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Statements/for
    for (; this[i] === ' '; --i);

    return this.slice(0, ++i);
};

String.prototype.wordGetLast = function() {

    var self = this.trimr(),
        i;

    for(i = self.length - 1; self[i] !== ' '; --i);

    return self.slice(++i);
}
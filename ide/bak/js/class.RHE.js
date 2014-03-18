// Use a self-executing function as a psuedo-class object.
var RHE = (function() {

	'use strict';

	var charCodes,  // Keyboard character codes.
        divEd,      // [div] containing the main code [Ed]itor.
        lnNum;      // [ln] [Num]ber for the main editor.

	// Constructor...
	function RHE() {
		this.divEd = '#editor';
        this.lnNum = 1;
        this.lnHeight = 1;
        var _self = this;
		this.charCodes = {
			8: {  // Backspace
				ku: {  // [k]ey [u]p event.
					fn: function() {
						$(_self.divEd).text($(_self.divEd).text().slice(0, -1));
					}
				}
			},
            13: { // Enter
                ku: {
                    fn: function() {
                        // Increase the code tag by one row programmatically?
                        // ...to deal with the "double enter" newline glitch.
                        // ^ Semi-implemented but super hacky ATM!
                        ++_self.lnHeight;
                        $(_self.divEd).height(_self.lnHeight + 'em')
                                      .append('\n');
                        $('#editor-ln-num').height(_self.lnHeight + 'em')
                                           .append('<br>' + ++_self.lnNum);
                    }
                }
            }
		};
	}

	// RHE.prototype.method = function() {};

	return RHE;

})();
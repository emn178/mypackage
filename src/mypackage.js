(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        // CommonJS
        factory(exports, require('jquery'));
    } else {
        // Browser globals
        factory(root, jQuery);
    }
}(this, function (exports, $) {
	$.fn.mypackage = function() {
		this.text('Hello world.');
	};
}));
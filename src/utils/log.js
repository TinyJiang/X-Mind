define([], function() {
    var _console = {
            debug: true,
            setDebug: function(bool) {
                this.debug = !!bool;
            }
        },
        cpMethods;
    if (console) {
        cpMethods = function(methods, ctDbg) {
            methods.map(function(_n) {
                _console[_n] = (function(n) {
                    return function() {
                        (ctDbg ? _console.debug : true) && console && console[n] && console[n](arguments[0]);
                    }
                })(_n)
            });
        }
        cpMethods(['debug', 'info'], true);
        cpMethods(['warn', 'error'], false);
    }
    return _console;
});
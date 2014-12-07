define([], function() {
    var xm = function(opt) {};
    xm.prototype = {
        constructor: xm
    };
    return xm;
});
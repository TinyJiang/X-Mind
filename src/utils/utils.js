define(['./log'], function(log) {
    var utils = {
        apply: function(obj1, obj2) {
            if (!obj1 || !obj2) {
                throw 'Is not a Object'
            }
            for (var key in obj2) {
                if (obj2.hasOwnProperty(key)) {
                    obj1[key] = obj2[key];
                }
            }
        }
    };
    return utils;
});
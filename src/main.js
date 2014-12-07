define(['./utils/utils', './xm'], function(utils, xm) {
    var defaultCfg = {
        debug: false
    };
    return {
        config: function(cfg) {

        },
        create: function(opt) {
            return new xm(opt);
        }
    }
});
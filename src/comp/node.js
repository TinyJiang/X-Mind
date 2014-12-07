define(['../utils/utils'], function(utils) {
    var _OPT_, _SIDE_, node;
    _SIDE_ = {
        left: 'left',
        right: 'right'
    };
    _OPT_ = {
        parent: null,
        side: _SIDE_.right,
        level: 0,
        text: ''
    };
    node = function(opt) {
        var me = this,
            parent, side, level;
        opt = utils.apply(_OPT_, opt ? opt : {});
        parent = opt.parent;
        level = parent ? (parent.level + 1) : 0;
        side = level > 1 ? parent.side : opt.side; //超过级别1的节点方向按照父节点的来，自定义设置无效
        utils.apply(me, {
            parent: parent,
            side: side,
            position: {
                top: 0,
                left: 0
            },
            text: opt.text,
            level: level
        });
    };
    node.prototype = {
        constructor: node,
        show: function() {},
        hide: function() {}
    };
    return node;
});
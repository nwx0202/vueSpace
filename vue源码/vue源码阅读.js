// 阅读地址：https://juejin.im/post/5f02f0bdf265da22ef7dbe5d#comment
// 1 - 10
(
    function(global, factory) {
        typeof exports === 'object' && typeof module !== 'undefined'
            ? module.exports = factory()
            : typeof define === 'function' && define.amd ? define(factory) : (global = global || self, global.Vue = factory());
    }(
        this,
        function () {
            'use strict';
            // 核心代码...
        }
    )
)

// 解析
// 检查CommonJs
if (typeof exports === 'object' && typeof module !== 'undefined') {
    module.exports = factory();
} else {
    if (typeof define === 'function' && define.amd) {
        // AMD异步模块定义，检查JavaScript依赖管理库require.js的存在
        // (https://stackoverflow.com/questions/30953589/what-is-typeof-define-function-defineamd-used-for)
        define(factory);
    } else {
        (global = global || self, global.Vue = factory());
    }
}

// 等价于
window.Vue = factory();
// factory是个匿名函数，该匿名函数并没有自执行，设计参数window，并传入window对象。不污染全局变量，也不会被别的代码污染

// 11 - 111
// 工具代码
// 冻结的对象无法再更改
// (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)
var emptyObject = Object.freeze({});

// 113 - 354行
// 是否为内置标签
var isBuiltInTag = makeMap('slot,component', true);
isBuiltInTag('slot'); // true
isBuiltInTag('slot1'); // false
// 是否为保留属性
var isReservedAtrribute = makeMap('key,ref,slot-scope,is');

// cached函数
function cached (fn) {
    // 创建一个空对象
    var cache = Object.create(null);
    // 获取缓存对象str的属性，如果hit有值直接返回，没有的话返回fn的返回值，并赋值给cache对象
    return (function cachedFn(str) {
        var hit = cache[str];
        return hit || (cache[str] = fn(str));
    });
}

// polyfillBind函数
// 每次加元素计算数组长度
function polyfillBind(fn, ctx) {
    function bindFn(a) {
        // console.log(ctx);
        console.log(arguments);
        var len = arguments.length;
        return len
            ? len > 1
                ? fn.call(ctx, arguments) // 多个参数参数组用apply，返回总长度
                : fn.call(ctx, a) // 一个参数用call，返回总长度
            : fn.call(ctx); // 没有新参数就返回原长度
    }
    bindFn._length = fn.length;
    return bindFn;
}

// 传入一个初始数组对象
var rsFn = polyfillBind(Array.prototype.push, []);
rsFn(1);
rsFn(2);
rsFn([1, 2]);
rsFn();
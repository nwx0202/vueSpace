// cached函数
function cached (fn) {
    // 创建一个空对象
    var cache = Object.create(null);
    // 获取缓存对象str的属性，如果hit有值直接返回，没有的话返回fn的返回值，并赋值给cache对象
    return (function cachedFn(str) {
        console.log(cache);
        var hit = cache[str];
        return hit || (cache[str] = fn(str));
    });
}

// 一个返回自身输入的函数
var fn = val => val;
var rsFn = cached(fn);
rsFn(1); // 第一次进入cached方法，cache对象{}
rsFn(2); // 上一次缓存结果{'1': 1}
rsFn(1); // 上一次缓存结果{'1': 1, '2': 2}.已经有1的缓存了，所以不会再传入对象

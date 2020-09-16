// 数据监听Dep
// Dep是订阅者watch对应的数据依赖
var Dep = function Dep () {
    // 每个Dep都有唯一的id
    this.id = uid++;
    // subs用于存放依赖
    this.subs = [];
}

// 像subs数组添加依赖
Dep.prototype.addSub = function addSub (sub) {
    this.subs.push(sub);
}

// 移除依赖
Dep.prototype.removeSub = function removeSub (sub) {
    remove(this.subs, sub);
}

// 设置某个watcher的依赖
// 这里添加了Dep.target是否存在的判断，目的是判断是不是watcher的构造函数调用
// 也就是说判断他是watcher的this.get调用的，而不是普通调用
Dep.prototype.depend = function depend () {
    if (Dep.target) {
        Dep.target.addDep(this);
    }
}

Dep.prototype.notify = function notify () {
    var subs = this.subs.slice();
    // 通知绑定所有watcher，调用watcher的update()
    for (var i = 0, l = subs.length; i < l; i++) {
        subs[i].update();
    }
}
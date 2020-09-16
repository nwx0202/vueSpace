// 类比一个生活场景：报社将各种时下热点的新闻收集，然后制成各类报刊，发送到每家门口的邮箱里，订阅报刊的人看到新闻，对新闻做出评论。
// 报社==发布者，新闻==数据，邮箱==订阅器，订阅报刊的人==订阅者，对新闻评论==视图更新
// Observer的调用过程：initState() -> observe(data) -> new Obeserve()
var Observer = function Observer (value) {
    this.value = value;
    this.dep = new Dep();
    this.vmCount = 0;
    def(value, '_ob_', this);
    if (Array.isArray(value)) {
        if (hasProp) {
            protoAugment(value, arrayMethods);
        } else {
            copyAugment(value, arrayMethods, arrayKeys);
        }
        this.observeArray(value);
    } else {
        this.walk(value);
    }
}

// defineReactive函数，定义一个响应式对象，给对象动态添加getter、setter，用于依赖收集和派发更新
function defineReactive (
    obj: Object,
    key: string,
    val: any,
    customSetter?: Function,
    shallow?: boolean
) {
    // 为属性创建一个发布者
    const dep = new Dep();

    const property = Object.getOwnPropertyDescriptor(obj, key);
    if (property && property.configurable === false) {
        return
    }

    // cater for pre-defined getter/setter
    const getter = property && property.get;
    const setter = property && property.set;
    if ((!getter || setter) && arguments.length === 2) {
        val = obj[key];
    }

    let childOb = !shallow && observe(val)// 2. 获取属性值的__ob__属性
    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get: function reactiveGetter () {
        const value = getter ? getter.call(obj) : val
        if (Dep.target) {
            dep.depend()// 3. 添加 Dep
            if (childOb) {
            childOb.dep.depend()//4. 也为属性值添加同样的 Dep 
            if (Array.isArray(value)) {
                dependArray(value)
            }
            }
        }
        return value
        },
        set: function reactiveSetter (newVal) {
        const value = getter ? getter.call(obj) : val
        /* eslint-disable no-self-compare */
        if (newVal === value || (newVal !== newVal && value !== value)) {
            return
        }
        /* eslint-enable no-self-compare */
        if (process.env.NODE_ENV !== 'production' && customSetter) {
            customSetter()
        }
        if (setter) {
            setter.call(obj, newVal)
        } else {
            val = newVal
        }
        childOb = !shallow && observe(newVal)
        dep.notify()
        }
    })
}
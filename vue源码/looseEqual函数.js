// 有赞、头条面试
function looseEqual (a, b) {
    if (a === b) return true;
    const isObjectA = isObject(a);
    const isObjectB = isObject(b);
    if (isObjectA && isObjectB) {
        try {
            const isArrayA = Array.isArray(a);
            const isArrayB = Array.isArray(b);
            if (isArrayA && isArrayB) {
                return a.length === b.length && a.every((e, i) => {
                    return looseEqual(e, b[i]);
                })
            } else if (!isArrayA && !isArrayB) {
                const keyA = Object.keys(a);
                const keyB = Object.keys(b);
                return keyA.length === keyB.length && keyA.every((key) => {
                    return looseEqual(a[key], b[key]);
                })
            } else {
                return false;
            }
        } catch(e) {
            return false;
        }
    } else if (!isObjectA && !isObjectB) {
        return String(a) === String(b);
    } else {
        return false;
    }
}
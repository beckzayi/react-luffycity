export function isClassComponent(fn) {
    if (typeof fn === 'function' && fn.prototype && fn.prototype.render) {
        return true;
    }
    return false;
}

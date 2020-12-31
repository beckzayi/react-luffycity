const React = {
    createElement
};

/**
 * Returns a React element object.
 * @param {string} tag - the dom tag, such div, and span etc
 * @param {Object} attrs - it is an object with properties
 * @param  {Array} children - an array
 * @returns {Object}
 */
function createElement(tag, attrs, ...children) {
    return {
        tag,
        attrs,
        children
    }
}

export default React;

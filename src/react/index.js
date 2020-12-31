const React = {
    createElement
};

/**
 * Returns a React element object.
 * @param {string} tag 
 * @param {Object} attrs 
 * @param  {Array} children 
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

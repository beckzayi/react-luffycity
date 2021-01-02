const ReactDOM = {
    render
};

/**
 * Render the virtual dom to the html container.
 * @param {Object} vnode - the jsx object, virtual dom.
 * @param {HTMLElement} container - the dom.
 */
function render(vnode, container) {
    console.log(vnode);
    if (vnode === undefined) {
        return;
    }

    if (typeof vnode === 'string') {
        const textNode = document.createTextNode(vnode);
        return container.appendChild(textNode);
    }

    // Destructuring the virtual dom object
    const { tag, attrs, children } = vnode;

    if (typeof tag === 'string') {
        // Create the DOM element
        const dom = document.createElement(tag);

        // Set attributes for the DOM element
        if (attrs) {
            Object.keys(attrs).forEach(key => setAttribute(dom, key, attrs[key]));
        }

        // Loop the children array
        children.forEach(child => {
            render(child, dom); // recursivly render the child node
        });

        return container.appendChild(dom);
    }

    if (typeof tag === 'function') {
        const functionComponent = tag(attrs);
        console.log(functionComponent);
        return functionComponent;
    }
}
/**
 * Set attribute for the DOM element
 * @param {HTMLElement} dom 
 * @param {string} key 
 * @param {*} value 
 */
function setAttribute(dom, key, value) {
    if (key === 'className') {
        key = 'class';
    }
    dom.setAttribute(key, value);

    // if the property is an event, such as onClick and onBlur

    // if the property is style
}

export default ReactDOM;

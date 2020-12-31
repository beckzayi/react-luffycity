import React from './react';
import ReactDOM from './react-dom';

const ele = (
    <div className="title">
        Hello World
        <span>React <a href="https://duckduckgo.com">Duckgogo</a></span>
    </div>
);

ReactDOM.render(ele, document.querySelector('#root'));

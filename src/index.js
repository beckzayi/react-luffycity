import React from './react';
import ReactDOM from './react-dom';

const ele = (
    <div className="title">
        Hello World
        <span>React <a href="https://duckduckgo.com">Duckgogo</a></span>
    </div>
);

function Home(props) {
    return(
        <h1 className="title">Home, hi <span>{props.name}</span></h1>
    )
}

ReactDOM.render(<Home name="John" />, document.querySelector('#root'));

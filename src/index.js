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

class Person extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <div className="name">Hello {this.props.name}</div>
                <div className="age">
                    <label>Age:</label>
                    <span>{this.props.age}</span>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Person name="Kate" age="18" />, document.querySelector('#root'));

import React from 'react';
import ReactDOM from 'react-dom';

// const HELLO = <h3>I'm an H3 title</h3>

/* ReactDOM.render(
    HELLO,
    document.getElementById('app')
); */

const Welcome = ((props) => {
    return (
        <div>
            <h4>Welcome to my site, {props.firstName}!</h4>
            <p>Your name is {props.firstName} {props.lastName}.</p>
        </div>
    )
})

const App = (() => {
    const nameArray = ['Christopher', 'Mary', 'Ben', 'Claire', 'Jim'];
    const nameMapper = (() => 
        nameArray.map((name, i) => 
            <li key={i}>{name}</li>
        )
    );
    const cssStyles = {
        'backgroundColor': 'lightblue',
        'font-size': '1.2em'
    };
    return (
        <div style={cssStyles}>
            <Welcome firstName="Chris" lastName="Smith" />
            <Welcome firstName="Jane" lastName="Doe" />
            <ul>
                {nameMapper()}
            </ul>
        </div>
    )
})

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
import React from 'react';

function Hello(props) {
    return (
        <>
        <h1>
            Hello, React!
        </h1>
        <div>
            {props.title}
        </div>
        </> 
    )
}

export default Hello;

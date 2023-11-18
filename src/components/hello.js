import React from 'react';

const Hello = (props) => {
	let temp = () => {
			return <div>fuga</div>
	}

    return (
			<>
			<h1>
					Hello, React!
			</h1>
			<div>
					{props.title}
			</div>
			<div>
					{temp()}
			</div>
			</>
    )
}

export default Hello;

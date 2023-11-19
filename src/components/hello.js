import React from 'react';

export default function Hello(props) {
	let temp = () => {
		return <div>fuga</div>
	}

	return (
		<>
		<h1>
			Hello, React!
		</h1>
		<div>
			{ props.title }
		</div>
		<div>
			{ temp() }
		</div>
		</>
	)
}

import React from 'react';
import style from './Title.css';

const Title = (props) => {
	return (
		<div>
			<h1>{props.title}</h1>
			<p>You have {props.data} tasks to do.</p>
		</div>
	)

} 
export default Title;
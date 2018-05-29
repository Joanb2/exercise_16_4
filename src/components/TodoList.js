import React from 'react';
import style from './TodoList.css';

const TodoList = ({data, remove}) => {
		return (
			<div>
				<h2>List of tasks : </h2>
				<ol>
					{data.map( (todo) => <li key={todo.id}>{todo.text}
					<button onClick={() => remove(todo.id)}>x</button>
					</li>)}
				</ol>
			</div>
		);
}

export default TodoList;

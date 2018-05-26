import React from 'react';
import { hot } from 'react-hot-loader';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';


class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data:
			[{
				id: 1,
				    text: 'clean room'
				}, {
				id: 2,
				text: 'wash the dishes'
				}, {
				id: 3,
				    text: 'feed my cat'
				}]
		};
	}
	addTodo(val) {
		const todo = {
			text: val,
			id: uuid.v4(),
		};
		const data = [...this.state.data, todo];
		this.setState({data});
	}
	removeTodo(id) {
		const remainder = this.state.data.filter(todo => todo.id !== id);
		this.setState({data: remainder});
	}
	render() {
		return (
			<div className={style.TodoApp}>
				<TodoForm add={this.addTodo.bind(this)} />
				<Title className={style.Title} title="To Do" data={this.state.data.length}/>
				<TodoList remove={this.removeTodo.bind(this)}
				data={this.state.data}/>
			</div>
		);
	};
}

export default hot(module)(App);
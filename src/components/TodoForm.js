import React from 'react';
import style from './TodoForm.css';

class TodoForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			input: '',
		}
	}

	updateInput(event) {
		event.preventDefault();
		this.setState({input: event.target.value});
	}

	handleSubmit(event) {
		event.preventDefault();
		this.props.add(this.state.input);
		this.setState({input: ' '});
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit.bind(this)}>
				<input 
				placeholder="What You need to do?"
				type="text"
				value={this.state.input}
				onChange={this.updateInput.bind(this)}
				/>
				<button type="submit">ADD</button>
			</form>
		)
	};

}

export default TodoForm;
import React from 'react';

class TodoForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			input: '',
		}
	}

	updateInput(input) {
		event.preventDefault();
		this.setState({ input: input.target.value})
		console.log(this.state.input)
	}

	handleSubmit(event) {
		event.preventDefault();
		addTodo(this.state.input)
	}

	render() {
		return (
			<form>
				<input type="text"
				ref={((input) => {this.input = input})}
				value={this.state.input}
				onChange={input => this.updateInput(input)}
				/>
				<button onSubmit={input => this.handleSubmit(input)}>add</button>
			</form>
		)
	};

}

export default TodoForm;
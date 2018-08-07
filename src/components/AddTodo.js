import React from 'react';

// stateless uses a function, stateful uses Classes 
const AddTodo = ({ addTodo }) => {
	//console.log('Props: ', addTodo )
	return (
		<form onSubmit={(event) => {
			event.preventDefault()
			const userInput = event.target.userInput.value

			//console.log("value: ", userInput)
			addTodo(userInput)

			event.target.userInput.value = ''
		}}>
			<input type="text" name="userInput"/>
			<button>Add</button>
		</form>
	)
}

export default AddTodo
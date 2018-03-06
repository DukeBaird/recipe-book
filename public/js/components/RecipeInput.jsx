import React    from 'react';
import ReactDOM from 'react-dom';

class RecipeInput extends React.Component {

	constructor(props) {
		super(props);
		// do I want to do anything here?
	}

	render() {
		// Can I bind props to this form?
		return (
			<form action="/api/v1/recipe" method="POST">
				<span>
					<label htmlFor='nameInput'>Recipe Name</label>
					<input name='name' id='nameInput' type='text' />
				</span>
				<span>
					<label htmlFor='instrInput'>Instructions</label>
					<input name='instructions' id='instrInput' type='text' />
				</span>
				<button type='submit'>Submit Recipe</button>
			</form>
		)
	}
}

export default RecipeInput
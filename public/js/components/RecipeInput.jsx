import React    from 'react';
import ReactDOM from 'react-dom';

class RecipeInput extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<form>
				<span>
					<label htmlFor='nameInput'>Recipe Name</label>
					<input 
						name='name' 
						id='nameInput' 
						type='text' 
						onChange={ this.props.onChange }
					/>
				</span>
				<span>
					<label htmlFor='instrInput'>Instructions</label>
					<input 
						name='instructions' 
						id='instrInput' 
						type='text' 
						onChange={ this.props.onChange }
					/>
				</span>
				<div
					onClick={ this.props.onSubmit }
					className='button'
				>Submit Recipe</div>
			</form>
		)
	}
}

export default RecipeInput
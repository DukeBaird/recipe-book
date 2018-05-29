import React    from 'react';
import ReactDOM from 'react-dom';

const RecipeInput = ({ onChange, onSubmit }) =>
	<form>
		<span>
			<label htmlFor='nameInput'>Recipe Name</label>
			<input 
				name='name' 
				id='nameInput' 
				type='text' 
				onChange={ onChange }
			/>
		</span>
		<span>
			<label htmlFor='instrInput'>Instructions</label>
			<input 
				name='instructions' 
				id='instrInput' 
				type='text' 
				onChange={ onChange }
			/>
		</span>
		<div
			onClick={ onSubmit }
			className='button'
		>Submit Recipe</div>
	</form>

export default RecipeInput
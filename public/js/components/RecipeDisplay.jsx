import React    from 'react';
import ReactDOM from 'react-dom';

const RecipeDisplay = ({ name, instructions, classification }) =>
	<div className='recipeDisplay'>
		<div>
			<label>{ name }</label>
		</div>

		<div>
			<label>{ instructions }</label>
		</div>

		<div>
			<label>{ classification }</label>
		</div>

	</div>

export default RecipeDisplay
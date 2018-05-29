import React from 'react';
import RecipeDisplay from './RecipeDisplay.jsx';

const RecipeList = ({list}) => {

	if (!list.length) {
		return (
			<div>Couldn't find any recipes. Try another search?</div>
		)
	}

	return (
		<div className='recipeList search'>
			{list.map(recipe =>
				<RecipeDisplay key={ recipe._id } { ...recipe } />
			)}
		</div>
	)
};

export default RecipeList
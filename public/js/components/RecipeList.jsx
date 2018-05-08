import React from 'react';
import RecipeDisplay from './RecipeDisplay.jsx';

const RecipeList = ({list}) => {

	if (!list.length) {
		return (
			<div>Couldn't find any recipes. Try another search?</div>
		)
	}

	return (
		<div>
			{list.map(recipe =>
				<RecipeDisplay key={ recipe._id } recipe={ recipe } />
			)}
		</div>
	)
};

export default RecipeList
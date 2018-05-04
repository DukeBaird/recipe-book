import React from 'react';
import RecipeDisplay from './RecipeDisplay.jsx';

const RecipeList = ({list}) => {
	return (
		<div>
			{list.map(recipe =>
				<RecipeDisplay key={ recipe._id } recipe={ recipe } />
			)}
		</div>
	)
};

export default RecipeList
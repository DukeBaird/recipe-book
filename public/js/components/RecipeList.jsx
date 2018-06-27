import React from 'react';
import RecipeDisplay from './RecipeDisplay.jsx';
import { Link } from 'react-router-dom';

const RecipeList = ({list}) => {

	if (!list.length) {
		return (
			<div>Couldn't find any recipes. Try another search?</div>
		)
	}

	return (
		<div className='recipeList search'>
			{list.map(recipe =>

				<Link key={ recipe._id } className='recipeCard' to={ '/recipe/' + recipe._id }>
					<RecipeDisplay { ...recipe } />
				</Link>

			)}
		</div>
	)
};

export default RecipeList
import * as types from './actionTypes';
import recipeApi from '../api/recipeApi';

export function loadRecipeSuccess(recipe) {
	return {
		type: types.LOAD_RECIPE_SUCCESS,
		recipe: recipe
	}
}

export function loadRecipe() {
	return function(dispatch) {
		return recipeApi.getRecipe().then(recipe => {
			dispatch(loadRecipeSuccess(recipe));
		}).catch(error => {
			throw (error);
		});
	}
}
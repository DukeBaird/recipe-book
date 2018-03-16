import * as types from './actionTypes';
import recipeApi from '../api/recipeApi';

export function loadRecipeSuccess(recipe) {
	return {
		type: types.LOAD_RECIPE_SUCCESS,
		recipes: recipe.data
	}
}

export function createRecipeSucces(recipe) {
	return {
		type: types.CREATE_RECIPE_SUCCESS,
		recipes: recipe.data
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

export function createRecipe(recipe) {
	return function(dispatch) {
		return recipeApi.createRecipe(recipe).then((recipe) => {
			dispatch(createRecipeSucces(recipe));
		}).catch(error => {
			throw (error);
		});
	}
}
import * as types from './actionTypes';
import recipeApi from '../api/recipeApi';

export function loadRecipeSuccess(recipe) {
	return {
		type: types.LOAD_RECIPE_SUCCESS,
		recipes: recipe.data
	}
}

export function createRecipeSuccess(recipe) {
	return {
		type: types.CREATE_RECIPE_SUCCESS,
		recipe: recipe.data
	}
}

export function findRecipeSuccess(recipe) {
	return {
		type: types.FIND_RECIPE_SUCCESS,
		recipes: recipe.data
	}
}

export function resetRecipeSuccess() {
	return {
		type: types.RESET_RECIPE_SUCCESS
	}
}

export function getRecipeSuccess(recipe) {
	return {
		type: types.GET_RECIPE_SUCCESS,
		recipe: recipe.data
	}
}

export function loadRecipe() {
	return function(dispatch) {
		return recipeApi.getRandomRecipe().then(recipe => {
			dispatch(loadRecipeSuccess(recipe));
		}).catch(error => {
			throw (error);
		});
	}
}

export function createRecipe(recipe) {
	return function(dispatch) {
		return recipeApi.createRecipe(recipe).then(recipe => {
			dispatch(createRecipeSuccess(recipe));
		}).catch(error => {
			throw (error);
		});
	}
}

export function findRecipe(recipe) {
	return function(dispatch) {
		return recipeApi.findRecipe(recipe).then(recipe => {
			dispatch(findRecipeSuccess(recipe));
		}).catch(error => {
			throw (error);
		});
	}
}

export function getRecipe(recipeID) {
	return function(dispatch) {
		return recipeApi.getRecipe(recipeID).then(recipe => {
			dispatch(getRecipeSuccess(recipe));
		}).catch(error => {
			throw (error);
		});
	}
}

export function resetRecipe() {
	return function(dispatch) {
		dispatch(resetRecipeSuccess());
	}
}
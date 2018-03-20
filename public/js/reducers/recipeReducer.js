import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function recipeReducer(state = initialState.recipes, action) {

	switch(action.type) {

		case types.LOAD_RECIPE_SUCCESS:
			return Object.assign([], state, action.recipes);

		case types.CREATE_RECIPE_SUCCESS:
			state.push(action.recipe);
			return state;
			// return Object.assign([], state, action.recipe);

		case types.FIND_RECIPE_SUCCESS:
			return Object.assign([], state, action.recipes);

		default:
			return state;	
	}
}
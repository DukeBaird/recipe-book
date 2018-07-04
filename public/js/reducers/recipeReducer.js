import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function recipeReducer(state = initialState, action) {

	switch(action.type) {

		case types.LOAD_RECIPE_SUCCESS:
			var newList = Object.assign([], state.list, action.recipes);	
			return Object.assign({}, state, {
				list: newList
			});

		case types.CREATE_RECIPE_SUCCESS:
			var newList = Object.assign([], state.list, action.recipe);
			return Object.assign({}, state, {
				list: newList,
				created: true
			});

		case types.FIND_RECIPE_SUCCESS:
			var newList = action.recipes;
			return Object.assign({}, state, {
				found: newList
			});

		case types.RESET_RECIPE_SUCCESS:
			return Object.assign({}, state, {
				created: false,
				found: false,
				full: null
			});

		case types.GET_RECIPE_SUCCESS:
			return Object.assign({}, state, {
				full: action.recipe
			});

		default:
			return state;	
	}
}
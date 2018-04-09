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
			state.list = Object.assign([], state.list, action.recipes);
			return state;

		case types.RESET_RECIPE_SUCCESS:
			return Object.assign({}, state, {
				created: false
			});

		default:
			return state;	
	}
}
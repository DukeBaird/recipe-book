import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function recipeReducer(state = initialState, action) {

	switch(action.type) {

		case types.LOAD_RECIPE_SUCCESS:
			state.list = Object.assign([], state.list, action.recipes);
			state.created = initialState.created;
			console.log("reducer load success: ", state);
			return state;

		case types.CREATE_RECIPE_SUCCESS:
			console.log("reducer create success: ", state);
			state.list.push(action.recipe);
			state.created = true;
			return state;
			// return Object.assign([], state, action.recipe);

		case types.FIND_RECIPE_SUCCESS:
			console.log("reducer find success: ", state);
			state.list = Object.assign([], state.list, action.recipes);
			return state;

		default:
			return state;	
	}
}
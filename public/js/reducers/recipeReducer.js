import * as types from '../actions/actionTypes';
import initialState from './initialState';
// import {browserHistory} from 'react-router-dom'

export default function recipeReducer(state = initialState.recipes, action) {
	
	switch(action.type) {

		case types.LOAD_RECIPE_SUCCESS:
			return Object.assign([], state, action.recipes);

		default:
			return state;	
	}
}
import React    from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as recipeActions from '../actions/recipeActions.js';

class Recipe extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		// dispatch load recipe
		this.props.actions.getRecipe(this.props.match.params.recipeID);
	}

	componentWillUnmount() {
		// dispatch remove recipe from state
		this.props.actions.resetRecipe();
	}

	render() {
		if (this.props.recipe) {
			return (
				<div>
					<div>Large explanation of recipe</div>
					<div>{ this.props.match.params.recipeID }</div>
				</div>
			)
		}

		return (
			<div>No recipe found. Perhaps you want to <a href='/search'>search?</a></div>
		)
	}

}

function mapStateToProps(state, ownProps) {
	return {
		recipe: state.recipes.full
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(recipeActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);
import React    from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as recipeActions from '../actions/recipeActions.js';
import RecipeInput from './RecipeInput.jsx'

class Submit extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			recipe: {
				name: '',
				instructions: ''
			}
		};
		this.saveRecipe = this.saveRecipe.bind(this);
		this.updateRecipeState = this.updateRecipeState.bind(this);
	}

	componentWillUnmount() {
		this.props.actions.resetRecipe();
	}

	updateRecipeState(event) {
		const field = event.target.name;
		const recipe = this.state.recipe;
		recipe[field] = event.target.value;
		return this.setState({recipe: recipe});
	}

	saveRecipe(event) {
		event.preventDefault();
		this.props.actions.createRecipe(this.state.recipe);
	}

	render() {

		if (this.props.created) {
			return (
				<div className='container'>
					<div className='title'>Recipe Created!</div>	
				</div>
			)
		}

		return (
			<div className='container'>
				<div className='title' >Recipe Submission</div>
				<RecipeInput 
					onSubmit={ this.saveRecipe }
					onChange={ this.updateRecipeState }
				/>
			</div>
		)
	}
}

function mapStateToProps(state, ownProps) {
	return {
		created: state.recipes.created
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(recipeActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Submit);
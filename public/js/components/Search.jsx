import React    from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as recipeActions from '../actions/recipeActions.js';

class Search extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			recipe: {
				name: ''
			}
		};
		this.findRecipe = this.findRecipe.bind(this);
		this.updateRecipeState = this.updateRecipeState.bind(this);
	}

	updateRecipeState(event) {
		const field = event.target.name;
		const recipe = this.state.recipe;
		recipe[field] = event.target.value;
		return this.setState({recipe: recipe});
	}

	findRecipe(event) {
		event.preventDefault();
		this.props.actions.findRecipe(this.state.recipe);
	}

	render() {
		return (
			<div className='container'>
				<div className='title'>Recipe Search</div>
				<form>
					<span>
						<label htmlFor='nameInput'>Recipe Name</label>
						<input 
							name='name' 
							id='nameInput' 
							type='text' 
							onChange={ this.updateRecipeState }
						/>
					</span>
					<div
						onClick={ this.findRecipe }
						className='button'
					>Search</div>
				</form>
			</div>
		)
	}
}

function mapStateToProps(state, ownProps) {
	return {};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(recipeActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
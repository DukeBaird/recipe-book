import React    from 'react';
import ReactDOM from 'react-dom';
import RecipeDisplay from './RecipeDisplay.jsx';

class Home extends React.Component {

	constructor(props, context) {
		super(props, context);
		this.state = {
			hasRecipe: !!props.recipe
		};
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.recipe || nextProps.recipe) {
			this.setState({ hasRecipe: true });
		}
	}

	render() {
		if (!this.state.hasRecipe) {
			return (
				<div className='container'>
					<div className='title'>Recipe Book</div>
				</div>
			)
		}

		return (
			<div className='container'>
				<div className='title'>Recipe Book</div>
				<div className='recipeList'>	
					<RecipeDisplay recipe={ this.props.recipe } />
				</div>
			</div>
		)
	}
}

export default Home;
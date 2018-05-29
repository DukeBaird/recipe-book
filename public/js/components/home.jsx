import React, {PropTypes}    from 'react';
import ReactDOM from 'react-dom';
import RecipeDisplay from './RecipeDisplay.jsx';

class Home extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			hasRecipe: !!props.recipe // DO we really need this !! in here, or can I just check props.recipe
		};
	}

	// Im not sure this is really necessary anymore
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
					<RecipeDisplay { ...this.props.recipe } />
				</div>
			</div>
		)
	}
}

Home.propTyles = {
	recipe: PropTypes.object
}

export default Home;
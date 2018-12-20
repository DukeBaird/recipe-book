import React, {PropTypes}    from 'react';
import ReactDOM from 'react-dom';
import RecipeDisplay from './RecipeDisplay.jsx';
import { Link } from 'react-router-dom';

class Home extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			hasRecipe: !!props.recipe // Do we really need this !! in here, or can I just check props.recipe
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
					<Link key={ this.props.recipe._id } className='recipeCard' to={ '/recipe/' + this.props.recipe._id }>
						<RecipeDisplay { ...this.props.recipe } />
					</Link>
				</div>
			</div>
		)
	}
}

Home.propTyles = {
	recipe: PropTypes.object
}

export default Home;
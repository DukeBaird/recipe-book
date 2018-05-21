import React    from 'react';
import ReactDOM from 'react-dom';

class RecipeDisplay extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='recipeDisplay'>
				<div>
					<label>{ this.props.recipe.name }</label>
				</div>

				<div>
					<label>{ this.props.recipe.instructions }</label>
				</div>

				<div>
					<label>{ this.props.recipe.classification }</label>
				</div>

			</div>
		)
	}
}

export default RecipeDisplay
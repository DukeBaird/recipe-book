import React    from 'react';
import ReactDOM from 'react-dom';

class Home extends React.Component {

	constructor(props, context) {
		super(props, context);
		this.state = {
			hasRecipe: false
		}
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.recipe) {
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
				<p>{ this.props.recipe.title }</p>
			</div>
		)
	}
}

export default Home;
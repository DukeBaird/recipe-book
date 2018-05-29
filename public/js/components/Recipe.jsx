import React    from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

class Recipe extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		// dispatch load recipe
	}

	componentWillUnmount() {
		// dispatch remove recipe from state
	}

	render() {

		console.log(`The recipe ID is ${ this.props.match.params.recipeID }`);

		return (
			<div>
				<div>Large explanation of recipe</div>
				<div>{ this.props.match.params.recipeID }</div>
			</div>
		)
	}

}

function mapStateToProps(state, ownProps) {
	// map full recipe to props
	return {};
}

export default connect(mapStateToProps)(Recipe);
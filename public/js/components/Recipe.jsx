import React    from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

class Recipe extends React.Component {
	constructor(props, context) {
		super(props, context);
		console.log('*');
		console.log(props.match);
		console.log('*');
	}

	render() {

		console.log(`The recipe ID is ${ this.match.params.recipeID }`);

		return (
			<div>
				<div>Large explanation of recipe</div>
				<div>{ this.props.match.params.recipeID }</div>
			</div>
		)
	}

}

function mapStateToProps(state, ownProps) {
	console.log(ownProps);
	return {};
}

export default connect(mapStateToProps)(Recipe);
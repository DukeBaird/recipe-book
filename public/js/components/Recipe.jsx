import React    from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

class Recipe extends React.Component {
	constructor(props, context) {
		super(props, context);
	}

	render() {
		return (
			<div>
				<div>Large explanation of recipe</div>
				<div>{ this.props.recipeID }</div>
			</div>
		)
	}

}

function mapStateToProps(state, ownProps) {
	console.log(ownProps);
	return {};
}

export default connect(mapStateToProps)(Recipe);
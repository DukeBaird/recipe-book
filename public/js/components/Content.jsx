import React, {PropTypes} from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../components/Home.jsx';
import NotFound from '../components/404.jsx';
import Search from '../components/Search.jsx';
import Submit from '../components/Submit.jsx';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';



class Content extends React.Component {

	constructor(props, context) {
		super(props, context);
	}

	render() {
		return (
			<div className='contentArea'>
				<Switch>
					<Route exact path='/' render={(props) => ( <Home recipe={ this.props.recipe[0] } /> )}/>
					<Route exact path='/search' component={Search}/>
					<Route exact path='/Submit' component={Submit}/>
					<Route exact path='/404' component={NotFound}/>
				</Switch>
			</div>
		)
	}
}

Content.propTypes = {
	recipe: PropTypes.array
}

function mapStateToProps(state, ownProps) {
	return {
		recipe: state.recipes
	}
}

export default connect(mapStateToProps)(Content)
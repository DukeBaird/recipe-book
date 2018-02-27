import React, {PropTypes} from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

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
					<Route exact path='/search' render={(props) => ( <Search/> )}/>
					<Route exact path='/Submit' render={(props) => ( <Submit/> )}/>
					<Route exact path='/404' render={(props) => ( <NotFound /> )}/>
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

export default withRouter(connect(mapStateToProps)(Content));
import React, {PropTypes} from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Home from '../components/Home.jsx';
import NotFound from '../components/404.jsx';
import Search from '../components/Search.jsx';
import Submit from '../components/Submit.jsx';
import Recipe from '../components/Recipe.jsx';

const Content = ({ recipe }) =>

	<div className='contentArea'>
		<Switch>
			<Route exact path='/' render={(props) => ( <Home recipe={ recipe[0] } /> )}/>
			<Route exact path='/search' render={(props) => ( <Search/> )}/>
			<Route exact path='/Submit' render={(props) => ( <Submit/> )}/>
			<Route path='/recipe/:recipeID' component={Recipe}/>
			<Route exact path='/404' render={(props) => ( <NotFound/> )}/>
		</Switch>
	</div>


Content.propTypes = {
	recipe: PropTypes.array
}

function mapStateToProps(state, ownProps) {
	return {
		recipe: state.recipes.list
	}
}

export default withRouter(connect(mapStateToProps)(Content));
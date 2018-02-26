import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';



import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';
import {loadRecipe} from '../actions/recipeActions';

import SideBar from '../components/SideBar.jsx';
import Home from '../components/Home.jsx';
import NotFound from '../components/404.jsx';
import Search from '../components/Search.jsx';
import Submit from '../components/Submit.jsx';

const store = configureStore();
store.dispatch(loadRecipe());

class Content extends React.Component {
	render() {
		return (
			<div className='contentArea'>
				<Switch>
					<Route exact path='/' component={Home}/>
					<Route exact path='/search' component={Search}/>
					<Route exact path='/Submit' component={Submit}/>
					<Route exact path='/404' component={NotFound}/>
				</Switch>
			</div>
		)
	}
}

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<div>
				<SideBar />
				<Content />
			</div>
		</BrowserRouter>
	</Provider>
	,
	document.getElementById('root')
);

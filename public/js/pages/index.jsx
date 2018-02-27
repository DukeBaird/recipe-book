import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';
import { loadRecipe } from '../actions/recipeActions';
import SideBar from '../components/SideBar.jsx';
import Content from '../components/Content.jsx';

const store = configureStore();
store.dispatch(loadRecipe());

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<div>
				<SideBar />
				<Content />
			</div>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);

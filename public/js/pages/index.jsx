import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SideBar from '../components/SideBar.jsx';
import Home from '../components/Home.jsx';

class Content extends React.Component {
	render() {
		return (
			<div className='contentArea'>
				<Switch>
					<Route exact path='/' component={Home}/>
					<Route exact path='/home' component={Home}/>
				</Switch>
			</div>
		)
	}
}

ReactDOM.render(
	<BrowserRouter>
		<div>
			<SideBar />
			<Content />
		</div>
	</BrowserRouter>,
	document.getElementById('root')
);

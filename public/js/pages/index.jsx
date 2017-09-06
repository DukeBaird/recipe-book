import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SideBar from '../components/SideBar.jsx';
import Home from '../components/Home.jsx';
import NotFound from '../components/404.jsx';
import Search from '../components/Search.jsx';
import Submit from '../components/Submit.jsx';

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
	<BrowserRouter>
		<div>
			<SideBar />
			<Content />
		</div>
	</BrowserRouter>,
	document.getElementById('root')
);

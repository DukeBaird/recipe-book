import React    from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

class Menu extends React.Component {
	render() {
		return (
			<div className='menuContainer'>
				<Link className='menuItem' to='/'>Home</Link>
				<Link className='menuItem' to='/submit'>Submit</Link>
				<Link className='menuItem' to='/search'>Search</Link>
			</div>
		)
	}
}

class SideBar extends React.Component {
	render() {
		return (
			<div className='sideBar'>
				<Menu />
			</div>
		)
	}
}

export default SideBar;
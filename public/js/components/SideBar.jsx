import React    from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

const Menu  = () =>
	<div className='menuContainer'>
		<Link className='menuItem' to='/'>Home</Link>
		<Link className='menuItem' to='/submit'>Submit</Link>
		<Link className='menuItem' to='/search'>Search</Link>
	</div>

const SideBar = () => 
	<div className='sideBar'>
		<Menu />
	</div>

export default SideBar;
import React    from 'react';
import ReactDOM from 'react-dom'

class MenuItem extends React.Component {
	render() {
		return (
			<div className='menuItem' onClick={() => this.props.onClick()}>{this.props.item}</div>
		)
	}
}

class Menu extends React.Component {

	renderMenuItem(phrase) {
		return (
			<MenuItem 
				item={phrase}
				onClick={() => this.handleClick(phrase)}
			/>
		)
	}

	render() {
		return (
			<div className='menuContainer'>
				{this.renderMenuItem('submit')}
				{this.renderMenuItem('search')}
			</div>
		)
	}

	handleClick(page) {
		console.log("GOTO: " + page);
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

export default SideBar
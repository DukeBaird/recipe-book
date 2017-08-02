// import React from '../react/react';
// import ReactDOM from '../react.react-dom'

// import SideBar from '../components/SideBar'

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


class Content extends React.Component {
	render() {
		return (
			<div className='contentArea'></div>
		)
	}
}

ReactDOM.render(
	<div>
		<SideBar />
		<Content />
	</div>,
	document.getElementById('root')
);

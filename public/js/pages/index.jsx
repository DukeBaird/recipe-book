import React    from 'react';
import ReactDOM from 'react-dom'
import SideBar  from '../components/SideBar.jsx'

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

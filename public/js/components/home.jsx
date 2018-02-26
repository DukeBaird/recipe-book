import React    from 'react';
import ReactDOM from 'react-dom';

class Home extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			data: []
		};
	}

	render () {
		return (
			<div className='container'>
				<div className='title'>Recipe Book</div>
				<p>This is the home page!</p>
			</div>
		)
	}
}

export default Home
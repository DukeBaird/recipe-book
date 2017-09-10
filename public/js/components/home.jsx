import React    from 'react';
import ReactDOM from 'react-dom';

class Home extends React.Component {

	loadInitalRecipe() {
		$.ajax({
			url: '/api/v1/test',
			dataType: 'json',
			cache: true,
			success: function(data) {
				console.log('done', data);
				this.setState({data: data});
			}.bind(this),
			error: function (xhr, status, err) {
				console.error('error', status, err.toString());
			}.bind(this)
		});
	}

	constructor(props) {
		super(props);
		this.state = {
			data: []
		};
	}

	componentDidMount() {
		this.loadInitalRecipe();
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
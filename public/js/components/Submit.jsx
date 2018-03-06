import React    from 'react';
import ReactDOM from 'react-dom';
import RecipeInput from './RecipeInput.jsx'

class Submit extends React.Component {

	constructor(props) {
		super(props);
		// do I want to do anything here?
	}

	render() {
		return (
			<div className='container'>
				<div className='title'>Recipe Submission</div>
				<RecipeInput />
			</div>
		)
	}
}

export default Submit
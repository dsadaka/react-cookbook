import React, { Component } from 'react';
import './Home.css'

class Home extends Component {
	constructor() {
		// We define super() at the beginning to have access to 'this'
		super();
		// Init local state as an object
		this.state = {
			name: 'Carlos'
		};
	}

	componentDidMount() {
		setTimeout( () => {
			this.setState({
				name: 'Christina'
			});

		}, 5000);
	}

	render() {
		// Style object
		const buttonStyle = {
			backgroundColor: 'gray',
			border: '1px solid black'
		};

		console.log('Name:', this.state.name);

		return (
			<div className="Home">
				{/* Here we render out state name */}
				<p>Hi my name is {this.state.name}</p>
				<p>
					<button style={buttonStyle}>Click me!</button>
				</p>
			</div>
		)
	}
}

export default Home;

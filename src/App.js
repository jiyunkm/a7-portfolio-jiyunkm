// Application
import React from 'react';
import './css/App.css';
import { Link } from 'react-router';
import '../node_modules/font-awesome/css/font-awesome.css'

var App = React.createClass({

	render() {
		// Return links and show anything inside the <App> component (children)

		return (
				<div className="App">
					<div className="navbar">
						<Link className="link" activeClassName='active' to="/"><i className="fa fa-home"></i></Link>
						<Link className="link" activeClassName='active' to="/projects">Projects</Link>
						<Link className="link" activeClassName='active' to="/resume">Resume</Link>
						<Link className="link" activeClassName='active' to="/profile">Profile</Link>
					</div>
					<div className="children">
						{this.props.children}
					</div>
				</div>
		);
	}
});

export default App;

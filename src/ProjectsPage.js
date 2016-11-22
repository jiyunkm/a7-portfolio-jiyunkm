// Page of projects to show
import React from 'react';
import Projects from './Projects.js'
import Baby from 'babyparse'
import $ from 'jquery'
import './css/Project.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


// Project Component
var ProjectsPage = React.createClass({
	getInitialState(){
		return{projects:[]}
	},

	componentDidMount(){
		$.get('data/projects.csv').then(function(data) {
			var parsed = Baby.parse(data, {header:true});
			this.setState({projects:parsed.data})
		}.bind(this));
	},

	render() {
		return (
			<div className='container'>
				<div className="row">
                    {this.state.projects.map(function(d, i){
                    	return (
	                      	<MuiThemeProvider>
													<Projects key={'eachProject-' + i}
	                         	name={d.name}
														url={d.url}
														description={d.description}
														img={d.img} />
														</MuiThemeProvider>
                    	)
                    })}
		        </div>
			</div>
		);
	}
});

export default ProjectsPage;

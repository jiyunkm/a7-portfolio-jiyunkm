import React from 'react';
import {Card, CardActions,  CardMedia, CardHeader, CardTitle} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './css/Project.css'


var Projects = React.createClass({
	getInitialState:function() {
		return ({expanded: false});
	},

	expandCard:function() {
		this.setState({expanded: !this.state.expanded})
	},

	render:function() {
		return(
			<div id="proj">
        <MuiThemeProvider>
				<Card expanded={this.state.expanded} onExpandChange={this.expandCard}>
           <CardTitle id= "hello"
             title={this.props.name}
             subtitle={this.props.description}
             actAsExpander={true}
             showExpandableButton={true}
           />
           <CardActions>
           <FlatButton href={this.props.url} label="Click to navigate to page" />
           </CardActions>
           <CardMedia expandable={true}>
               <img src={this.props.img} alt="project"/>
             </CardMedia>
         </Card>
				 </MuiThemeProvider>
			</div>

		)
	}
});

export default Projects;

// Page of quotes to show
import React, { Component } from 'react';
import Baby from 'babyparse';
//import './css/Quote.css';
import $ from 'jquery';
import './css/profile.css';
import {Card, CardActions, CardHeader, CardText, CardMedia} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// QuotePage component
var ProfilePage = React.createClass({
	getInitialState:function() {
		return ({expanded: false});
	},

	expandCard:function() {
		this.setState({expanded: !this.state.expanded})
	},
	render() {
		return (
				<div>
				<MuiThemeProvider>
				<Card id="info">
				<CardMedia>
					<img src="img/profile.png" alt="Photo of Ji Yun (Janice) Martel" />
				</CardMedia>
				</Card>
				</MuiThemeProvider>
				<MuiThemeProvider>
				<Card className="introduction">
					<CardHeader
						title="About Myself.."
						subtitle="What I do"
						actAsExpander={true}
						showExpandableButton={true}
					/>
					<CardText expandable={true}>
					I currently attend the University of Washington.
					<br/>I am an Informatics major, interested in data science and HCI.
					<br/>My expected graduation year is 2018.
					</CardText>
				</Card>
				</MuiThemeProvider>

				<MuiThemeProvider>
				<Card className="introduction">
			    <CardHeader
			      title="My Hometown"
			      subtitle="Seoul, Korea"
			      actAsExpander={true}
			      showExpandableButton={true}
			    />
			    <CardText expandable={true}>
			      I used to live in Seoul, Korea, but moved to the states when I was 10 years old.
						I moved around the states, exploring everything, learning about new culture.
			    </CardText>
			  </Card>
				</MuiThemeProvider>

				<MuiThemeProvider>
				<Card className="introduction">
					<CardHeader
						title="Education"
						subtitle="Schools I've attended"
						actAsExpander={true}
						showExpandableButton={true}
					/>
					<CardText expandable={true}>
					<li>Anne Wien Elementary</li>
					<li>Eastern Hills Middle School</li>
					<li>Palo Alto Middle School</li>
					<li>Gresham High School</li>
					<li>Forest Grove High School</li>
					<li>Curtis Senior High School</li>
					<li>Currently: University of Washington</li>
					</CardText>
				</Card>
				</MuiThemeProvider>

				</div>
		);
	}
});

export default ProfilePage;

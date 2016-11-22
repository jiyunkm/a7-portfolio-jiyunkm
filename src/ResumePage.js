import React from 'react';
import './css/resume.css'

var ResumePage = React.createClass({
	render() {
		return (
			<div className="flex">
			<img src="img/resume.png" alt="Resume of Ji Yun (Janice) Martel" />
			<a href="resume.pdf" download="resume.png">Click here to download the Resume!</a>
			</div>
		);
	}
});

export default ResumePage;

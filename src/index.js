import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { IndexRoute, Router, Route, hashHistory } from 'react-router';
import './css/index.css';
import ProjectsPage from './ProjectsPage';
import ResumePage from './ResumePage';
import ProfilePage from './ProfilePage';
import LandingPage from './LandingPage';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

// Render DOM -- wrapper in MuiThemeProvider for material-ui elements
ReactDOM.render(
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={LandingPage}/>
                <Route path="projects" component={ProjectsPage}/>
                <Route path="resume" component={ResumePage}/>
                <Route path="profile" component={ProfilePage}/>
            </Route>
        </Router>,
  document.getElementById('root')
);

import './../styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, Link} from 'react-router';
import VotesPage from './components/votes-page.js';
import SearchPage from './components/search-page.js';
import LoginPage from './components/login-page.js';

const router = (
	<Router history={browserHistory}>
		<Route path="/" component={SearchPage}/>
		<Route path="/votes" component={VotesPage}/>
		<Route path="/login" component={LoginPage}/>
	</Router>
);

ReactDOM.render(router, document.querySelector('main'));
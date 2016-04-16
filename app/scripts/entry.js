import './../styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, Link} from 'react-router';
import VotesPage from './components/votes-page.js';
import SearchPage from './components/search-page.js';
import LoginPage from './components/login-page.js';
// import LoginArea from './components/login-area.js';
// import NavBar from './components/navbar.js';
// import SearchComponent from './components/search-form.js';
// import SearchResults from './components/search-results.js';
// import BandSearchComponent from './components/search-results-band.js';
// import BandComponent from './components/band-component.js';
// import VoteButton from './components/vote-button.js';

// This file should just render the stuff in the app.js file unless I need to include the router
// stuff here.

const router = (
	<Router history={hashHistory}>
		<Route path="/" component={SearchPage}/>
		<Route path="/votes" component={VotesPage}/>
		<Route path="/login" component={LoginPage}/>
	</Router>
);

// ReactDOM.render(<VotesPage />, document.querySelector('main'));
// ReactDOM.render(<NavBar />, document.querySelector('main'));
// ReactDOM.render(<SearchComponent />, document.querySelector('main'));
// ReactDOM.render(<SearchResults />, document.querySelector('main'));
// ReactDOM.render(<BandSearchComponent />, document.querySelector('main'));
// ReactDOM.render(<BandComponent />, document.querySelector('main'));
// ReactDOM.render(<VoteButton />, document.querySelector('main'));

// This is the spotify API:
// https://api.spotify.com/v1/search?q=bob&type=artist

ReactDOM.render(router, document.querySelector('main'));
// ReactDOM.render(<LoginArea/>, document.querySelector('main'));
import React from 'react';
import {Router, Route, hashHistory, Link} from 'react-router';
import logo from './../../images/spotifylogo.png';

const NavBar = React.createClass({
	render: function() {
		return 	<nav>
					<div className="navLeft">
						<img src={logo}/>
						<h2>Votify!</h2>	
					</div>
					<div className="navRight">
						<Link to="/" className="navLink"><i className="fa fa-search fa-2x"></i></Link>
						<Link to="/votes" className="navLink"><i className="fa fa-check-circle fa-2x"></i></Link>
						<Link to="/login" className="navLink"><i className="fa fa-sign-in fa-2x"></i></Link>
					</div>
				</nav>;
	}
});

export default NavBar;
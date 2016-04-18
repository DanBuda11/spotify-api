import React from 'react';
import NavBar from './navbar.js';
import Footer from './footer.js';

const LoginArea = React.createClass({
	render: function() {
		return (
		<div>
			<h1>Login Form Will Go Here</h1>
		</div>
		)
	}
});

const LoginPage = React.createClass({
	render: function() {
		return 	(
				<div>
					<NavBar/>
					<LoginArea/>
					<Footer/>
				</div>
				)
	}
});

export default LoginPage;
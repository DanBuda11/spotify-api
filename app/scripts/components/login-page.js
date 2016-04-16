import React from 'react';
import NavBar from './navbar.js';
import LoginArea from './login-area.js';
import Footer from './footer.js';

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
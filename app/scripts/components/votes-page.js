import React from 'react';
import NavBar from './navbar.js';
import VotesArea from './votes-area.js';
import Footer from './footer.js';

const VotesPage = React.createClass({
	render: function() {
		return <div>
		<NavBar/>
				<VotesArea/>
				<Footer/>
				</div>
	}
});

export default VotesPage;
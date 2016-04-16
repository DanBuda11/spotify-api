// This is where all the components that make up the search page are compiled
import React from 'react';
import NavBar from './navbar.js';
import SearchComponent from './search-form.js';
import SearchResults from './search-results.js';
import Footer from './footer.js';

const SearchPage = React.createClass({
	render: function() {
		return <div>
		<NavBar/>
				<SearchComponent/>
				<SearchResults/>
				<Footer/>
				</div>
	}
});

export default SearchPage;
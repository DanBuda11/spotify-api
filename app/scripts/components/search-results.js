// This is the component that puts together all the band components from the search
import React from 'react';
import BandSearchComponent from './search-results-band.js';

const SearchResults = React.createClass({
	render: function() {
		return (
			<div>
				<h2>This is where the search results get shown</h2>
				<BandSearchComponent/>
				<BandSearchComponent/>
				<BandSearchComponent/>
				<BandSearchComponent/>
			</div>
			)
	}
});

export default SearchResults;
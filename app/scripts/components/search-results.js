// This is the component that puts together all the band components from the search
import React from 'react';
import BandSearchComponent from './search-results-band.js';
// import BandComponent from './band-component.js';
// import VoteButton from './vote-button.js';

const SearchResults = React.createClass({
	render: function() {
		const bandBoxes = this.state.bandResults.map(val, index, array) => {
			return (
				<BandSearchComponent
					name={}
					image={} />
				)
		};
	};	
	return (
		<div>
			{bandBoxes}
		</div>
		);
});

export default SearchResults;

// let bandSearchResults = this.props.bands.map(function(band, index, array) {
// 			return (
// 				<BandSearchComponent name={band.name} image={band.image} key={index}/>
// 				);
// 		});
// 		return (
// 			<div className="SearchResults">
// 				<h2>This is where the search results get shown</h2>
// 				{bandSearchResults}
// 			</div>
// 			);
// 	}

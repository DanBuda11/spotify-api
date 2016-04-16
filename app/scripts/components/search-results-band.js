// this is the component for each band that returns from the search in the search form section
import React from 'react';
import BandComponent from './band-component.js';
import VoteButton from './vote-button.js';

const BandSearchComponent = React.createClass({
	render: function() {
		return <div>
		<h4>This will be a box for each band returned into the search page</h4>
				<BandComponent/>
				<VoteButton/>
				</div>;
	}
});

export default BandSearchComponent;
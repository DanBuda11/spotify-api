import React from 'react';
import BandVoteComponent from './votes-results-band.js';

const VotesArea = React.createClass({
	render: function() {
		return (
			<div>
				<h2>This is where the bands with votes show up</h2>
				<BandVoteComponent/>
				<BandVoteComponent/>
				<BandVoteComponent/>
				<BandVoteComponent/>
			</div>
			)
	}
});

export default VotesArea;
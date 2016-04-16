import React from 'react';
import BandComponent from './band-component.js';
import VotesBadge from './votes-badge.js';

const BandVoteComponent = React.createClass({
	render: function() {
		return <div>
		<h4>This will be a box for each band returned into the votes page</h4>
				<BandComponent/>
				<VotesBadge/>
				</div>;
	}
});

export default BandVoteComponent;
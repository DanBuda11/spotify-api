// This is the basic band component that will be used in both search & votes pages
// it needs the band image and namd only; it will be combined with the other band components
	// this component + voting component for search page
	// this component + # of votes component for votes page

import React from 'react';

const BandComponent = React.createClass({
	render: function() {
		return <div className="bandComponent">
			<img src={this.props.image} className="bandImage"/>
			<h6 className="bandName">{this.props.name}</h6>
		</div>
	}
});

export default BandComponent;
import React from 'react';
import $ from 'jquery';
import NavBar from './navbar.js';
import bands from './../collections/band-collection.js';
import Footer from './footer.js';

const VotesPage = React.createClass({
	getInitialState: function() {
		return {bands: []};
	},
	componentDidMount: function() {
    	this.serverRequest = $.get('http://tiny-za-server.herokuapp.com/collections/buda-bands-collection', function(bands) {
      		var bandsVotes = bands;
      		this.setState({bands: bandsVotes});
 		}.bind(this));
	},
	render: function() {
	const bandVoteBoxes = this.state.bands.map((band, index, array) => {
			return (
				<div className="bandVoteBox"
					key={index}>
					<img ref="pic" src={band.image}/>
					<div className="voteBandName" ref="name">{band.name}</div>
				</div>
				);
		});
		return (
				<div>
					<NavBar/>
					<div className="votesArea">
						{bandVoteBoxes}
					</div>
					<Footer/>
				</div>
				)
	}
});

export default VotesPage;
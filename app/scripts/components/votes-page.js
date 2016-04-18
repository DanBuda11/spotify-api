import React from 'react';
import $ from 'jquery';
import NavBar from './navbar.js';
import bands from './../collections/band-collection.js';
// import VotesArea from './votes-area.js';
import Footer from './footer.js';

const VotesPage = React.createClass({
	getInitialState: function() {
		return {bands: []};
	},
	componentDidMount: function() {
    	this.serverRequest = $.get('http://tiny-za-server.herokuapp.com/collections/buda-bands-collection', function(bands) {
      		var bandsVotes = bands;
      		this.setState({bands: bandsVotes});
      		// console.log(bandsVotes);
  //     		this.setState({
  //      			username: lastGist.owner.login,
  //   			lastGistUrl: lastGist.html_url
  //    		});
  //   }.bind(this));
  }.bind(this));
	
// handleSubmit: function(e) {
// 		e.preventDefault();
// 		let searchInput = this.refs.searchInput.value;
// 		this.request = $.get('https://api.spotify.com/v1/search?q='+searchInput+'&type=artist', function(bands) {
// 		var bandsReturn = bands.artists.items;
// 		this.setState({bands: bandsReturn});
// 	}.bind(this));
	},
	// componentDidMount: function() {
	// 	bands.fetch();
	// 	console.log(bands);
	// 	this.setState({bands: bands});
	// 	console.log(bands);
	// },


	
	render: function() {
	const bandVoteBoxes = this.state.bands.map((band, index, array) => {
			return (
				<div className="bandVoteBox"
					key={index}>
					<img ref="pic" src={band.image}/>
					<div ref="name">{band.name}</div>
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
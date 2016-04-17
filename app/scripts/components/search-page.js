import React from 'react';
import $ from 'jquery';
import bands from './../collections/band-collection.js';
import NavBar from './navbar.js';
import VoteButton from './vote-button.js';
import Footer from './footer.js';

const SearchPage = React.createClass({
	getInitialState: function() {
		return {bands: []};
	},
	handleSubmit: function(e) {
		e.preventDefault();
		let searchInput = this.refs.searchInput.value;
		this.request = $.get('https://api.spotify.com/v1/search?q='+searchInput+'&type=artist', function(bands) {
		var bandsReturn = bands.artists.items;
		this.setState({bands: bandsReturn});
	}.bind(this));
	},
	newVote: function(e) {
			let bandVote = {
			name: this.refs.name.innerHTML,
			pic: this.refs.pic.src
		};
		console.log(this);
		console.log(bandVote);
		console.log(this.refs.name.innerHTML);
		bands.create(bandVote);
		// console.log(this.refs.name.innerHTML);
		// console.log(this.refs.pic.src);

	},
	render: function() {
		console.log(this.state.bands);
		const bandBoxes = this.state.bands.map((val, index, array) => {
			if (!val.images[0]) {
				val.images.push({url: 'http://www.emgreenfield.com/UploadedFiles/Product/no_image.png'});
			};
			return (
				<div className="bandSearchBox"
					key={index}>
					<img ref="pic" src={val.images[0].url}/>
					<div ref="name">{val.name}</div>
					<div className="voteBox"
						ref={index}>
						<button key={index} onClick={this.newVote}>Cast Your Vote!</button>
					</div>
				</div>
				);
		});
		return (
			<div className="searchPage">
				<NavBar/>
				<form onSubmit={this.handleSubmit}>
					<div className="submitArea">
						<input
							className="searchBox"
							type="text"
							placeholder="Band search..."
							ref="searchInput" />
						<input
							className="searchButton"
							type="submit"/>
					</div>
				</form>
				<div className="bandSearchArea">
					{bandBoxes}
				</div>
				<Footer/>
			</div>
		)
	}
});

export default SearchPage;
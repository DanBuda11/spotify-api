import React from 'react';
import $ from 'jquery';
import bands from './../collections/band-collection.js';
import NavBar from './navbar.js';
import Footer from './footer.js';

import { CLIENT_ID, CLIENT_SECRET } from '../../assets/data';

const BandBox = React.createClass({
	newVote: function(e) {
		// console.log(e.target);
		// console.log(e.target.name);
		// console.log(e.target.image);
		// console.log(this.props.name);
		// console.log(this.props);
			let bandVote = {
			name: this.props.name,
			image: this.props.image
		};
		// console.log(bandVote);
		bands.create(bandVote);
	},
	render: function() {
		return (
			<div className="bandSearchBox">
				<img className="bandImg" src={this.props.image}
					ref="image"/>
				<div className="bandName" ref="name">{this.props.name}</div>
				<button className="voteButton" name={this.props.name} image={this.props.image} onClick={this.newVote}>VOTE</button>
			</div>
			)
	}
});

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
	render: function() {
		const bandBoxes = this.state.bands.map((band, index, array) => {
			if (!band.images[0]) {
				band.images.push({url: 'http://www.emgreenfield.com/UploadedFiles/Product/no_image.png'});
			};
			return (
				<BandBox key={index} name={band.name} image={band.images[0].url}/>
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
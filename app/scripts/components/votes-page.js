import React from 'react';
import NavBar from './navbar.js';
import VotesArea from './votes-area.js';
import Footer from './footer.js';

const VotesPage = React.createClass({
	getInitialState: function() {
		return {bands: []}
	},
	componentDidMount: function() {
		bands.fetch();
		bands.on('add', () => {
			this.setState({bands: bands});
		});
	}
	render: function() {
	const bandBoxes = this.state.bands.map((val, index, array) => {
			if (!val.images[0]) {
				val.images.push({url: 'http://www.emgreenfield.com/UploadedFiles/Product/no_image.png'});
			};
			return (
				<div className="bandSearchBox"
					key={index}>
					<img ref="pic" src={val.images[0].url}/>
					<div ref="name">{val.name}</div>
					<div className="voteBox">
						<button onClick={this.newVote}>Cast Your Vote!</button>
					</div>
				</div>
				);
		});



		return <div>
				<NavBar/>
				<VotesArea/>
				<Footer/>
				</div>
	}
});

export default VotesPage;



	render: function() {
		const unicornRows = this.state.unicorns.map((val, index, array) => {
			return (
				<UnicornRow 
					name={val.get('name')}
					color={val.get('color')}
					power={val.get('power')} />
			)
		});
		return (
			<div>
				<UniForm/>
				{unicornRows}
			</div>
		)
	}
});

export default App;
import React from 'react';
import $ from 'jquery';

const SearchComponent = React.createClass({

	render: function() {
		return <form onSubmit={this.handleSubmit}>
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
				</form>;
	}
});

export default SearchComponent;
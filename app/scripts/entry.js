import './../styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';

// This file should just render the stuff in the app.js file unless I need to include the router
// stuff here.

const TestComponent = React.createClass({
	render: function() {
		return <h1>Test~</h1>;
	}
});

ReactDOM.render(<TestComponent />, document.querySelector('main'));
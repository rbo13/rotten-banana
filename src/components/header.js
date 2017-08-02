import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './header';

export default class App extends Component {

	render() {
		return (
			<header className="header">
				<h1>Rotten Banana</h1>
			</header>
		);
	}
}

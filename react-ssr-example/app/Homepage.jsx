import React, { Component } from 'react';
import Helmet from 'react-helmet';

import './Homepage.scss';
import Menu from './Menu';

export default class Homepage extends Component {
	render() {
		return (
			<div>
				<Helmet title="Homepage" />
				<Menu />
				<h1 className="blue">Homepage</h1>
			</div>
		);
	}
}

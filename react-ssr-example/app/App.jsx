import React, { Component } from 'react';
import Helmet from 'react-helmet';

import Routes from './Routes';

export default class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Helmet
					htmlAttributes={{lang: "en", amp: undefined}} // amp takes no value
					titleTemplate="%s | Serenade Dates"
					titleAttributes={{itemprop: "name", lang: "en"}}
					meta={[
						{name: "description", content: "Server side rendering example"},
						{name: "viewport", content: "width=device-width, initial-scale=1"},
					]}
				/>
				<Routes />
			</div>
		);
	}
}

import React, { Component } from "react";
import Header from "../../components/Header/Header";

import Section1 from "./Section1/Section1";
import Section2 from "./Section2/Section2";

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div>
				<Header />
				<Section1 />
				<Section2 />
			</div>
		);
	}
}

export default Home;

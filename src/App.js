import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";

const theme = {
	fg: "palevioletred",
	bg: "white",
};

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="Container">
				<ThemeProvider theme={theme}>
					<Router>
						<Switch>
							<Route path="/" exact component={Home} />
							<Route component={Login} />
						</Switch>
					</Router>
				</ThemeProvider>
			</div>
		);
	}
}
export default App;

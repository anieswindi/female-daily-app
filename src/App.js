import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Private from "./route/PrivateRoute";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import { connect } from "react-redux";

const theme = {
	fg: "palevioletred",
	bg: "white",
};

const mapStateToProps = (state) => {
	return {
		state: state.users,
	};
};
class App extends Component {
	render() {
		return (
			<div className="Container">
				<ThemeProvider theme={theme}>
					<Router>
						<Switch>
							<Route exact path="/login" component={Login} />
							<Private exact path="/" component={Home} />
						</Switch>
					</Router>
				</ThemeProvider>
			</div>
		);
	}
}
export default connect(mapStateToProps)(App);

import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
							{this.props.state.username &&
							this.props.state.password ? (
								<Route exact path="/home" component={Home} />
							) : (
								<Route exact path="/login" component={Login} />
							)}
						</Switch>
					</Router>
				</ThemeProvider>
			</div>
		);
	}
}
export default connect(mapStateToProps)(App);

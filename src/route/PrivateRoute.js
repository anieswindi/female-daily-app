import React from "react";
import { Redirect, Route } from "react-router-dom";
import store from "../Store";

const PrivateRoute = (props) => {
	const { component: Component, ...rest } = props;
	const { users } = store.getState();

	return (
		<Route
			{...rest}
			render={(props) => {
				if (users.username) {
					return <Component {...props} />;
				} else {
					return <Redirect to="/login" />;
				}
			}}
		/>
	);
};

export default PrivateRoute;

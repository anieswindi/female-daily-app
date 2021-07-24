import React from "react";
import { Redirect, Route } from "react-router-dom";
import Layout from "../HOC/Layout/Layout";
import store from "../Store";

const PrivateRoute = (props) => {
	const { component: Component, level, ...rest } = props;
	const { user } = store.getState();

	return (
		<Route
			{...rest}
			render={(props) => {
				if (user.token) {
					if (!level || parseInt(user.access_level) >= level) {
						return (
							<Layout>
								<Component {...props} />,
							</Layout>
						);
					} else {
						return <Redirect to="/" />;
					}
				} else {
					return <Redirect to="/login" />;
				}
			}}
		/>
	);
};

export default PrivateRoute;

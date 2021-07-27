import React, { useState } from "react";
import styles from "./Login.module.css";
import login from "../../assets/logo.png";
import * as users from "../../actions/usersAction";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(false);

	const submitLogin = (e) => {
		e.preventDefault();
		if (username && password) {
			const user = {
				id: 1,
				username: username,
				password: password,
			};
			users.setUser(user);
			window.location.assign("/")
		} else {
			setError(true);
		}
	};
	return (
		<div className={styles.Login}>
			<div className={styles.Wrapper}>
				<form onSubmit={(e) => submitLogin(e)}>
					<div className={styles.Div}>
						<div className={styles.Top}>
							<div className={styles.Logs}>
								<div className={styles.Logo}>
									<img src={login} alt="login_img" />
								</div>
								<span className={styles.TextMini}>
									*Please input username and password
								</span>

								<input
									placeholder="username"
									value={username}
									type="text"
									onChange={(e) =>
										setUsername(e.target.value)
									}
									required
								/>

								<input
									placeholder="password"
									value={password}
									type="password"
									onChange={(e) =>
										setPassword(e.target.value)
									}
									required
								/>
							</div>
						</div>
						<button type="submit">
							<span className={styles.TextLog}>LOG IN</span>
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;

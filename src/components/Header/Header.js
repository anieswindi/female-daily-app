import React from "react";
import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBars,
	faUserCircle,
	faSearch,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/logo.png";

function Header(props) {
	return (
		<div className={styles.Header}>
			<div className={styles.Wrapper}>
				<div>
					<FontAwesomeIcon icon={faBars} />
				</div>
				<div>
					<img src={logo} alt="logo" />
				</div>
				<div>
					<div className={styles.Card}>
						<div className={styles.Icon}>
							<FontAwesomeIcon icon={faSearch} />
						</div>
						<input
							type="text"
							className="form-control"
							placeholder="Search products, articles, topics,brands, etc"
						/>
					</div>
				</div>
				<div>
					<div className={styles.Login}>
						<FontAwesomeIcon icon={faUserCircle} />
						<span>LOGIN / SIGNUP</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;

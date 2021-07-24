import React, { Component } from "react";
import styles from "./Section2.module.css";
import example_product from "../../../assets/example_product.png";
import avatar from "../../../assets/avatar.png";

class Section2 extends Component {
	render() {
		return (
			<div className={styles.Section}>
				<div className={styles.Wrapper}>
					<h1>Editor's Choice</h1>
					<h2>Curated with love</h2>
					<div className={styles.Board}>
						<div className={styles.Grouped}>
							<div className={styles.Card}>
								<div>
									<img src={example_product} alt="example" />
								</div>
								<div
									style={{
										display: "flex",
										flexDirection: "column",
										padding: "1rem",
									}}
								>
									<span>JUICE BEAUTY</span>
									<span>Pito pigments</span>
									<span>Rosy Beige</span>
								</div>
								<div className={styles.CardAbsolute}>
									<div
										style={{
											display: "flex",
											flexDirection: "row",
											width: "100%",
											height: "100%",
										}}
									>
										<img src={avatar} alt="avatar" />
										<div>
											<span>Arinda</span>
											<span>Senior Editor</span>
										</div>
									</div>
								</div>
							</div>
							{/* <div className={styles.CardAbsolute}></div> */}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Section2;

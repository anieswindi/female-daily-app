import React, { Component } from "react";
import styles from "./Section2.module.css";
import example_product from "../../../assets/example_product.png";
import avatar from "../../../assets/avatar.png";

class Section2 extends Component {
	render() {
		const Cards = [];

		for (let i = 0; i <= 3; i++) {
			Cards.push(
				<div className={styles.Grouped}>
					<div className={styles.Card}>
						<div className={styles.CardA}>
							<img src={example_product} alt="example" />
						</div>
						<div className={styles.TextedBottom}>
							<span style={{ fontSize: "24px" }}>
								JUICE BEAUTY
							</span>
							<span>Pito pigments</span>
							<span>Rosy Beige</span>
						</div>
						<div className={styles.CardAbsolute}>
							<div
								style={{
									display: "flex",
									flexDirection: "row",
									height: "100%",
									padding: "0 2rem",
								}}
							>
								<div className={styles.Avatar}>
									<img src={avatar} alt="avatar" />
								</div>
								<div className={styles.Texted}>
									<span>Arinda</span>
									<span>Senior Editor</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			);
		}
		return (
			<div className={styles.Section}>
				<div className={styles.Wrapper}>
					<h1>Editor's Choice</h1>
					<h2>Curated with love</h2>
					<div className={styles.Board}>{Cards}</div>
				</div>
			</div>
		);
	}
}

export default Section2;

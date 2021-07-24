import React, { Component } from "react";
import styles from "./Section3.module.css";
import girls from "../../../assets/girls.png";
import puff from "../../../assets/puff.png";

class Section3 extends Component {
	render() {
		const Cards = [];

		for (let i = 0; i <= 2; i++) {
			Cards.push(
				<div className={styles.Cards}>
					<div className={styles.Images}>
						<img src={puff} alt="puff" />
					</div>
					<div className={styles.CardsBtm}>
						<span
							style={{
								color: "#d82a4f",
								fontSize: "24px",
								fontWeight: "bold",
							}}
						>
							Match Skin Type
						</span>
						<span
							style={{
								color: "black",
								fontSize: "24px",
								fontWeight: "bold",
							}}
						>
							VAL BY VALERIE THOMAS
						</span>
						<span>Pure Pressed Blush</span>
					</div>
				</div>
			);
		}
		return (
			<div className={styles.Section}>
				<div className={styles.Grouped1}>
					<div className={styles.Left}>
						<img src={girls} alt="girls" />
						<div className={styles.Texted}>
							<span
								style={{
									fontSize: "36px",
									fontWeight: "bold",
									fontFamily: "Open Sans",
									marginBottom: "2rem",
								}}
							>
								Looking for product that are just simply perfect
								for you?
							</span>
							<span
								style={{
									fontSize: "24px",
									fontWeight: "bold",
									fontFamily: "Open Sans",
									marginBottom: "2rem",
								}}
							>
								Here are some product that we believe match your
								skin, hair, and body! HAve we mentioned that
								they solved your concerns too?
							</span>
							<div className={styles.Bottom}>
								<button>See My Matches</button>
							</div>
						</div>
					</div>
					<div className={styles.Center}>
						<div className={styles.Inner}>{Cards}</div>{" "}
					</div>
					<div className={styles.Right}></div>
				</div>
				<div className={styles.Grouped2}>
					<div className={styles.InternalC}>
						<span>Horizontal 970x250</span>
						<span>(Internal Campaign Only)</span>
					</div>
				</div>
			</div>
		);
	}
}

export default Section3;

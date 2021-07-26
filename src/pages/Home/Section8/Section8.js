import React, { Component } from "react";
import styles from "./Section8.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import review from "../../../assets/reviews.png";
import puff from "../../../assets/puff.png";

class Section8 extends Component {
	render() {
		const Cards = [];

		for (let i = 0; i <= 4; i++) {
			Cards.push(
				<div className={styles.Cards} key={`images-of-index${i}`}>
					<div className={styles.Images}>
						<img src={i % 2 === 0 ? puff : review} alt="puff" />
					</div>
					<div className={styles.CardsBtm}>
						<span className={styles.TitleProduct}>
							Match Skin Type
						</span>
						<span className={styles.SubContent}>
							VAL BY VALERIE THOMAS
						</span>
						<span className={styles.TextMini}>Pure Pressed Blush</span>
					</div>
				</div>
			);
		}
		return (
			<div className={styles.Section}>
				<div className={styles.Wrapper}>
					<h1>Trending This Week</h1>
					<div className={styles.Texted}>
						<h2>See our weekly most reviewed products</h2>
						<div
							style={{
								display: "flex",
								flexDirection: "row",
								justifyContent: "flex-end",
								width: "20%",
							}}
						>
							<span
								style={{
									display: "flex",
									justifyContent: "center",
									margin: "auto",
									color: "#b65068",
									fontSize: "24px",
									fontFamily: "Open Sans",
								}}
							>
								{/* See more */}
							</span>
							<div className={styles.Icon}>
								{/* <FontAwesomeIcon icon={faChevronRight} /> */}
							</div>
						</div>
					</div>
					<div className={styles.Grouped}>{Cards}</div>
				</div>
			</div>
		);
	}
}

export default Section8;

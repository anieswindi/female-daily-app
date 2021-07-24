import React, { Component } from "react";
import styles from "./Section4.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import article_img from "../../../assets/article_img.png";

class Section4 extends Component {
	render() {
		const Cards = [];
		for (let i = 0; i <= 5; i++) {
			Cards.push(
				<div className={styles.GridItem} key={`card-articles-${i}`}>
					<div className={styles.ImgOnly}>
						<img src={article_img} alt="articles_img" />
					</div>
					<div className={styles.TextOnly}>
						<span
							style={{
								color: "black",
								fontSize: "24px",
								fontWeight: "bold",
							}}
						>
							9 Best face oils for sensitive skin
						</span>
						<span
							style={{
								color: "#7d7d7d",
								fontSize: "18px",
							}}
						>
							Username | &nbsp; 2 hours ago
						</span>
					</div>
				</div>
			);
		}
		return (
			<div className={styles.Section}>
				<div className={styles.Wrapper}>
					<h1>Latest Articles</h1>
					<div className={styles.Texted}>
						<h2>So you can make better purchase decision</h2>
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
                                    color : "#b65068",
                                    fontSize : "24px",
                                    fontFamily : "Open Sans"
								}}
							>
								See more
							</span>
							<div className={styles.Icon}>
								<FontAwesomeIcon icon={faChevronRight} />
							</div>
						</div>
					</div>
					<div className={styles.Grouped}>{Cards}</div>
				</div>
			</div>
		);
	}
}

export default Section4;

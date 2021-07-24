import React, { Component } from "react";
import styles from "./Section5.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import review_product from "../../../assets/review_product.png";
import avatar from "../../../assets/avatar.png";

class Section5 extends Component {
	render() {
		const Cards = [];
		for (let i = 0; i <= 1; i++) {
			Cards.push(
				<div className={styles.GridItem}>
					<div className={styles.Top}>
						<img src={review_product} alt="reviews" />
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								width: "60%",
								justifyContent: "center",
							}}
						>
							<span
								style={{
									color: "black",
									fontSize: "20px",
									fontWeight: "bold",
								}}
							>
								VAL BY VALERIE THOMAS
							</span>
							<span>CE Ferulic</span>
						</div>
					</div>
					<hr />
					<div className={styles.Bottom}>
						<div className={styles.BottomOne}>
							star
							<span>2 hours ago</span>
						</div>
						<div className={styles.TextedContent}>
							<span className={styles.Contents}>
								Lorem Ipsum is simply dummy text of the printing
								and typesetting industry. Lorem Ipsum has been
								the industry's standard dummy text ever since
								the 1500s, when an unknown printer took a galley
								of type and scrambled it to make a type specimen
								book. It has survived not only five centuries,
								but also the leap into electronic typesetting,
								remaining essentially unchanged. It was
								popularised in the 1960s with the release of
								Letraset sheets containing Lorem Ipsum passages,
								and more recently with desktop publishing
								software like Aldus PageMaker including versions
								of Lorem Ipsum
							</span>
						</div>
					</div>
					<div className={styles.Avatar}>
							<div className={styles.ImgOnly}>
								<img src={avatar} alt="avatars" />
							</div>
							<span>Anies Windiarti</span>
							<span>Developer</span>
					</div>
				</div>
			);
		}
		return (
			<div className={styles.Section}>
				<div className={styles.Wrapper}>
					<h1>Latest Reviews</h1>
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
									color: "#b65068",
									fontSize: "24px",
									fontFamily: "Open Sans",
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

export default Section5;

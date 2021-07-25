import React, { Component } from "react";
import styles from "./Section9.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import nivea from "../../../assets/nivew.png";
import body_shop from "../../../assets/body_shop.png";
import skII from "../../../assets/sk_ii.png";
import ordinary from "../../../assets/ordinary.png";
import maybelline from "../../../assets/maybelline.png";
import innisfree from "../../../assets/innisfree-logo.png"

class Section9 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			Brands: [
				{
					id: 0,
					src: nivea,
				},
				{
					id: 1,
					src: body_shop,
				},
				{
					id: 2,
					src: skII,
				},
				{
					id: 3,
					src: ordinary,
				},
				{
					id: 4,
					src: maybelline,
				},
				{
					id: 5,
					src: innisfree,
				},
			],
		};
	}
	render() {
		let Cards = this.state.Brands.map((brand, index) => {
			return (
				<div className={styles.Item} key={`brands-index-${index}`}>
					<img src={brand.src} alt={`images-${index}`} />
				</div>
			);
		});
		return (
			<div className={styles.Section}>
				<div className={styles.Wrapper}>
					<h1>Top Brands</h1>
					<div className={styles.Texted}>
						<h2>We all know and love</h2>
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
					<div className={styles.Contents}>
						<span className={styles.TextTitle}>
							Female Daily - Find everything you want to know
							about beauty on Female Day
						</span>
						<span className={styles.TextContent}>
							Product reviews, tips & tricks, expert & customer
							opinios, beauty tutorial, discussions, beauty
							workshops, anything!
						</span>
						<span className={styles.TextContent}>
							We are here to be your friendly solution to all
							things beauty, inside and out.
						</span>
					</div>
				</div>
			</div>
		);
	}
}

export default Section9;

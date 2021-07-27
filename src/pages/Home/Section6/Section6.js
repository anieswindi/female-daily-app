import React, { Component } from "react";
import styles from "./Section6.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faChevronRight,
	faUser,
	faList,
	faCommentAlt,
} from "@fortawesome/free-solid-svg-icons";
import popular_avatar from "../../../assets/popular_avatar.png";
import embrace from "../../../assets/embrace.png";
import embrace2 from "../../../assets/embrace2.png";
import embrace3 from "../../../assets/embrace3.png"

class Section6 extends Component {
	render() {
		const Cards = [];
		for (let i = 0; i <= 3; i++) {
			let img;
			switch (i) {
				case 0:
					img = popular_avatar;
					break;
				case 1:
					img = embrace;
					break;
				case 2:
					img = embrace2;
					break;
				case 3:
					img = embrace3;
					break;
				default:
			}

			Cards.push(
				<div className={styles.GridItem} key={`card-articles-${i}`}>
					<div className={styles.Grid1}>
						<div className={styles.ImgOnly}>
							<img src={img} alt="popular_ava" />
						</div>
					</div>
					<div className={styles.Grid2}>
						<span>Embrace The Curl</span>
					</div>
					<div className={styles.Grid3}>
						<div className={styles.Div1}>
							<FontAwesomeIcon icon={faUser} />
							<FontAwesomeIcon icon={faList} />
							<FontAwesomeIcon icon={faCommentAlt} />
						</div>
						<div className={styles.Div2}>
							<span>May our curls pop and never stop!</span>
						</div>
					</div>
				</div>
			);
		}
		return (
			<div className={styles.Section}>
				<div className={styles.Wrapper}>
					<h1>Popular Groups</h1>
					<div className={styles.Texted}>
						<h2>Where the beauty TALK here</h2>
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

export default Section6;

import React, { Component } from "react";
import styles from "./Section7.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import video_latest from "../../../assets/video_latest.png";
import v_example from "../../../assets/vide_exmp.png"

class Section7 extends Component {
	render() {
		return (
			<div className={styles.Section}>
				<div className={styles.Wrapper}>
					<h1>Latest Videos</h1>
					<div className={styles.Texted}>
						<h2>Watch and learn, ladies</h2>
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
					<div className={styles.Grouped}>
						<div className={styles.Grid1}>
							<img src={video_latest} alt="video_latest" />
						</div>
						<div className={styles.Grid2}>
							<div className={styles.Box}>
								<img src={v_example} alt="video_example" />
							</div>
							<div className={styles.Box}>
								<img src={v_example} alt="video_example" />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Section7;

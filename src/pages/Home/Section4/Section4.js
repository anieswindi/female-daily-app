import React, { Component } from "react";
import styles from "./Section4.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import article_img from "../../../assets/article_img.png";
import api from "../../../api/api";

class Section4 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			Articles: [],
		};
		this.getInfo = this.getInfo.bind(this);
	}

	componentDidMount() {
		this.getInfo();
	}
	getInfo() {
		const apies = new api();
		apies
			.getInfo()
			.then((res) => {
				this.setState({ Articles: res.data["latest articles"] });
			})
			.catch((error) => {
				console.log("error =>",error);
			});
	}
	render() {
		const Cards = this.state.Articles.map((article, index) => {

			//article.image get error
			return (
				<div className={styles.GridItem} key={`card-articles-${index}`}>
					<div className={styles.ImgOnly}>
						<img src={article_img} alt="article" />
					</div>
					<div className={styles.TextOnly}>
						<span className={styles.SubContent}>
							{article.title}
						</span>
						<span className={styles.TextedMini}>
							{article.author} | &nbsp; {article.published_at}
						</span>
					</div>
				</div>
			);
		});

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

export default Section4;

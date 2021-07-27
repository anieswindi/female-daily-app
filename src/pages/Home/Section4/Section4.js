import React, { Component } from "react";
import styles from "./Section4.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import article_img from "../../../assets/article_img.png";
import { getInfo } from "../../../actions/infoAction";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
	return {
		Articles: state.info.Articles,
	};
};

class Section4 extends Component {
	componentDidMount() {
		this.props.dispatch(getInfo());
	}

	render() {
		const Cards =
			this.props.Articles !== null ? (
				this.props.Articles.map((article, index) => {
					return (
						<div
							className={styles.GridItem}
							key={`card-articles-${index}`}
						>
							<div className={styles.ImgOnly}>
								<img src={article_img} alt="article" />
							</div>
							<div className={styles.TextOnly}>
								<span className={styles.SubContent}>
									{article.title}
								</span>
								<span className={styles.TextedMini}>
									{article.author} | &nbsp;{" "}
									{article.published_at}
								</span>
							</div>
						</div>
					);
				})
			) : (
				<div
					style={{
						width: "100%",
						height: "100%",
						display: "flex",
						justifyContent: "center",
					}}
				>
					<h4>No data of Latest Articles</h4>
				</div>
			);

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

export default connect(mapStateToProps)(Section4);

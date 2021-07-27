import React, { Component } from "react";
import styles from "./Section5.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import avatar from "../../../assets/avatar.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { connect } from "react-redux";
import { getInfo } from "../../../actions/infoAction";
import ReactStars from "react-rating-stars-component";

const mapStateToProps = (state) => {
	return {
		Reviews: state.info.Reviews,
	};
};

class Section5 extends Component {
	componentDidMount() {
		this.props.dispatch(getInfo());
	}
	render() {
		const settings = {
			dots: true,
			slidesToShow: 2,
			slidesToScroll: 2,
			infinite: false,
			appendDots: (dots) => (
				<div
					style={{
						backgroundColor: "transparent",
						borderRadius: "10px",
					}}
				>
					<ul style={{ margin: "0px", padding: "unset" }}>
						{" "}
						{dots}{" "}
					</ul>
				</div>
			),
		};
		const Cards =
			this.props.Reviews !== null ? (
				this.props.Reviews.map((review, index) => {
					return (
						<div
							className={styles.GridItem}
							key={`reviews-from-${index}`}
						>
							<div className={styles.Top}>
								<img src={review.product.image} alt="reviews" />
								<div
									style={{
										display: "flex",
										flexDirection: "column",
										width: "60%",
										justifyContent: "center",
									}}
								>
									<span className={styles.SubContent}>
										{review.product.desc}
									</span>
									<span>{review.product.name}</span>
								</div>
							</div>
							<hr />
							<div className={styles.Bottom}>
								<div className={styles.BottomOne}>
									<div className={styles.Stars}>
										<ReactStars
											size={30}
											value={4.9}
											edit={false}
											activeColor="#dc4f6d"
											color="#cfcfcf"
										/>
									</div>

									<span>2 hours ago</span>
								</div>
								<div className={styles.TextedContent}>
									<span className={styles.Contents}>
										{review.comment}
									</span>
								</div>
							</div>
							<div className={styles.Avatar}>
								<div className={styles.ImgOnly}>
									<img src={avatar} alt="avatars" />
								</div>
								<span>{review.user}</span>
								<span>Developer</span>
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
					<h4>No data of Editor's Choice</h4>
				</div>
			);

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
						<div className={styles.None}></div>
					</div>
					<div className={styles.Grouped}>
						<div className={styles.Grouped1}>
							<Slider {...settings}>{Cards}</Slider>
						</div>
						<div className={styles.Grouped2}>
							<div className={styles.Mr2}>
								<span className={styles.TextFrame}>
									Mr2 300x250
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default connect(mapStateToProps, null)(Section5);

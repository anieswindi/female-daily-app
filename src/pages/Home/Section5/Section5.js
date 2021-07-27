import React, { Component } from "react";
import styles from "./Section5.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faChevronRight,
	faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import avatar from "../../../assets/avatar.png";
import api from "../../../api/api";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Section5 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			Reviews: [],
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
				this.setState({ Reviews: res.data["latest review"] });
			})
			.catch((error) => {
				console.log(error);
			});
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
					<ul style={{ margin: "0px", padding : "unset" }}> {dots} </ul>
				</div>
			),
		};
		const Cards = this.state.Reviews.map((review, index) => {
			return (
				<div className={styles.GridItem} key={`reviews-from-${index}`}>
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
							{review.star} || &nbsp;
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
		});

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
							<div className={styles.Mr2}>Mr2 300x250</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Section5;

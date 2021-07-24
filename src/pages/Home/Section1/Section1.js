import React, { Component } from "react";
import styles from "./Section1.module.css"

class Section1 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			Menues: [
				{
					id: 0,
					title: "SKINCARE",
				},
				{
					id: 1,
					title: "MAKE UP",
				},
				{
					id: 2,
					title: "BODY",
				},
				{
					id: 3,
					title: "HAIR",
				},
				{
					id: 4,
					title: "FRAGRANCE",
				},
				{
					id: 5,
					title: "NAILS",
				},
				{
					id: 6,
					title: "TOOLS",
				},
				{
					id: 7,
					title: "BRANDS",
				},
			],
		};
	}
	render() {
		const { Menues } = this.state;
		return (
			<div className={styles.Section}>
				<div className={styles.ContentA}>
					{Menues.map((menu) => {
						return (
							<div
								className={styles.TextTitle}
								key={`menu-index-${menu.id}`}
							>
								<span>{menu.title}</span>
							</div>
						);
					})}
				</div>
				<div className={styles.ContentB}>
					<div className={styles.TopBrand}>
						<span>Top Frame 970x50</span>
					</div>
				</div>
				<div className={styles.ContentB}>
					<div className={styles.Billboard}>
						<span>Billboard 970x250</span>
					</div>
				</div>
			</div>
		);
	}
}

export default Section1;

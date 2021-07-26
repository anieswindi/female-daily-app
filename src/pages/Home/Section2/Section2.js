import React, { Component } from "react";
import styles from "./Section2.module.css";
import example_product from "../../../assets/example_product.png";
import avatar from "../../../assets/avatar.png";
import api from "../../../api/api";

class Section2 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			Editors: [],
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
				this.setState({ Editors: res.data["editor's choice"] });
			})
			.catch((error) => {
				console.log(error);
			});
	}
	render() {
		const Cards = this.state.Editors.map((editor, index) => {
			console.log(editor);
			return (
				<div className={styles.Grouped} key={`grouped-for-${index}`}>
					<div className={styles.Card}>
						<div className={styles.CardA}>
							<img src={editor.product.image} alt="example" />
						</div>
						<div className={styles.TextedBottom}>
							<span>{editor.product.name}</span>
							<span>{editor.description}</span>
							<span>Rosy Beige</span>
						</div>
						<div className={styles.CardAbsolute}>
							<div className={styles.Styles}>
								<div className={styles.Avatar}>
									<img src={avatar} alt="avatar" />
								</div>
								<div className={styles.Texted}>
									<span className={styles.EditorText}>
										{editor.editor}
									</span>
									<span className={styles.EditorJob}>
										{editor.role}
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			);
		});

		return (
			<div className={styles.Section}>
				<div className={styles.Wrapper}>
					<h1>Editor's Choice</h1>
					<h2>Curated with love</h2>
					<div className={styles.Board}>{Cards}</div>
				</div>
			</div>
		);
	}
}

export default Section2;

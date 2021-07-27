import React, { Component } from "react";
import styles from "./Section2.module.css";
import avatar from "../../../assets/avatar.png";
import { connect } from "react-redux";
import { getInfo } from "../../../actions/infoAction";

const mapStateToProps = (state) => {
	return {
		Editors: state.info.Editors,
	};
};

class Section2 extends Component {
	componentDidMount() {
		this.props.dispatch(getInfo());
	}
	render() {
		const Cards =
			this.props.Editors !== null ? (
				this.props.Editors.map((editor, index) => {
					return (
						<div
							className={styles.Grouped}
							key={`grouped-for-${index}`}
						>
							<div className={styles.Card}>
								<div className={styles.CardA}>
									<img
										src={editor.product.image}
										alt="example"
									/>
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
					<h1>Editor's Choice</h1>
					<h2>Curated with love</h2>
					<div className={styles.Board}>{Cards}</div>
				</div>
			</div>
		);
	}
}

export default connect(mapStateToProps, null)(Section2);

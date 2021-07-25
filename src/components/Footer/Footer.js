import React from "react";
import styles from "./Footer.module.css";
import icons from "../../assets/logo.png";
import appStore from "../../assets/app_store.png";
import playStore from "../../assets/google_play_img.png";
import {
	FacebookIcon,
	TwitterIcon,
	TelegramIcon,
	WhatsappIcon,
	EmailIcon,
} from "react-share";

function Footer(props) {
	const Contents = [
		{
			id: 0,
			title: "About Us",
		},
		{
			id: 1,
			title: "Terms and Condition",
		},
		{
			id: 2,
			title: "Awards",
		},
		{
			id: 3,
			title: "Feedback",
		},
		{
			id: 4,
			title: "Privacy and Policy",
		},
		{
			id: 5,
			title: "Newsletter",
		},
		{
			id: 6,
			title: "Contact",
		},
		{
			id: 7,
			title: "Help",
		},
	];

	console.log("footer")
	return (
		<div className={styles.Footer}>
			<div className={styles.Wrapper}>
				<div className={styles.Wrap1}>
					<div className={styles.Child1}>
						<div className={styles.Box}>
							<span>About Us</span>
							<span>Feedback</span>
							<span>Contact</span>
						</div>
						<div className={styles.Box}>
							<span>Terms and Condition</span>
							<span>Privacy and Policy</span>
							<span>Help</span>
						</div>
						<div className={styles.Box}>
							<span>Awards</span>
							<span>Newsletter</span>
							<span>&nbsp;</span>
						</div>
					</div>
					<div className={styles.Child2}>
						<div className={styles.ImgOnly}>
							<img src={icons} alt="icons" />
						</div>
						<div style={{ marginTop: "1rem" }}>
							{" "}
							<span>
								Copyright 2015-2017 Female Daily Network &nbsp;.
								All right reserved
							</span>
						</div>
					</div>
				</div>
				<div className={styles.Wrap2}>
					<div className={styles.Childs1}>
						<span>Download Our Mobile Apps</span>
						<div className={styles.IconsDownload}>
							<img src={appStore} alt="appStore" />
							<img src={playStore} alt="playStore" />
						</div>
					</div>
					<div className={styles.Childs2}>
						<FacebookIcon size={70} round={true} />
						<TwitterIcon size={70} round={true} />
						<TelegramIcon size={70} round={true} />
						<WhatsappIcon size={70} round={true} />
						<EmailIcon size={70} round={true} />
					</div>
				</div>
			</div>

			<div className={styles.BottomFrame}>
				<div className={styles.Frame}>
					<span>Bottom frame 970x50</span>
				</div>
			</div>
		</div>
	);
}

export default Footer;

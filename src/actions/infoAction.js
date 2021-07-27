import axios from "axios";

export const getInfo = () => {
	return (dispatch) => {
		axios
			.get("https://virtserver.swaggerhub.com/hqms/FDN-WP/0.1/wp")
			.then((res) => {
				dispatch({
					type: "GET_INFO",
					payload: {
						editors: res.data["editor's choice"],
						articles: res.data["latest articles"],
						reviews: res.data["latest review"],
						errorMsg: false,
					},
				});
			})
			.catch((err) => console.log(err));
	};
};

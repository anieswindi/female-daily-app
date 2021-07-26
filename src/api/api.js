import axios from "axios";

class api {
	base_api = "https://virtserver.swaggerhub.com/hqms/FDN-WP/0.1/wp";

	getInfo() {
		return axios.get(this.base_api, {
			headers: {
				"Content-Type": "application/json",
			},
		});
	}
}

export default api;

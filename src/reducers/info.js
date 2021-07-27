const infoState = {
	Editors: null,
	Articles: null,
	Reviews: null,
	Error: false,
};

const info = (state = infoState, action) => {
	switch (action.type) {
		case "GET_INFO":
			return {
				...state,
				Editors: action.payload.editors,
				Articles: action.payload.articles,
				Reviews: action.payload.reviews,
				Error: action.payload.errorMsg,
			};
		default:
			return state;
	}
};

export default info;

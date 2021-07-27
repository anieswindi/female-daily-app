const user = JSON.parse(localStorage.getItem("users"));

const initialState = user
	? {
			id: user.id,
			username: user.username,
			password: user.password,
	  }
	: {
			id: null,
			username: null,
			password: null,
	  };

const users = (state = initialState, action) => {
	switch (action.type) {
		case "POST_USER":
			return state;
		case "DELETE_USER":
			localStorage.removeItem("users");
			return state;
		default:
			return state;
	}
};

export default users;

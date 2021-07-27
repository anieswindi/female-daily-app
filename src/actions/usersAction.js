import store from "../Store";

function setUser(data) {
	setLocalStorage(data);
	store.dispatch({ type: "POST_USER", payload: "Learn about actions" });
}

function setLocalStorage(user) {
	localStorage.setItem("users", JSON.stringify(user));
}

function logout() {
	store.dispatch({ type: "DELETE_USER", payload: "Learn about actions" });
}

export { setUser, logout };

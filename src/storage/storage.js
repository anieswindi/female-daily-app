import cookie from "cookiejs";

function getUserStorage() {
	return cookie.get("users");
}

function setUserStorage(user) {
	cookie.set("users", JSON.stringify(user));
}

function removeUser() {
	cookie.remove("users");
}
export { getUserStorage, setUserStorage, removeUser };

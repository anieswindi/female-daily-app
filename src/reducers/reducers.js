import { combineReducers } from "redux";
import users from "./users";
import info from "./info";

export default combineReducers({
	users,
	info,
});

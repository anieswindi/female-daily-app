const redux = require("redux");

const createStore = redux.createStore;

const GlobalState = {
	value: 0,
	rating: 1,
};

//reducer
const rootReducers = (state = GlobalState, action) => {
	switch (action.type) {
		case "ADD_RATING":
			return {
				...state,
				rating: state.rating + action.newRating,
			};
		default:
			return state;
	}
};
//store
const store = createStore(rootReducers);

//subscription'
store.subscribe(() => {
	console.log("store change =>", store);
});

//dispatch action
store.dispatch({ type: "ADD_RATING", newRating: 2 });


export default store

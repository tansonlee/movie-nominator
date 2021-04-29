const reducer = (Movie = {}, action) => {
	switch (action.type) {
		case "SET_MOVIE":
			return action.payload;
		default:
			return Movie;
	}
};

export default reducer;

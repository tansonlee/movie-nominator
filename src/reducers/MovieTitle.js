const reducer = (title = "", action) => {
	switch (action.type) {
		case "CHANGE":
			return action.payload;
		default:
			return title;
	}
};

export default reducer;

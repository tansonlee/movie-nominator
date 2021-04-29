const reducer = (nominations = [], action) => {
	switch (action.type) {
		case "ADD":
			return [...nominations, action.payload];
		case "DELETE":
			return nominations.filter(nomination => nomination.Title !== action.payload.Title);
		case "SET":
			return action.payload;
		default:
			return nominations;
	}
};

export default reducer;

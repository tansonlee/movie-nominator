export const setMovie = newMovie => dispatch => {
	if (!newMovie) {
		console.error("an error occurred");
		return;
	}

	dispatch({ type: "SET_MOVIE", payload: newMovie });
};

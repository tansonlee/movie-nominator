export const setMovie = newMovie => dispatch => {
	dispatch({ type: "SET_MOVIE", payload: newMovie });
};

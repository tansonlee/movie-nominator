export const changeMovieTitle = newTitle => dispatch => {
	dispatch({ type: "CHANGE", payload: newTitle });
};

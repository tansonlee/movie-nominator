export const addNomination = movie => dispatch => {
	dispatch({ type: "ADD", payload: movie });
};

export const deleteNomination = movie => dispatch => {
	dispatch({ type: "DELETE", payload: movie });
};

export const setNominations = nominations => dispatch => {
	dispatch({ type: "SET", payload: nominations });
};

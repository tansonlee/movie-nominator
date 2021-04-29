import { combineReducers } from "redux";

import MovieTitle from "./MovieTitle";
import Movie from "./Movie";
import Nominations from "./Nominations";

export default combineReducers({
	MovieTitle,
	Movie,
	Nominations,
});

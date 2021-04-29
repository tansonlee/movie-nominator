import React from "react";
import "./SearchBar.css";
import { useDispatch } from "react-redux";
import { changeMovieTitle } from "../../actions/MovieTitle";

const SearchBar = () => {
	const dispatch = useDispatch();

	const handleChange = e => {
		dispatch(changeMovieTitle(e.target.value));
	};

	return (
		<div className="searchbar-wrapper">
			<input type="text" placeholder="Search a movie . . ." onChange={e => handleChange(e)} />
		</div>
	);
};

export default SearchBar;

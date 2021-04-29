import React from "react";
import "./SearchedMovie.css";
import { useSelector, useDispatch } from "react-redux";
import { addNomination } from "../../actions/Nominations";
import formatDate from "../../utilities/formatDate";

const Movie = ({ movie }) => {
	const dispatch = useDispatch();
	const nominations = useSelector(state => state.Nominations);
	const title = useSelector(state => state.MovieTitle);

	const alreadyNominated = nominations.reduce(
		(acc, curr) => acc || curr.Title === movie.Title,
		false
	);

	const handleNominate = () => {
		if (alreadyNominated) return;
		dispatch(addNomination(movie));
	};
	console.log(movie);
	console.log(alreadyNominated);
	if (title === "") {
		return (
			<div className="searchedmovie-wrapper">
				<h1>Movie Found</h1>
				<h2>Search something</h2>
			</div>
		);
	}
	return (
		<div className="searchedmovie-wrapper">
			<h1>Searched Movie</h1>
			{movie?.Title ? (
				<div>
					{movie.Poster !== "N/A" && <img src={movie.Poster} alt="movie poster" />}
					<div>
						<h3>{movie.Title}</h3>
						<p>{movie.Genre}</p>
						<p>{formatDate(movie.Released)}</p>
						<p>Runtime: {movie.Runtime}</p>
						<button
							onClick={handleNominate}
							className={alreadyNominated ? "disabled-button" : ""}
						>
							{alreadyNominated ? "Already Nominated" : "Nominate!"}
						</button>
					</div>
				</div>
			) : (
				<h3 className="movie-error">{movie.Error}</h3>
			)}
		</div>
	);
};

export default Movie;

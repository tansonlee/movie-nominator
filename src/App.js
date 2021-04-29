import React, { useEffect } from "react";
import "./App.css";
import { getMovieByTitle } from "./api";
import { useSelector, useDispatch } from "react-redux";
import { setMovie } from "./actions/Movie";

import SearchBar from "./components/SearchBar/SearchBar";
import Movies from "./components/SearchedMovie/SearchedMovie";
import Nominated from "./components/Nominated/Nominated";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";

const App = () => {
	const dispatch = useDispatch();
	const movieTitle = useSelector(state => state.MovieTitle);
	const movie = useSelector(state => state.Movie);
	const nominations = useSelector(state => state.Nominations);

	useEffect(() => {
		// Instantly call the async function inside the
		// useEffect to prevent race conditions
		(async () => {
			const movie = await getMovieByTitle(movieTitle);
			dispatch(setMovie(movie));
		})();
	}, [dispatch, movieTitle]);

	return (
		<div className="app-wrapper">
			<div className="body">
				<h1>Nominate Your Favorite Movies!</h1>
				<h2>Search and nominate any 5 movies for the movie award show.</h2>
				<SearchBar className="search-bar" />
				{nominations.length >= 5 && <Banner />}
				<div className="movie-display">
					<Movies movie={movie} />
					<Nominated />
				</div>
			</div>
			{/* <div className="app-footer"> */}
			<Footer />
			{/* </div> */}
		</div>
	);
};

export default App;

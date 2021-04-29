import axios from "axios";

const baseURL = "http://www.omdbapi.com/?apikey=5ea44cc9&type=movie";

export const getMovieByTitle = async title => {
	try {
		const { data } = await axios.get(`${baseURL}&t=${title}`);
		return data;
	} catch (error) {
		console.error(error);
	}
};

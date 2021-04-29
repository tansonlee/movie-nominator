import axios from "axios";

const baseURL = `http://www.omdbapi.com/?apikey=${process.env.APIKEY}&type=movie`;

export const getMovieByTitle = async title => {
	try {
		const { data } = await axios.get(`${baseURL}&t=${title}`);
		return data;
	} catch (error) {
		console.error(error);
	}
};

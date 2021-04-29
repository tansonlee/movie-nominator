import axios from "axios";

const APIKEY = "5ea44cc9";
const baseURL = `https://www.omdbapi.com/?apikey=${APIKEY}&type=movie`;

export const getMovieByTitle = async title => {
	try {
		const { data } = await axios.get(`${baseURL}&t=${title}`);
		return data;
	} catch (error) {
		console.error(error);
	}
};

import axios from 'axios';

const API_KEY = 'dc6zaTOxFJmzC';
const ROOT_URL = `http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=${API_KEY}`;


export const GET_GIFS = 'GET_GIFS';

export function getGifs() {

	const request = axios.get(ROOT_URL);

	return {
		type: GET_GIFS,
		payload: request
	};
}
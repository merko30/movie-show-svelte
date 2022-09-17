// @ts-nocheck
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

// TODO: load as environment variable
const API_KEY = 'ea949bc8767e1d40d10bede750cc8d0d';

export const fetchMovies = async ({ type = 'popular', mediaType = 'movie', page = 1 } = {}) => {
	return await (
		await fetch(`${TMDB_BASE_URL}/${mediaType}/${type}?api_key=${API_KEY}&page=${page}`)
	).json();
};

export const getDetails = async (id, { mediaType = 'movie' } = {}) => {
	return await (await fetch(`${TMDB_BASE_URL}/${mediaType}/${id}?api_key=${API_KEY}`)).json();
};

export const search = async ({ term, page = 1 }) => {
	return await (
		await fetch(`${TMDB_BASE_URL}/search/multi?api_key=${API_KEY}&query=${term}&page=${page}`)
	).json();
};

export const getCast = async (recordId, type = 'movie') => {
	return await (
		await fetch(`${TMDB_BASE_URL}/${type}/${recordId}/credits?api_key=${API_KEY}`)
	).json();
};

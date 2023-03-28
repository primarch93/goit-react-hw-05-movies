const KEY = 'd32f2b5f1f13943de05e3e10e772a43e';
const BASE_URL = 'https://api.themoviedb.org/3';

axios.defaults.baseURL = BASE_URL;

export async function fetchTrending() {
    const response = await axios.get(`/trending/movie/day?api_key=${KEY}`);
    return response.data.results;
}
export async function fetchMovies(query) {
    const response = await axios.get(`/search/movie?api_key=${KEY}&query=${query}`);
    return response.data.results;
}
export async function fetchMovie(id) {
    const response = await axios.get(`/movie/${id}?api_key=${KEY}`);
    return response.data;
}
export async function fetchCast(id) {
    const response = await axios.get(`/movie/${id}/credits?api_key=${KEY}`);
    return response.data;
}
export async function fetchReviews(id) {
    const response = await axios.get(`/movie/${id}/reviews?api_key=${KEY}`);
    return response.data;
}

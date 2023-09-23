import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "d0cae7e7b29bd8edc50e7f4f3f822fae";

// https://api.themoviedb.org/3/trending/all/day?api_key=d0cae7e7b29bd8edc50e7f4f3f822fae
const moviesByGenreURL="https://api.themoviedb.org/3/discover/movie?api_key=d0cae7e7b29bd8edc50e7f4f3f822fae";

const getTrendingVideos = axios.get(
  movieBaseUrl + "/trending/all/day?api_key=" + api_key
);
const getMovieId=(id)=>
axios.get(moviesByGenreURL+"&with_genres="+id)
export default {
  getTrendingVideos,
  getMovieId
};

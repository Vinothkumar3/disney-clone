
import axios from "axios";

const movieBaseUrl="https://api.themoviedb.org/3"

const api_key="c46c5f5c58a4cefbc7e94f8149fb8eae"

const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=c46c5f5c58a4cefbc7e94f8149fb8eae'
//https://api.themoviedb.org/3/trending/all/day?api_key=c46c5f5c58a4cefbc7e94f8149fb8eae

const getTrendingVideos=axios.get(movieBaseUrl+"/trending/all/day?api_key="+api_key)

const getMovieByGenreId=(genersid)=>
// console.log(movieByGenreBaseURL+"&with_genres="+genersid);
axios.get(movieByGenreBaseURL+"&with_genres="+genersid)

export default{
getTrendingVideos,
getMovieByGenreId
}


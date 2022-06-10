import config from "../config";

export default function getMovies(text){
    return config.searchMovieUrl + text
}
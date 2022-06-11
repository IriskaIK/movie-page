import config from "../config";
function getMovies(text, CreateMovieList, MovieCard){
    return fetch(config.searchMovieUrl + text)
    .then(r =>r.json())
    .then(r=>{
        return r = CreateMovieList(r, MovieCard)
    })
}

    

export{
    getMovies
}
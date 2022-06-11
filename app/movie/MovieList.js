function CreateMovieList(arrOfCards, MovieCardClass){
    let movie_list = []
    
    arrOfCards.results.forEach(element => {
        let card =  new MovieCardClass(element)
        movie_list.push(card)
    });
    return movie_list

}

export{
    CreateMovieList
}
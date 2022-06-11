function renderCards(movie_list, selector){
    movie_list.forEach(element => {
        selector.append(element.getHtml())
    });
}

export {
    renderCards
}
import {getMovies} from './movie/getMovies'
import MovieCard from './movie/movieClassCard'
import {CreateMovieList} from './movie/MovieList'
import { renderCards } from './movie/renderCards'
import {selectCard, unselectCard} from './movie/selectCard'
import {sortByMaxRating, sortByMinRating, sortByNew, sortByOld} from './sortMovie'

document.addEventListener('DOMContentLoaded', ()=>{
    const search = document.querySelector('.search-input ')
    const movie_inner = document.querySelector('.movie-container')
    const grey_bg = document.querySelector('.grey-bg')
    const sort_bar = document.querySelector('.sort_inner')
    
    search.addEventListener('input', (e)=>{
        const text = e.target.value
        movie_inner.innerHTML = ''
        if(text){
            getMovies(text, CreateMovieList, MovieCard)
            .then(r=>{
                renderCards(r, movie_inner)
            })

        }
    })


    sort_bar.addEventListener('click', (e)=>{
        if (e.target.classList.contains('nav_item')){
            if (e.target.classList.contains('max_sort')){
                movie_inner.innerHTML = ''
                getMovies(document.querySelector('.search-input').value, CreateMovieList, MovieCard)
                .then(r=>{
                    r = sortByMaxRating(r)
                    
                    return r
                })
                .then(r=>{
                    renderCards(r, movie_inner)
                })


            }
            else if (e.target.classList.contains('min_sort')){
                movie_inner.innerHTML = ''
                getMovies(document.querySelector('.search-input').value, CreateMovieList, MovieCard)
                .then(r=>{
                    
                    r = sortByMinRating(r)
                    
                    return r
                })
                .then(r=>{
                    renderCards(r, movie_inner)
                })
            }
            else if (e.target.classList.contains('date_old_sort')){
                movie_inner.innerHTML = ''
                getMovies(document.querySelector('.search-input').value, CreateMovieList, MovieCard)
                .then(r=>{
                    r = sortByOld(r)
                    
                    return r
                })
                .then(r=>{
                    renderCards(r, movie_inner)
                })
            }
            else if (e.target.classList.contains('date_new_sort')){
                movie_inner.innerHTML = ''
                getMovies(document.querySelector('.search-input').value, CreateMovieList, MovieCard)
                .then(r=>{
                    r = sortByNew(r)
                    
                    return r
                })
                .then(r=>{
                    renderCards(r, movie_inner)
                })
            }
        }
    })
    selectCard(movie_inner, grey_bg)
    unselectCard(movie_inner, grey_bg)


})
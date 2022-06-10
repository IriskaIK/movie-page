import getMovies from './movie/getMovies'
import MovieCard from './movie/movieClassCard'
import {disableScroll, enableScroll} from './disableScroll'

  
document.addEventListener('DOMContentLoaded', ()=>{
    const search = document.querySelector('.search-input ')
    const movie_inner = document.querySelector('.movie-container')
    const grey_bg = document.querySelector('.grey-bg')
    
    search.addEventListener('input', (e)=>{
        const text = e.target.value
        movie_inner.innerHTML = ''
        if(text){
            fetch(getMovies(text))
                .then(r =>r.json())
                .then(r=>{
                    r.results.forEach(element => {
                        let card =  new MovieCard(element)
                        card.renderCard(movie_inner)
                    });
                })
            }
    })
    movie_inner.addEventListener('click', (e)=>{
        if(document.querySelector('.select')){

        }
        else{
            if(e.target.className=='movie' || e.target.parentElement.className=='movie'){
                disableScroll()

                let select_card
                console.log('click')
                movie_inner.style.marginRight = `17px`
                if(e.target.parentElement.className=='movie'){
                    select_card = e.target.parentElement.cloneNode(true);
                    e.target.parentElement.classList.add('op_1')
                }
                else{
                    
                    select_card = e.target.cloneNode(true);
                    e.target.classList.add('op_1')
                }
                
                select_card.style.top = `${window.scrollY + 130}px`
                select_card.classList.add('select')
                movie_inner.append(select_card)
                if (grey_bg.style.display != 'block'){
                    grey_bg.style.display = 'block'
                    grey_bg.style.zIndex = '1'
                }
                
                select_card.style.zIndex = '1'
            }
        }
        
    })
    grey_bg.addEventListener('click', (e)=>{
        console.log('grey')
        movie_inner.style.marginRight = '0px'
        enableScroll()
        grey_bg.style.display = 'none'
        let op_card = document.querySelector('.op_1')
        op_card.classList.remove('op_1')
        document.querySelector('.select').remove()

    })

})
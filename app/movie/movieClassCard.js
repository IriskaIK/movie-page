export default class MovieCard{
        constructor(data){
            this.html = document.createElement('div')
            this.html.className = 'movie'
            this.average = data.vote_average
            this.img= new Image()
            this.img.classList.add('img', 'loader')
            this.img.addEventListener('load', ()=>{
                
                let s = this.html.querySelector('.loader');
                s.className = 'img'
            })
            
            this.html.append(this.img)
            if (data.poster_path){
                this.img.src = `https://www.themoviedb.org/t/p/w250_and_h141_face${data.poster_path}`
            }
            else{
                this.img.src = 'https://mizez.com/custom/mizez/img/general/no-image-available.png'
            }
            this.html.innerHTML= this.html.innerHTML + `
            <div class="title">${data.title}</div>
            <div class="orig_title">${data.original_title}</div>
            <div class="overview">${data.overview}</div>
            <div class="bottom_text">
                <div class="date">${data.release_date}</div>
                <div class="average">${data.vote_average}</div>
            </div>`
            



        }
        getHtml(){
            return this.html
        }
        getVote_average(){
            return this.average
        }

}

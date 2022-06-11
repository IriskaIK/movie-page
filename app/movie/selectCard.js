import {disableScroll, enableScroll} from './disableScroll'


function selectCard(area, bg){
    area.addEventListener('click', (e)=>{
        if(document.querySelector('.select')){

        }
        else{
            if(e.target.className=='movie' || e.target.parentElement.className=='movie'){
                disableScroll()

                let select_card
                area.style.marginRight = `17px`
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
                area.append(select_card)
                if (bg.style.display != 'block'){
                    bg.style.display = 'block'
                    bg.style.zIndex = '1'
                }
                
                select_card.style.zIndex = '1'
            }
        }
        
    })
}

function unselectCard(area,bg){
    bg.addEventListener('click', (e)=>{
        area.style.marginRight = '0px'
        enableScroll()
        bg.style.display = 'none'
        let op_card = document.querySelector('.op_1')
        op_card.classList.remove('op_1')
        document.querySelector('.select').remove()

    })
}

export{
    selectCard, unselectCard
}
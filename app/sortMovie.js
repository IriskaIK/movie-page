function sortByMaxRating(data){
    data.sort((a,b)=>{
        if(parseFloat(a.getVote_average()) < parseFloat(b.getVote_average())){
            console.log(a.vote_average)
            return 1
        }
        else if(parseFloat(a.getVote_average()) > parseFloat(b.getVote_average())){
            return -1
        }
        else{
            return 0
        }

    })
    return data


}

function sortByMinRating(data){
    data.sort((a,b)=>{
        if(parseFloat(a.getVote_average())> parseFloat(b.getVote_average())){
            console.log(a.vote_average)
            return 1
        }
        else if(parseFloat(a.getVote_average()) < parseFloat(b.getVote_average())){
            return -1
        }
        else{
            return 0
        }
    })
    return data

    

}

export{
    sortByMaxRating, sortByMinRating
}
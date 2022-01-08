

window.onload = async function() { 
    let controller = new MovieRequestController();
    let movieId = GetMovieIdFromUrl()
    let factory = new CardFactory()

    console.log(movieId)
    let response = await controller.resquestByTitle(movieId)
    
    
    let moreDataMovies = await response.Search.map(async  (element, index) => { 
        let movie = await controller.requestById(element.imdbID)
        return movie
    })
    
    if(response.Response == 'True'){
        HideErrorMessage()
        Promise.all(moreDataMovies).then(result =>{
            result.map(item => {
                if(item.Poster != "N/A"){
            
                    let card = factory.CardFactory(item,RedirectFromCard)
                    $('#PageMovies').append(card)
                }
            })
        })
    }else{
        ShowErrorMessage()
    }
}


function HideErrorMessage (){ 
    $('.result-search-error').css('display', 'none')
}
function ShowErrorMessage(){
    $('.result-search-error').css('display', 'block')
}

function GetMovieIdFromUrl(){ 
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const id = parameters.get('s');
    return id
}

function RedirectFromCard(id) {

    window.location.href = `../movie-page/movie-page.html?i=${id}`
}
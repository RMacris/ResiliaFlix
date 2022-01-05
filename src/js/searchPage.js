

window.onload = async function() { 
    let view = new MoviePageView()
    let controller = new MovieRequestController();
    let movieId = GetMovieIdFromUrl()
    let factory = new CardFactory()

    console.log(movieId)
    let response = await controller.resquestByTitle(movieId)
    // let response = await controller.requestById_Test()

    console.warn(response)
    if(response.Response == 'True'){
        HideErrorMessage()
        for(let index in response.Search){
            console.log(index)
        
            if(response.Search[index].Poster != "N/A"){
    
                let card = factory.CardFactory(response.Search[index],RedirectFromCard)
                $('#PageMovies').append(card)
            }
            
            //append the card generated in the movies list in html
        }
    
        view.PopualtePage(response)
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
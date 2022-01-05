



window.onload = async function() { 
    let view = new MoviePageView()
    let controller = new MovieRequestController();
    let movieId = GetMovieIdFromUrl()
    let response = await controller.requestById(movieId)
    // let response = await controller.requestById_Test()

    view.PopualtePage(response)
}


function GetMovieIdFromUrl(){ 
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const id = parameters.get('i');
    return id
}
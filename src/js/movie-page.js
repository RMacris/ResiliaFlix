



window.onload = async function() { 
    let view = new MoviePageView()
    let controller = new MovieRequestController();
    let movieId = GetMovieIdFromUrl()
    let response = await controller.requestById(movieId)
    // let response = await controller.requestById_Test()

    view.PopualtePage(response)
}


function GetMovieIdFromUrl(){ 
    let url = new URL(window.location.href);

    // gets the id from the page url 
    let id = url.searchParams.append('i', 42);
    return id
}
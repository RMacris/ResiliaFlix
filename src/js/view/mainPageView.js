class MainPageView {
    constructor(){
        //TODO: vamos popular essa variavel com uma lista de id's de filmes do imdb, os 12 requisitados
        this.movieList = []
    }


    populateMainPage(id) { 
        const movieRequestController = new MovieRequestController()
        movieRequestController.requestMovieById()
        //TODO: get the elements
        //TODO: set it's data 
    }
}
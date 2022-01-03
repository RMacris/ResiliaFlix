

window.onload = async function () { 
    // lista de ids de filmes selecionados pela equipe
    const moviesId = [1,2,3,4,5,6]

    let movieRequestController = new MovieRequestController();

    let factory = new CardFactory()
    const movieList = await moviesId.map( async movieId => {
        // request a movie data from each id
        const result = await movieRequestController.requestById_Test()
        console.log(result)
        let card = factory.CardFactory(result)
        
        //append the card generated in the movies list in html
        $('#PageMovies').append(card)
        return result 
        // return await movieRequestController.requestById(movieId)
    })
}


window.onload = async function () { 
    // lista de ids de filmes selecionados pela equipe
    const moviesId = [
    'tt5978586','tt11192306','tt1673430','tt7142526',
    'tt0193863','tt1781866','tt2216536','tt0388629',
    'tt7052244','tt7984766','tt6517102','tt2560140'

]

    let movieRequestController = new MovieRequestController();

    let factory = new CardFactory()
    const movieList = await moviesId.map( async movieId => {
        // request a movie data from each id
        const result = await movieRequestController.requestById(movieId)
        console.log(result)
        let card = factory.CardFactory(result,RedirectFromCard)
        
        //append the card generated in the movies list in html
        $('#PageMovies').append(card)
        return result 
        // return await movieRequestController.requestById(movieId)
    })
}


function RedirectFromCard(id) {

    window.location.href = `../movie-page/movie-page.html?i=${id}`
}

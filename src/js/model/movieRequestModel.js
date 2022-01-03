class MovieRequestModel{

    async requestMovieById(id){
        // let view = new View()
        const url = `https://www.omdbapi.com/?apikey=c6027214&i=${id}`
        let apiResponse = await fetch(url).then(response => response.json());
        console.log(apiResponse)
        return apiResponse
   }
    async requestMovieTitle(title){
        // let view = new View()
        const url = `https://www.omdbapi.com/?apikey=c6027214&s=${title}`
        let apiResponse = await fetch(url).then(response => response.json());

    }
}
class MovieRequestController{

    async requestById(id){

        let model = new MovieRequestModel()
        let result = await model.requestMovieById(id)
        console.log(result); //debug

        return result
    }
    async resquestByTitle(title){

        let model = new MovieRequestModel()
        let result = await model.requestMovieByTitle(title)
        console.log(result); //debug

        return result
    }
    async requestById_Test(){
        let model = new MovieRequestModel()
        
        let result = await model.requestMovieById('tt3896198')
        console.log(result); //debug
        return result
     }
    HandleErrorResponse(callback) { 
        callback()
    }

    RedirectToMainPage(){ 
        window.location.href = '../main-page/main-page.js'
    }
    
  }
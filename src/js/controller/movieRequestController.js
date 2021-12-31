class MovieRequestController{
    requestById(id){
        let model = new MovieRequestModel()
        
        let result = model.requestMovieById(id)
        console.log(result); //debug

        return result
     }
    requestById(id){

        let model = new MovieRequestModel()
        let result = model.requestMovieById(id)
        console.log(result); //debug

        return result
    }
    async requestById_Test(){
        let model = new MovieRequestModel()
        
        let result = await model.requestMovieById('tt3896198')
        console.log(result); //debug
        return result
     }
  }
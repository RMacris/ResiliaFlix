class Model{
   
    async recebeApi(cep){
    let view = new View()
    const url = `https://viacep.com.br/ws/${cep}/json/`
    let apiResponse = await fetch(url).then(response => response.json());
    console.log(apiResponse)
    view.mostrarNoInput(apiResponse)
    view.trataErro(apiResponse)

      
   }
}
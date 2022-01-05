class Controller{
  api(){
       let model = new Model()
        
        let result = model.recebeApi($('#cep').val())
        console.log(result);
        let view = new View()
        
        view.mostrarNoInput(result)
        
        
        
   }
}
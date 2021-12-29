class Controller{
  api(){
       let model = new Model()
       let result = model.recebeApi($('#cep').val())
       let view = new View()   
       view.mostrarNoInput(result)
       view.trataErroCep(result)
        
        
        
   }

   trataErroCadastro(){
        let view = new View()
        let email = $('#email').val()
        let senha = $("#senha").val()
        let confSenha = $('#confSenha').val()
        let model = new Model()
        model.validaDados(email, senha, confSenha, view)
     
   }
}


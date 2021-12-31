class Controller{
 async api(){
       let model = new Model()
       let result = await model.recebeApi($('#cep').val())
       console.log(result);
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


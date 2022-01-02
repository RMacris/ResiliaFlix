class CadastroController{
 async api(){
       let model = new CadastroModel()
       let result = await model.recebeApi($('#cep').val())
       console.log(result);
       let view = new CadastroView()   
       view.mostrarNoInput(result)
       view.trataErroCep(result)
        
        
        
   }

   trataErroCadastro(){
        let view = new CadastroView()
        let email = $('#email').val()
        let senha = $("#senha").val()
        let confSenha = $('#confSenha').val()
        let model = new CadastroModel()
        let resultadoCadastro = model.validaDados(email, senha, confSenha, view)
        view.erroCadastro(resultadoCadastro)
        
     
   }
}


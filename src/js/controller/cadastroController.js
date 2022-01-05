class CadastroController{
 async api(){
       let model = new CadastroModel()
       let result = await model.recebeApi($('#inputCep').val())
       console.log(result);
       let view = new CadastroView()   
       view.mostrarNoInput(result)
       view.trataErroCep(result)
        
        
        
   }

   trataErroCadastro(){
        let view = new CadastroView()
        let email = $('#inputEmail').val()
        let senha = $("#inputSenha").val()
        let confSenha = $('#inputConfirm-senha').val()
        let cep = $('#inputCep').val()
        let model = new CadastroModel()
        let resultadoCadastro = model.validaDados(email, senha, confSenha, cep)
        view.erroCadastro(resultadoCadastro)
        
     
   }
}


class LoginController{
    trataErroLogin(){
        let view = new LoginView()
        let emailLogin = $('#inputEmail').val()
        let senhaLogin = $('#inputSenha').val()
        let model = new LoginModel()
        let resultadoLogin = model.validaDadosLogin(emailLogin, senhaLogin)
        view.mostraErroLogin(resultadoLogin)
        
        
    }
}
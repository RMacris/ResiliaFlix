class LoginController{
    trataErroLogin(){
        let view = new LoginView()
        let emailLogin = $('#emailLogin').val()
        let senhaLogin = $('#senhaLogin').val()
        let model = new LoginModel()
        let resultadoLogin = model.validaDadosLogin(emailLogin, senhaLogin, view)
        view.mostraErroLogin(resultadoLogin)
        
        
    }
}
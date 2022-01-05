class LoginController{
    trataErroLogin(){
        let view = new LoginView()
        let emailLogin = $('#inputEmail').val()
        let senhaLogin = $('#inputSenha').val()
        let model = new LoginModel()
         model.validaDadosLogin(emailLogin, senhaLogin, view)
       
        
        
    }
}
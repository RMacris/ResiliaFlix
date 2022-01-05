class LoginView{
    mostraErroLogin(erro){
        $('.titulo').text(erro)
        $('.form-control').addClass('is-invalid')
        $('.titulo').css('font-size', '20px')
    }

}
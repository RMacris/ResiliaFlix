class LoginModel{
    validaDadosLogin(email, senha, func){
        try {
            if (email.indexOf('@') > -1 && senha.length >= 8) {
                 return window.location.href = '../../html/main-page/main-page.html'
                
            } else {
                 throw new Error('Dados incorretos')
            }
       } catch (error) {
             func.mostraErroLogin(error)
     } 
}
}
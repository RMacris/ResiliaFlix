class LoginModel{
    validaDadosLogin(email, senha){
        try {
            if (email.indexOf('@') > -1 && senha.length >= 8) {
                 return window.location.href = '/src/html/main-page/main-page.html'
                
            } else {
                 throw new Error('Dados incorretos')
            }
       } catch (error) {
               return error
       }
       }

       
}
class LoginModel{
    validaDadosLogin(email, senha){
        try {
            if (email.indexOf('@') > -1 && senha.length) {
                return console.log('foi');
                
            } else {
                 throw new Error('Insira todos os dados corretamente')
            }
       } catch (error) {
               return error
       }
       }
}
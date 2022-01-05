class EsqueceuModel{
    validaDadoEmail(email, func){
        try {
            if (email.indexOf('@') > -1) {
                return func.emailCorreto('Enviamos um link de como recuperar sua senha para o e-mail!')
                
            } else {
                 throw new Error('Insira o e-mail correto')
            }
       } catch (error) {
               return error
       }
       }
}

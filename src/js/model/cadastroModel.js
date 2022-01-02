class CadastroModel{
   
    async recebeApi(cep){
    const url = `https://viacep.com.br/ws/${cep}/json/`
    let apiResponse = await fetch(url).then(response => response.json());
    return apiResponse

      
   }


   validaDados(email, senha, confirmSenha, func){
    try {
        if (email.indexOf('@') > -1 && senha.length >= 8 && confirmSenha === senha) {
            func.cadastroSucesso('Cadastrado com sucesso!')
            
        } else {
             throw new Error('Insira todos os dados corretamente')
        }
   } catch (error) {
           return error
   }
   }
}
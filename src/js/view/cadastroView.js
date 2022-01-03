class CadastroView{
    mostrarNoInput(response){
      $('#estado').val(response.uf)
      $('#cidade').val(response.localidade)
      $('#bairro').val(response.bairro)
      $('#rua').val(response.logradouro) 
        
    }

    trataErroCep(response){
      if (response.erro === true) {
        $('#cepErro').text('CEP INVÁLIDO')
        $('#cepErro').css('color', 'red')
      } else{
        $('#cepErro').text('CEP')
        $('#cepErro').css('color', 'white')
      }
    }

    erroCadastro(erro){
      $('.titulo').text(erro)
    }

    cadastroSucesso(texto){
      $('.titulo').text(texto)
      $('#fieldset-cadastro').css('display', 'none')
      $('#texto-sucesso').css('display', 'flex')
      $('#btn').css('display', 'none')
      $('#form-singup').css('flex-wrap', 'nowrap')
      $('#form-singup').css('height', '40%')
      $('#form-singup').css('justify-content', 'space-evenly')
    }
}

class View{
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
      $('#fildset-group').css('display', 'none')
    }
}

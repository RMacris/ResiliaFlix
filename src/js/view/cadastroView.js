class CadastroView{
    mostrarNoInput(response){
      $('#inputEstado').val(response.uf)
      $('#inputCidade').val(response.localidade)
      $('#inputBairro').val(response.bairro)
      $('#inputRua').val(response.logradouro) 
        
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

    
}

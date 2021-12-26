class View{
    
    mostrarNoInput(response){
      console.log(response.uf);
      $('#estado').val(response.uf)
      $('#cidade').val(response.localidade)
      $('#bairro').val(response.bairro)
      $('#rua').val(response.logradouro) 
        
    }

    trataErro(response){
      if (response.erro === true) {
        $('#cepErro').text('CEP INVÁLIDO')
        $('#cepErro').css('color', 'red')
      } else{
        $('#cepErro').text('CEP')
        $('#cepErro').css('color', 'white')
      }
    }
}

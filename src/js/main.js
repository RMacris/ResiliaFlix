let controller = new CadastroController()

$('#cep').blur(()=>{
        controller.api()
        
    
})


$('.btnCadastrar').click(()=>{
        controller.trataErroCadastro()
})
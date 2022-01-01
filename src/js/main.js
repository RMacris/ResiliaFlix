let controller = new Controller()

$('#cep').blur(()=>{
   
        controller.api()
        
    
})


$('.btnCadastrar').click(()=>{
        controller.trataErroCadastro()
})
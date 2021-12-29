let controller = new Controller()

$('#cep').blur(()=>{
   
        controller.api()
        
    
})


$('#cadastrar').click(()=>{
        controller.trataErroCadastro()
})
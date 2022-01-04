let controller = new CadastroController()
$('#cep').blur(()=>{
        controller.api()
})


$('.btnCadastrar').click((e)=>{
        e.preventDefault()
        controller.trataErroCadastro()
})
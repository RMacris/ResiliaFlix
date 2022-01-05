let controller = new CadastroController()
$('#inputCep').blur(()=>{
        controller.api()
})


$('.btnCadastrar').click((e)=>{
        e.preventDefault()
        controller.trataErroCadastro()
})
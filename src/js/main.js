let controller = new CadastroController()

$('#cep').blur(()=>{
        controller.api()
})


$('.btnCadastrar').click((e)=>{
        e.preventDefault()
        controller.trataErroCadastro()
})

let loginController = new LoginController()
$('#btnEntrar').click((e)=>{
        e.preventDefault()
        loginController.trataErroLogin()
})

let esqueceuController = new EsqueceuController()

$('#btnEnviar').click(()=>{
        esqueceuController.trataErro()
})

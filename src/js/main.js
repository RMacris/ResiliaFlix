let controller = new CadastroController()

$('#cep').blur(()=>{
        controller.api()
        
    
})

$('.btnCadastrar').click(()=>{
        controller.trataErroCadastro()
})

let loginController = new LoginController()
$('#btnEntrar').click((e)=>{
        e.preventDefault()
        loginController.trataErroLogin()
})
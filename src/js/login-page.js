let loginController = new LoginController()
$('#btnEntrar').click((e)=>{
        e.preventDefault()
        loginController.trataErroLogin()
})
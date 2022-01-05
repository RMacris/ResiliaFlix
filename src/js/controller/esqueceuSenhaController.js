class EsqueceuController{
    trataErro(){
        let view = new EsqueceuView()
        let email = $('#inputEmail').val()
        let model = new EsqueceuModel()
        let resultado = model.validaDadoEmail(email, view)
        view.mostraErro(resultado)
        
        
    }
}
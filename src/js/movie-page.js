
window.onload = async function() { 
    let view = new MoviePageView()
    let controller = new MovieRequestController();

    let response = await controller.requestById_Test()

    view.PopualtePage(response)
}

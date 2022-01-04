
// passe diretamente como argumento o resposta da requisição
class CardFactory{
        
    CardFactory({Title='', Poster='', Plot='',Awards=''}, route=''){
        let card =  $('<a>').addClass('card cursor-pointer card-size-std bg-dark text-white').attr('href', route)
        let img =  $('<img>').addClass('card-img').attr('src', Poster)
        let overlay =  $('<div>').addClass('card-img-overlay')
        let title =  $('<h5>').addClass('card-title').text(Title)
        let plot =  $('<p>').addClass('card-text').text(Plot)
        let awards =  $('<p>').addClass('card-text').text(Awards)
        overlay.append(title, plot, awards)
        card.append(img, overlay)
        return card
    }
}




//// <div class="card cursor-pointer card-size-std bg-dark text-white">
////     <img src="" class="card-img" alt="...">
////     <div class="card-img-overlay">
////         <h5 class="card-title">Card title</h5>
////         <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
////         <p class="card-text">Last updated 3 mins ago</p>
////     </div>
//// </div>
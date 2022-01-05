
// passe diretamente como argumento o resposta da requisição
class CardFactory{
        
    CardFactory({Title='', Poster='', Plot='',Awards='',imdbID=''}, callback = function() {}){
        let card =  $('<div>').addClass('card cursor-pointer card-size-std bg-dark text-white')
        let img =  $('<img>').addClass('card-img').attr('src', Poster)
        let overlay =  $('<div>').addClass('card-img-overlay')
        let cardBody =  $('<div>').addClass('card-body text-justify')
        let bodyTitle =  $('<h6>').addClass('card-title').text(Title)
        let movieId = $('<button>').attr('value', imdbID).addClass('btn btn-primary').text('Assistir').on('click', function() { 
            callback(imdbID)
        })

        let title =  $('<h5>').addClass('card-title').text(Title)
        let plot =  $('<p>').addClass('card-text').text(Plot)
        let awards =  $('<p>').addClass('card-text').text(Awards)
        cardBody.append(bodyTitle)
        overlay.append(title, plot, awards, movieId)
        card.append(img, overlay, cardBody)
        return card
    }
}



{/* <div class="card-body"> */}
    {/* <h5 class="card-title">Card title</h5> */}
//// <div class="card cursor-pointer card-size-std bg-dark text-white">
////     <img src="" class="card-img" alt="...">
////     <div class="card-img-overlay">
////         <h5 class="card-title">Card title</h5>
////         <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
////         <p class="card-text">Last updated 3 mins ago</p>
////     </div>
//// </div>
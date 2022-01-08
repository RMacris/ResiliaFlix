
// passe diretamente como argumento o resposta da requisição
class CardFactory{
        
    CardFactory({Title='', Poster='', Plot='',Awards='',imdbID=''}, callback = function() {}){
        Title   = this.ValidateNAResponse(Title)
        Poster  = this.ValidateNAResponse(Poster),
        Plot    = this.ValidateNAResponse(Plot),
        Awards  = this.ValidateNAResponse(Awards),
        imdbID  = this.ValidateNAResponse(imdbID)
        
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

    ValidateNAResponse(text){ 
        if(text == "N/A"){
            return ''
        }
        return text
    }
    
}




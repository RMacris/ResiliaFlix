class MoviePageView { 
    PopualtePage(response) {
        console.log(response.Title)
        this._SetTitle(response.Title)
        this.UpdateHtmlTitle(response.Title)
        this._SetLanguage(response.Language)
        this._SetActors(response.Actors)
        this._SetGenero(response.Genre)
        this._SetEscritor(response.Writer)
        this._SetDuration(response.Runtime)
        this._SetImage(response.Poster)
        this._SetDescription(response.Plot)
        this._SetAwards(response.Awards)

    }
    UpdateHtmlTitle(newTitle) { 

        $("title").text(newTitle)
    }
    _SetTitle(title) {
        $('#title').text(title)
    }   
    _SetLanguage(Language) {
        $('#language').text(Language)
    }   
    _SetActors(actors) {
        $('#actors').text(actors)
    }   
    _SetGenero(genero) {
        $('#genre').text(genero)
    }   
    _SetEscritor(escritor) {
        $('#writer').text(escritor)
    }   
    _SetDuration(duration) {
        $('#runtime').text(duration)
    }   
    _SetImage(url) {
        console.log(url)
        $('#banner').attr('src', url)
    }
    _SetDescription(plot){  
        $('#description').text(plot)

    }
    
    _SetAwards(awards){  
        $('#awards').text('Awards: ' + awards)

    }
    
}




	// "Title": "Superman and Lois",
	// "Year": "2021–",
	// "Rated": "TV-14",
	// "Released": "23 Feb 2021",
	// "Runtime": "42 min",
	// "Genre": "Action, Adventure, Drama",
	// "Director": "N/A",
	// "Writer": "Greg Berlanti, Todd Helbing",
	// "Actors": "Tyler Hoechlin, Elizabeth Tulloch, Jordan Elsass",
	// "Plot": "Follow the world's most famous super hero and comic books' most famous journalist as they deal with all the stress, pressures, and complexities that come with being working parents in today's society.",
	// "Language": "English",
	// "Country": "United States",
	// "Awards": "1 nomination",
	// "Poster": "https://m.media-amazon.com/images/M/MV5BOGYyMmViMjgtZjViZi00NjkzLThjZGItMzZhYmZmOWZlMzdhXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
	// "Ratings": [
	// 	{
	// 		"Source": "Internet Movie Database",
	// 		"Value": "7.9/10"
	// 	}
	// ],
	// "Metascore": "N/A",
	// "imdbRating": "7.9",
	// "imdbVotes": "23,804",
	// "imdbID": "tt11192306",
	// "Type": "series",
	// "totalSeasons": "1",
	// "Response": "true"

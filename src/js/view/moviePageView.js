class MoviePageView { 
    constructor(){
    }
    PopualtePage({Title='', Url='', Plot='',Awards=''}) {
        console.log(Title)
        this._SetTitle(Title)
        this._SetImage(Url)
        this._SetDescription(Plot)
        this._SetAwards(Awards)
    }

    _SetTitle(title) {
        $('#title').text(title)
    }   
    _SetImage(url) {
        $('#banner').attr('src', url)

    }
    _SetDescription(plot){  
        $('#description').text(plot)

    }
    
    _SetAwards(awards){  
        $('#awards').text(awards)

    }
    
}
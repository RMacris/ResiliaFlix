

$('input[type=search]').on('change', WaitInputFinishToRequest)
$('input[type=search]').on('keyup', SearchOnPressEnter)
$('#BtnSearch').on('click', )


let time = null
function WaitInputFinishToRequest(e) {
    if(e.target.value.lenght == 0 ) return;
    
    clearTimeout(time)
    time = setTimeout(async () => {
        // read input 
        const targetValue = e.target.value.toString()
        console.log(targetValue)

        if(!window.location.href.includes('search-result-page')){
            RemoveUrlParams('i')
            RedirectAndAddUrlQuery('../search-result/search-result-page.html', 's', targetValue)

            console.log('está na search result page')
        }else{
            console.log('está na search result page')
            HandleSearch(targetValue)
        }

    }, 500);
}


function SearchOnPressEnter(e) {
    if(e.target.value.lenght == 0 ) return;
    if (e.keyCode === 13) {
        const targetValue = e.target.value.toString()
        console.log(targetValue)
        console.log('Enter is pressed!');
        if(!window.location.href.includes('search-result-page')){
            RemoveUrlParams('i')
            RedirectAndAddUrlQuery('../search-result/search-result-page.html', 's', targetValue)
        }else{
            RemoveUrlParams('i')
            RedirectAndAddUrlQuery('../search-result/search-result-page.html', 's', targetValue)
        }
    }
}

function SearchOnBtnClick(){
    if($('#BtnSearch').val().length > 0) return;
    const targetValue = $('BtnSearch').val()
    console.log(targetValue)
    console.log('Enter is pressed!');
    if(!window.location.href.includes('search-result-page'))
    {
        RemoveUrlParams('i')
        RedirectAndAddUrlQuery('../search-result/search-result-page.html', 's', targetValue)
    }
    else
    {
        RemoveUrlParams('i')
        RedirectAndAddUrlQuery('../search-result/search-result-page.html', 's', targetValue)
    }
}

async function HandleSearch(search){ 
    
    // if in search-result-page
    console.log(search)
    //request
    let movieRequestController = new MovieRequestController();
    const result = await movieRequestController.resquestByTitle(search)

    console.log(result)

    //card creation 
    let factory = new CardFactory()
    let card = factory.CardFactory(result)

    //TODO: for each card append in the dom on the search result page
}

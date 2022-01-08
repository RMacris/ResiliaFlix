

$('input[type=search]').on('change', WaitInputFinishToRequest)
$('input[type=search]').on('keyup', SearchOnPressEnter)
$('#BtnSearch').on('click', )


let time = null
function WaitInputFinishToRequest(e) {
    if(e.target.value.lenght == 0 ) return;
    
    clearTimeout(time)

    //wait 0.5s after stop pressing key before trigger the function
    time = setTimeout(async () => {
        // read input 
        const targetValue = e.target.value.toString()
        HandleSearch('../search-result/search-result-page.html','i','s',targetValue)


    }, 500);
}


function SearchOnPressEnter(e) {
    if(e.target.value.lenght == 0 ) return;
    if (e.keyCode === 13) {
        const targetValue = e.target.value.toString()
        HandleSearch('../search-result/search-result-page.html','i','s',targetValue)

    }
}

function SearchOnBtnClick(){
    if($('#BtnSearch').val().length > 0) return;
    const targetValue = $('BtnSearch').val()
    HandleSearch('../search-result/search-result-page.html','i','s',targetValue)
   
}


function HandleSearch(redirectPath, removeKey, newKey, targetValue ) {
    if(!window.location.href.includes('search-result-page'))
    {
        RemoveUrlParams(removeKey)
        RedirectAndAddUrlQuery(redirectPath, newKey, targetValue)
    }
    else
    {
        RemoveUrlParams(removeKey)
        RedirectAndAddUrlQuery(redirectPath, newKey, targetValue)
    }
}
 

function RedirectAndAddUrlQuery(relativePath,param, query) {
    
    window.location.href = `${relativePath}?${param}=${query}`
}

function RemoveUrlParams(param) { 
    let url = new URL(window.location.href);
    let params = new URLSearchParams(url.search);

    // Delete the foo parameter.
    params.delete(param); //Query string is now: 'bar=2'
}
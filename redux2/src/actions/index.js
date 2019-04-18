const URL  = "http://localhost:7800";

export function latestNews(){
    const request = fetch(`${URL}/articles?_end=3`,{method:'GET'})
    .then(response => response.json())

    return{
        type:'GET_LATEST',
        payload:request
    }
}

export function articleNews(){
    const request = fetch(`${URL}/articles?_start=3&_end=10`,{method:'GET'})
    .then(response => response.json())

    return{
        type:'GET_ARTICLE',
        payload:request
    }
}

export function galleryNews(){
    const request = fetch(`${URL}/galleries?_limit=2`,{method:'GET'})
    .then(response => response.json())

    return{
        type:'GET_GALLERIES',
        payload:request
    }
}

////////////////////
export function selectedNews(id){
    const request = fetch(`${URL}/articles?id=${id}`,{method:'GET'})
    .then(response => response.json())

    return{
        type: 'GET_SELCETED_NEW',
        payload:request
    }
}

export function clearSelectedNews(){
    return{
        type: 'CLEAR_SELCETED_NEW',
        payload:[]
    }
}
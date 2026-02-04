

export function fetchMovieByTitle(title){
    return fetch(`http://www.omdbapi.com/?apikey=48f59a08&s=${title}`)
    .then(responce=>{
        if (responce.ok!=true){
            switch (responce.status) {
                    case 400:
                        throw new Error("Ошибка 400");
                    case 401:
                        throw new Error("Ошибка 401: неверный API key");
                    case 403:
                        throw new Error("Ошибка 403");
                    case 404:
                        throw new Error("Ошибка 404");
                    case 429:
                        throw new Error("Ошибка 429: слишком много запросов");
                    case 500:
                        throw new Error("Ошибка 500");
                    default:
                        throw new Error(`HTTP ошибка ${responce.status}`);
                    }
        
        }
        console.log(responce    )
        return responce.json()
    })
    .then(data=>{
        if (data.Response=='False'){
            throw new Error(data.Error)
        }
        else{
            console.log(data.Search)
            return data.Search
        }
    })
    
}

export function fetch_page(url_id){
    return fetch(`http://www.omdbapi.com/?apikey=48f59a08&i=${url_id}`)
    .then(responce=>{
        if (responce.ok!=true){
            switch (responce.status) {
                    case 400:
                        throw new Error("Ошибка 400");
                    case 401:
                        throw new Error("Ошибка 401: неверный API key");
                    case 403:
                        throw new Error("Ошибка 403");
                    case 404:
                        throw new Error("Ошибка 404");
                    case 429:
                        throw new Error("Ошибка 429: слишком много запросов");
                    case 500:
                        throw new Error("Ошибка 500");
                    default:
                        throw new Error(`HTTP ошибка ${responce.status}`);
                    }
        
        }
        console.log(responce    )
        return responce.json()
    })
    .then(data=>{
        if (data.Response=='False'){
            throw new Error(data.Error)
        }
        else{
            console.log(data)
            return data
        }
    })
}
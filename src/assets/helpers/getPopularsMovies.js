const API_KEY = import.meta.env.VITE_API_KEY
const ENDPOINT = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=es-US&page=1`

export async function fetchPopularsMovies(){
    const data = await fetch(ENDPOINT)
        .then( response => response.json() )
        .then( data => { return data } )
        .catch( error => { return error.json() } )
    return data
}


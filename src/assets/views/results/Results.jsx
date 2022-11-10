//Libraries
import React, { useEffect, useState } from 'react'
//Componets
import MoviesSection from '../../components/moviesList/MoviesSection'
//Styles
import style from './Results.module.css'

function Results({}) {
    const [movies, setMovies] = useState()

    const API_KEY = import.meta.env.VITE_API_KEY
    const query = new URLSearchParams(window.location.search)
    const keyword = query.get('keyword')
    const ENDPOINT = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${keyword}&language=es-ES&page=1&include_adult=false`

    useEffect(() => {
      fetch(ENDPOINT)
        .then( res => res.json() )
        .then( data => setMovies(data.results) )
        .catch( error => console.log(error) )
    }, [movies]) 
    
    
    return (
        <main className={ style.mainContainer }>
            <MoviesSection sectionTitle={`Resultados de ${keyword}`} movies={movies} /> 
        </main>
    )
}

export default Results
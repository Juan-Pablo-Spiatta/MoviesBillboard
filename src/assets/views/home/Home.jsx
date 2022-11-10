//Libraries
import React, { useEffect, useState } from 'react'
//Helpers
import { fetchPopularsMovies } from '../../helpers/getPopularsMovies'
//Components
import MoviesSection from '../../components/moviesList/MoviesSection'
//Styles
import style from './Home.module.css'

function Home() {
    const [moviesData, setMoviesData] = useState()
    
    useEffect(() => {
        fetchPopularsMovies()
            .then( response => setMoviesData(response))
    }, [])

    console.log(moviesData)
    
    return (
      <main className={ style.mainContainer }>
        {
            moviesData
                ? <MoviesSection sectionTitle='Peliculas Populares' movies={ moviesData.results }/>
                : <></>
        }
      </main>
    )
}

export default Home
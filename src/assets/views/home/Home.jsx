//Libraries
import React, { useEffect, useState } from 'react'
//Helpers
import { fetchPopularsMovies } from '../../helpers/getPopularsMovies'
//Components
import MoviesSection from '../../components/moviesList/MoviesSection'
//Styles
import style from './Home.module.css'

function Home() {
    const [popularsMoviesData, setPopularsMoviesData] = useState()
    
    useEffect(() => {
        fetchPopularsMovies()
            .then( response => setPopularsMoviesData(response))
    }, [])

    console.log(popularsMoviesData)
    
    return (
      <main className={ style.mainContainer }>
        {
            popularsMoviesData
                ? <MoviesSection sectionTitle='Peliculas Populares' movies={ popularsMoviesData.results }/>
                : <></>
        }
      </main>
    )
}

export default Home
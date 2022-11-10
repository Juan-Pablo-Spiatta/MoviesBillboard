//Libraries
import React, { useEffect, useState } from 'react'
//SVGs
import notFoundSvg from '../../img/svg/image.svg'
//Styles
import style from './Details.module.css'

function Details() {
    const [movieData, setMovieData] = useState()
    const posterPath = movieData? movieData.poster_path : undefined
    const backdropPath = movieData? movieData.backdrop_path : undefined
    // console.log(movieData.production_companies.length)

    const API_KEY = import.meta.env.VITE_API_KEY
    const query = new URLSearchParams(window.location.search)
    const movieID = query.get('movieID')
    const ENPOINT = `https://api.themoviedb.org/3/movie/${movieID}?api_key=${API_KEY}&language=es-ES`
    console.log(movieData) 
    
    useEffect(() => {
        fetch(ENPOINT)
            .then( res => res.json() )
            .then( data => setMovieData(data) )
            .catch( error => console.log(error) )
    }, [])

    
  return (
    movieData
      ? <main className={ style.mainContainer }>
          <div className={ style.imgContainer }>
            { window.innerWidth < 600 
              ? <img className={ style.backdropPath } src={backdropPath? `https://image.tmdb.org/t/p/w500${backdropPath}` : notFoundSvg } alt={`Poster en grande de la pelicula ${movieData}`} />
              : <img className={ style.posterPath } src={posterPath? `https://image.tmdb.org/t/p/w500${posterPath}` : notFoundSvg } alt={`Poster publicitario de la pelicula ${movieData}`} />
            }
          </div>
          <div className={ style.detailsContainer }>
            <h1 className={ style.title }>{`${ movieData.title } (${ String(movieData.release_date).slice(0,4) })`}</h1>
            <h3 className={ style. originalTitle }>{`(${ movieData.original_title })`}</h3>
            <div>
              <h4>Generos</h4>
              <ul>
                {movieData.genres.map( gender => (
                  <li key={ gender.id }>{ gender.name }</li>
                ))}
              </ul>
            </div>
            <h4>Descripcion</h4>
            <p>
              { movieData.overview }
            </p>
            {
              movieData.production_companies.length > 0
              ? <ul className={ style.companiesContainer }>
                  <h4>Productoras</h4>
                    {movieData.production_companies.map( companie => (
                        <li key={ companie.id }>{ companie.name }</li>
                    ))}
                  </ul>
                : <></>
            }
          </div>
        </main>
    : <></>
  )
}

export default Details
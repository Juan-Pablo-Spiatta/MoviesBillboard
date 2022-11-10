//Libraries
import React from 'react'
import { useNavigate } from 'react-router-dom'
//Svgs
import notFoundSvg from '../../img/svg/image.svg'
//Styles
import style from './MoviesCards.module.css'

function MoviesCards( { movieData } ) {
    const poster_path = movieData.poster_path
    const navigate = useNavigate()
    const movieID = movieData.id
    const handleClick = () => { navigate(`/detalles?movieID=${movieID}`) } 

    return (
        <article className={ style.mainContainer }>
            <button className={ style.favorite }>🖤</button>
            <img className={ style.poster } src={poster_path? `https://image.tmdb.org/t/p/w500${poster_path}` : notFoundSvg } alt={`poster publicitario pelicula ${movieData.title}`} />
            <div className={ style.descriptionContainer }>
                <h3 className={ style.movieTitle }>{movieData.title}</h3>
                <p className={ style.movieOverview }>
                    { movieData.overview
                        ? String(movieData.overview).substring(0, 120).trim() + "..."
                        : "Sin descripción"
                    }
                </p>
            </div>
            <button className={ style.detailsButton } onClick={ handleClick } > Ver detalles </button>
        </article>
    )
}

export default MoviesCards
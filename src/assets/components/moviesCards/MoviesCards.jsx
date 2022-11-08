//Libraries
import React from 'react'

//Styles
import style from './MoviesCards.module.css'

function MoviesCards( { movieData } ) {
    
    const urlPosterImg = `https://image.tmdb.org/t/p/w500${movieData.poster_path}`
    return (
        <article className={ style.mainContainer }>
            <img className={ style.poster } src={urlPosterImg} alt={`poster publicitario pelicula ${movieData.title}`} />
            <div className={ style.descriptionContainer }>
                <h3 className={ style.movieTitle }>{movieData.title}</h3>
                <p className={ style.movieOverview }>
                    { movieData.overview
                        ? movieData.overview
                        : "Sin descripcion"
                    }
                </p>
            </div>
        </article>
    )
}

export default MoviesCards
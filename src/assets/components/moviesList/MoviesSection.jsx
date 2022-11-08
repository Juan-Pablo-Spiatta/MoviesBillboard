//Libraries
import React from 'react'
//Components
import MoviesCards from '../moviesCards/MoviesCards'
//Styles
import style from './MoviesSection.module.css'

function MoviesSection({ sectionTitle = "", movies = [] }) {
  return (
    <section className={ style.mainContainer }> 
        <h2 className={ style.sectionTitle }>{sectionTitle}</h2>
        <ul className={ style.moviesContainer }>
            { movies.map( (movie, key) => 
                <MoviesCards key={key} movieData={movie} />
            )}
        </ul>
    </section>
  )
}

export default MoviesSection
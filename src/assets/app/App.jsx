//Libraries
import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
//Components
import Home from '../views/home/Home'
import Header from '../components/header/Header'
//Styles
import style from './App.module.css'
import Results from '../views/results/Results'
import Details from '../views/movieDetails/Details'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path={'/'} index element={ <Home /> } />
        <Route path={'/resultados'} element={ <Results /> } />
        <Route path={'/detalles'} element={ <Details /> } />
      </Routes>
    </>
  )
}

export default App

//Libraries
import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
//Components
import Home from '../views/home/Home'
import Header from '../components/header/Header'
//Styles
import style from './App.module.css'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path={'/'} index element={ <Home /> } />
      </Routes>
    </>
  )
}

export default App

//Libraries
import { replace } from 'formik'
import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
//Components
import Searcher from '../searcher/Searcher'
//Style
import style from './Header.module.css'

function Header() {
  const navigate = useNavigate()
  const handleLogoClick = () => { navigate('/') }
  return (
    <header className={ style.mainContainer }>
        <div className={ style.logoContainer }>
            <button className={ style.logo } onClick={handleLogoClick} >JFlix</button>
        </div>
        <Searcher />
        <nav className={ style.navbar }>
            <ul className={ style.linksList }>
                <li className={ style.links }><Link to={'/'}>Inicio</Link></li>
                <li className={ style.links }>Catalogo</li>
                <li className={ style.links }>Iniciar sesion</li>
            </ul>
        </nav>
    </header>
  )
}

export default Header
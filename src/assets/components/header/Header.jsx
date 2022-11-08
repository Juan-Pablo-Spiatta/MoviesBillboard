//Libraries
import React from 'react'

//Style
import style from './Header.module.css'

function Header() {
  return (
    <header className={ style.mainContainer }>
        <div className={ style.logoContainer }>
            <h1 className={ style.logo }>JFlix</h1>
        </div>
        <nav className={ style.navbar }>
            <ul className={ style.linksList }>
                <li className={ style.links }>Inicio</li>
                <li className={ style.links }>Catalogo</li>
                <li className={ style.links }>Iniciar sesion</li>
            </ul>
        </nav>
    </header>
  )
}

export default Header
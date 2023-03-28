import React from 'react'
import CartWidget from './CartWidget'

function NavBar() {
  return (
    <nav>
      <div className="nav-logo">
        <a href=""><img src="/imagenes/logo.jpg" alt="Logo" /></a>
      </div>
      <ul className="nav-links">
        <li><a href="">Inicio</a></li>
        <li><a href="">Nuestro Menú</a></li>
        <li><a href="">Contacto</a></li>
        <li><><CartWidget></CartWidget></></li>
      </ul>
    </nav>
  )
}

export default NavBar
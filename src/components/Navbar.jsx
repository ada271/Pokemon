import React from 'react'
import logo from "../assets/logo.svg.png"
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
<nav className="navbar navbar-expand-lg navbar-light">
  <NavLink className="navbar-brand" to="/">
    <img className='logo' src={logo} alt="" />
  </NavLink>
  <div className='buttons'>
      <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <NavLink className="nav-link" to="/pokemons" >
          Pokemons <span className="sr-only">(current)</span>
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/plushes" >
          Plush Shop
        </NavLink>
      </li>
      <li className="nav-item">
        <a target='blank' href='https://pokemon.fandom.com/wiki/Pok%C3%A9mon_Wiki' className="nav-link" >
          Wiki
        </a>
      </li>


    </ul>

  </div>
  </div>

</nav>

  )
}

export default Navbar
import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Main from '../pages/Main'
import Navbar from '../components/Navbar'
import PlushList from '../pages/PlushList'
import PokeList from '../pages/PokeList'
import About from '../pages/About'

const AppRouter = () => {
  return (
    <Router>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/plushes' element={<PlushList/>}/>
            <Route path='/pokemons' element={<PokeList/>}/>
            <Route path='/about' element={<About/>}/>
        </Routes>
    </Router>
  )
}

export default AppRouter
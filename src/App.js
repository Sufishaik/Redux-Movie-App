import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Homes from "./Componennts/Home/Homes"
import PageNFS from "./Componennts/PageNF/PageNFS"
import Footer from "./Componennts/Footers/Footer"
import Header from "./Componennts/Headers/Header"
import "../src/App.scss"
import MovieCards from './Componennts/MovieCard/MovieCards';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <div className='container'>

      </div>
      <Routes>
        <Route path='/' element={<Homes/>}/>
        <Route path='/movie/:imdbID' element={<MovieCards/>}/>
        <Route  element={<PageNFS/>}/>
      </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App

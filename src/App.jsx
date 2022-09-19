import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './component/Homepage'
import Navbar from './component/Navbar'
import MovieDetails from './component/MovieDetails'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepage url={"https://api.themoviedb.org/3/movie/popular"} />} />
          <Route path='/:movie_id' element={<MovieDetails/>}/>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
import React, { useState } from 'react'
// import SignUp from './component/LiveStream/SignUp'
// import { ToastContainer } from "react-toastify"
// import "react-toastify/dist/ReactToastify.css"
import MainContainer from './component/Homepage'
import SearchBar from './component/SearchBar';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import MovieDetails from './component/MovieDetails';


const App = () => {
  return (
    <>
      
      <BrowserRouter>
        <SearchBar />
        <Routes>
          <Route path='/' element={<MainContainer url={"https://api.themoviedb.org/3/movie/popular"} />}/>
          <Route path='/search/:id' element={<MainContainer url={"https://api.themoviedb.org/3/search/movie"}/>}/>
          <Route path='/:movie_id' element={<MovieDetails/>}/>

        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
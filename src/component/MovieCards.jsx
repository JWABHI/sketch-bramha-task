import React from 'react'
import {useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { movieContext } from '../Api/MovieContext'
import './Style.css'


const MovieCards = () => {

let movies = useContext(movieContext)
console.log("MoviesCard: ",movies)
  return (
    <div className="container mt-3">
      
      <h2 className="">Trending</h2>
          <div className="row justify-content-center d-flex flex-wrap"> 
            {movies.map((items)=>{
         return( <div className=" col col-md-4 col-lg-3 col-sm-6 gap-3">
          <NavLink to={"/" + items.id}>
          <div className="card cards "  key={items.key}>
         {/* <NavLink to={items.id}> */}
          <img className="card-img-top" src={items.backdrop_path ? 'https://image.tmdb.org/t/p/w500'+items.backdrop_path : 'https://planetcode.in/assets/images/default-image-png-9-300x200.png'} alt={items.title}/>
          <div className='d-flex align-end title'>
          <div className="card-body">
            <p className="card-text">{items.title}</p>
            <p className="card-text"><i className="fa fa-star me-3"></i>{items.vote_average} / 5</p>
          </div>
          </div>
          {/* </NavLink> */}
        </div>
          </NavLink>
         
        </div>
        
        )
        })}
           
          </div>
        

    </div>
  )
}

export default MovieCards
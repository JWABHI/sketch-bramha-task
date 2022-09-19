import React from 'react'
import "../Style/Card.css"
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { movieContext } from '../Api/MovieContext'
import playbutton from "../assets/playbutton.svg"
// import "../Style/responsive.css"

const MovieCards = () => {

  let movies = useContext(movieContext)
  console.log("MoviesCard: ", movies)
  return (
    <div className="container2">
      <h3 className="">Trending</h3   >
      <div className="row justify-content-center d-flex flex-wrap">
        {movies.map((cards) => {
          return (<div className="col col-md-4 col-lg-3 col-sm-6 gap-2 grid">
            <NavLink to={"/" + cards.id}>
              <div className="card cards " key={cards.key}>
                <img className="card-img-top" src={cards.backdrop_path ? 'https://image.tmdb.org/t/p/w500' + cards.backdrop_path : 'https://planetcode.in/assets/images/default-image-png-9-300x200.png'} alt={cards.title} />
                <div className='d-flex align-end title'>
                  <div className="card-body">
                    <p className="card-text text-white">{cards.title}</p>
                    <p className="card-text"><i className="fa fa-star me-3"></i>{cards.vote_average} / 5</p>
                    <div className='play'>
                        <img src={playbutton} />                    
                    </div>
                  </div>
                </div>
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
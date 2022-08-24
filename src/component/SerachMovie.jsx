import React from 'react'
import {useContext } from 'react'
import { serachContext } from '../Api/SerachContext'
import './Style.css'


const SearchMovie = () => {
 

let search = useContext(serachContext)
console.log(search)
  return (
    <div className="container mt-3">
      
      <h2 className="">Trending</h2>
          <div className="row justify-content-center"> 
            {search.map((items)=>{
         return( <div className="col col-md-4 col-lg-3 col-sm-6 gy-3">
         <div className="card cards2"  key={items.key} >
          <img className="card-img-top" src={'https://image.tmdb.org/t/p/w500'+items.backdrop_path} alt={items.title}/>
          <div className='d-flex align-end title'>
          <div className="card-body">
            <p className="card-text">{items.title}</p>
            <p className="card-text"><i className="fa fa-star me-3"></i>{items.vote_average} / 5</p>
          </div>
          </div>
        </div>
        </div>
        )
        })}
           
          </div>
        

    </div>
  )
}

export default SearchMovie
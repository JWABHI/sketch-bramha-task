import React from 'react'
import { useEffect,useState} from 'react';
import axios from 'axios';
import {useNavigate,useParams} from "react-router-dom"
import { sortedLastIndex } from 'lodash';


const MovieDetails = () => {
    let navigate = useNavigate();
    let { movie_id} = useParams();
    let [movieDetails, setMovieDetails] = useState({});
    useEffect(() => {

        let API = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=636e728bb94be43448a9ec17c78ccadf&language=en-US`;
        axios.get(API).then((response) => {
            
            console.log("movieDetails: ", response.data);
            setMovieDetails(response.data);
        }).catch((error) => {
            console.error(error);
        })
    },[]);
    let goBack = () => {
        navigate(-1);
    }
  return (
    <div>
        <React.Fragment>
            <div className="card size text-white " style={{"margin": "40px 100px",width:"70%" ,border:"solid black 2px"}}>
                <div className='d-flex'> 
                    <div className="card-body bg-white text-black mt-4 ms-4">
                    <i class="fa fa-arrow-left" onClick={() => goBack()}></i>
                        <h5 className="card-titile"> {movieDetails.title}</h5>
                        <p className="card-titile " style={{"fontWeight":"500"}}> Rating: {movieDetails.vote_average}/5</p>
                        <p className="card-titile "> {movieDetails.overview}</p>
                        <p className="card-titile " style={{"fontWeight":"500"}}> Release Date: {movieDetails.release_date}</p>
                        <p className="card-titile " style={{"fontWeight":"500"}}> Original Language: {movieDetails.original_language}</p>
                    </div>
                    <div className="card-img me-5" style={{"marginLeft":"px","width":"350px"}}>
                        <img src={'https://image.tmdb.org/t/p/original/' + movieDetails.backdrop_path} alt=""  style={{height:"300px",width:"400px"}} />
                    </div>
                </div>
            </div>
        </React.Fragment>
    </div>
  )
}

export default MovieDetails
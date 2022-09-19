import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom"
import "../Style/Card.css"



const MovieDetails = () => {
    let navigate = useNavigate();
    let { movie_id } = useParams();
    let [movieDetails, setMovieDetails] = useState({});
    useEffect(() => {

        let API = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=636e728bb94be43448a9ec17c78ccadf&language=en-US`;
        axios.get(API).then((response) => {

            console.log("movieDetails: ", response.data);
            setMovieDetails(response.data);
        }).catch((error) => {
            console.error(error);
        })
    }, []);
    let goBack = () => {
        navigate(-1);
    }
    return (

        <div>
            <div className="card text-white" style={{ height: "100vh" }}>

                <div className="card-body bg-black text-white row" style={{}}>
                    <div className="col-lg-4 col-md-4 col 8">
                        <i class="fa fa-arrow-left" onClick={() => goBack()}></i>
                        <h5 className="card-titile"> {movieDetails.title}</h5>
                        <p className="card-titile " style={{ "fontWeight": "500" }}> Rating: {movieDetails.vote_average}/5</p>
                        <p className="card-titile "> {movieDetails.overview}</p>
                        <p className="card-titile " style={{ "fontWeight": "500" }}> Release Date: {movieDetails.release_date}</p>
                        <p className="card-titile " style={{ "fontWeight": "500" }}> Original Language: {movieDetails.original_language}</p>
                    </div>

                    <div className="position-relative col-lg-8 col-md-8 col">
                        <div className="position-absolute " style={{ zIndex: "2", "right": "0", left: "0", "bottom": "0", "top": "0" }}></div>
                        <div className="card-img position-absolute" style={{ "right": "0", left: "0", "bottom": "0", "top": "0", "zIndex": "1" }}>
                            <img className="img-fluid w-100 h-100" src={'https://image.tmdb.org/t/p/original/' + movieDetails.backdrop_path} alt="" style={{ height: "300px", width: "400px" }} />
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default MovieDetails
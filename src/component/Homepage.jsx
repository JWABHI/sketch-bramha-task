import React, {useState, useEffect} from 'react'
import MovieCards from './MovieCards';
// import SearchBar from './SearchBar';
import { movieContext } from '../Api/MovieContext';
import axios from "axios"
import Pagination from './Pagination';
import { useParams } from 'react-router-dom';

export default function MainContainer({url}) {
    let [movies, setMovies] = useState([])
    let [pageSelected, setPageSelected] = useState(1)
    let movie = useParams(); 
    useEffect(()=>{
        console.log(movie);
        let API=`${url}?api_key=636e728bb94be43448a9ec17c78ccadf&language=en-US&page=${pageSelected}`;
        if(movie.id) {
          API += `&query=${movie.id}`; 
        }
        console.log(API);
        axios
        .get(API)
        .then((response) => {
           setMovies(response.data.results || [])
          //  console.log(response.data)
    
        })
        .catch((error) => {
            console.error(error);
        });
    
    },[pageSelected,movie])
    // console.log(movies)
  return (
    <React.Fragment>
        <movieContext.Provider value={movies}>
        <MovieCards></MovieCards>
        </movieContext.Provider>
        <footer className="d-flex justify-content-center mt-3"><Pagination setPageSelected={setPageSelected} pageSelected={pageSelected}></Pagination></footer>
    </React.Fragment>
  )
}

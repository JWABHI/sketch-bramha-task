import React from 'react'
import { useState } from 'react'
import SearchLink from './SearchLink';


function SearchBar() {
    let [movie,setMovie] = useState("");
    return (
        <>
            <div className="container mt-2">
                <div className="row ">
                    <div className="col">
                        <form className="d-flex" id="form">
                            <input
                            className='form-control'
                                type="text"
                                placeholder="Search Movies"
                            onChange={(e) => {setMovie(e.target.value)}}
                            />
                            <SearchLink link={movie}/>
                        </form>
                        {/* <SearchMovies data={data}/> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchBar
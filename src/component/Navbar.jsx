import React from "react";
import "../Style/Navbar.css"
import logo from "../assets/logo.svg"
import searchbar from '../assets/searchbar.svg'



const Navbar = () => {
    return (
        <div className="maincontainer">
            <nav className="navbar navbar-dark navbar-expand-sm p-2 d-flex justify-content-between col-md-30" >
                <img src={logo} alt="logo" className="logo" />
                <input
        type="text"
        className="input"
        placeholder="Search movies"
        name="search"
      /><button type="submit" className="btn btn-white">
        <img className="search" src={searchbar} />
      </button>
            </nav>
            
        </div>

    )
}

export default Navbar;
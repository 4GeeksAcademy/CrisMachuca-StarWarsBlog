import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-sm">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#opciones">
      <span className="navbar-toggler-icon" ></span>
    </button>
    
   
    <a className="navbar-brand" href="#">
      <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg" height="50" alt=""/>
    </a>
    
    
    <div className="collapse navbar-collapse" id="opciones">   
      <ul className="navbar-nav">
        <li className="nav-item">
		<Link to="/" className="link">
		<i className="fa-solid fa-house"></i> <span className="ms-1 d-none d-sm-inline">Star Wars</span>
				</Link>
          
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><i className="fa-solid fa-earth-americas"></i> <span className="ms-1 d-none d-sm-inline">Planets</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><i className="fa-solid fa-shuttle-space"></i> <span className="ms-1 d-none d-sm-inline">Vehicles</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><i className="fa-solid fa-user-astronaut"></i> <span className="ms-1 d-none d-sm-inline">Characters</span></a>
        </li>            
      </ul>
    </div>
  </nav>





		
	);
};

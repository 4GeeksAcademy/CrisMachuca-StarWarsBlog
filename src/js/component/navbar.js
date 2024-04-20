import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-sm">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#opciones">
      <span className="navbar-toggler-icon" ></span>
    </button>
    
    
    
    <div className="collapse navbar-collapse d-flex flex-column" id="opciones">   
	<div className="navsuperior container-fluid d-flex align-items-center justify-content-between">
		<div className="social d-flex">
			<a><i className="fa-brands fa-github"></i></a>
			<a><i className="fa-brands fa-linkedin"></i></a>
			<a><i className="fa-brands fa-github"></i></a>
		</div>
		<div className="navbar-brand" href="#">
			<img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg" height="90" alt="" className="logo"/>
		</div>
		<div>
		<form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-warning" type="submit">Search</button>
      </form>
	  </div>
	</div>
      <ul className="navbar-nav">
        <li className="nav-item">
			<Link to="/" className="nav-link">
				<i className="fa-solid fa-house"></i> <span className="ms-1 d-none d-sm-inline">Home</span>
			</Link> 
        </li>

        <li className="nav-item">
			<Link to="/" className="nav-link">
				<i className="fa-solid fa-earth-americas"></i> <span className="ms-1 d-none d-sm-inline">Planets</span>
			</Link>
        </li>

        <li className="nav-item">
			<Link to="/" className="nav-link">
		  		<i className="fa-solid fa-shuttle-space"></i> <span className="ms-1 d-none d-sm-inline">Vehicles</span>
		  	</Link>
        </li>

        <li className="nav-item">
			<Link to="/" className="nav-link">
				<i className="fa-solid fa-user-astronaut"></i> <span className="ms-1 d-none d-sm-inline">Characters</span>
			</Link>
        </li>            
      </ul>
	  
    </div>
  </nav>





		
	);
};

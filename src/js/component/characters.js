import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export const Characters = () => {
	const { store, actions } = useContext(Context);
   
	return (
		<>
        <h1>Characters</h1>

        <div>
            <h2>Star Wars Characters</h2>
            <ul>
                {store.people.map((person, index) => (
                <li key={index}>{person.name}</li>
                ))}
            </ul>
            <button onClick={() => {actions.showCharacters}}>Cargar Personajes</button>
            
        </div>













        <div>
            <div className="card-group">
                <div className="card">
                    <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        <button onClick={() => {actions.showCharacters()}}>Show Characters</button>
                    </div>
                </div>
            </div>
        </div>
        
        </>				
	)
};

export default Characters;
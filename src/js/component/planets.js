import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/index.css";

export const Planets = () => {
    const { store, actions } = useContext(Context);

    // Cargar los personajes cuando el componente se monte
    useEffect(() => {
        actions.showPlanets();
    }, [actions]);

    // Lista de propiedades a mostrar para cada personaje
    const propertiesToShow = ["population", "climate", "terrain"];

    return (
        
        <div>
            <h2 style={{color: "red"}}>Lista de Planetas</h2>
            <div className="text-center container">
            <div className="row scrolling-wrapper">
                
            <div className="col-sm-12">
                    {store.planets.map((planet, index) => (
                        <div className="card" key={index} >
                            <img src={`https://starwars-visualguide.com/assets/img/planets/${index}.jpg`} className="card-img-top" alt="..."/>
                            <div className="card-header">{planet.name}</div>
                            <div className="card-body">
                                <ul>
                                    {propertiesToShow.map(property => (
                                        <li key={property}>
                                            <strong>{property}: </strong>{planet.result.properties[property]}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>




    );
};

export default Planets;
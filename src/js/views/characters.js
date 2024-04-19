import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/index.css";

export const Characters = () => {
    const { store, actions } = useContext(Context);

    // Cargar los personajes cuando el componente se monte
    useEffect(() => {
        actions.showCharacters();
    }, [actions]);

    // Lista de propiedades a mostrar para cada personaje
    const propertiesToShow = ["height", "birth_year", "gender"];

    return (
        
        <div>
            <h2 style={{color: "red"}}>Lista de Personajes</h2>
            <div className="text-center container">
            <div className="row scrolling-wrapper">
                
            <div className="col-sm-12">
                    {store.people.map((character, index) => (
                        <div className="card" key={index} >
                            <img src={`https://starwars-visualguide.com/assets/img/characters/${index + 1}.jpg`} className="card-img-top" alt="..."/>
                            <div className="card-header">{character.name}</div>
                            <div className="card-body">
                                <ul>
                                    {propertiesToShow.map(property => (
                                        <li key={property}>
                                            <strong>{property}: </strong>{character.result.properties[property]}
                                        </li>
                                    ))}
                                </ul>
                                <div className="buttons display-flex justify-content-between">
                                    <button className="more btn btn-primary">Learn more!</button>
                                    <button className="more btn btn-warning"><i class="fa-regular fa-heart"></i></button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>




    );
};

export default Characters;

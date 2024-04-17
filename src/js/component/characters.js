import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

export const Characters = () => {
    const { store, actions } = useContext(Context);

    // Cargar los personajes cuando el componente se monte
    useEffect(() => {
        actions.showCharacters();
    }, [actions]);

    // Lista de propiedades a mostrar para cada personaje
    const propertiesToShow = ["height", "mass", "hair_color", "skin_color", "eye_color", "birth_year", "gender"];

    return (
        <div>
            <h2>Lista de Personajes</h2>
            <div className="row">
                <div className="card-group overflow-auto">
                    {store.people.map((character, index) => (
                        <div className="card col-md-4 mb-3" key={index}>
                            <div className="card-header">{character.name}</div>
                            <div className="card-body">
                                <ul>
                                    {propertiesToShow.map(property => (
                                        <li key={property}>
                                            <strong>{property}: </strong>{character.result.properties[property]}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Characters;

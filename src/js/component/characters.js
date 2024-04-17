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
            <ul>
                {store.people.map((character, index) => (
                    <li key={index}>
                        <h3>{character.name}</h3>
                        <ul>
                            {propertiesToShow.map(property => (
                                <li key={property}>
                                    <strong>{property}: </strong>{character.result.properties[property]}
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Characters;

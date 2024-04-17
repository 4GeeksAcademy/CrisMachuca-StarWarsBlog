import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export const CharProperties = ({ characterIndex }) => {
	const { store, actions } = useContext(Context);
    // Obtener el personaje del almacenamiento
    const character = store.people[characterIndex];
    
    useEffect(() => {
        actions.showCharacters();
    }, [characterIndex]);
    
	return (
		<>
        <div>
            <h2>Character Properties</h2>
            {character ? ( // Verificar si el personaje es válido
                <ul>
                    {/* Iterar sobre las propiedades del personaje y renderizarlas en elementos li */}
                    {Object.entries(character).map(([key, value]) => (
                        <li key={key}>
                            <strong>{key}: </strong>{value}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No se encontró el personaje</p>
            )}
            <button onClick={() => actions.showCharacters()}>Cargar Personajes</button>
        </div>
        
        </>				
	)
};

export default CharProperties;
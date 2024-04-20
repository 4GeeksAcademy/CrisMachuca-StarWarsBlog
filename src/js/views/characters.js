import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/index.css";

export const Characters = () => {
    const { store, actions } = useContext(Context);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Cargar los personajes cuando el componente se monte
    useEffect(() => {
        actions.showCharacters();
    }, []);

    // Función para manejar el clic en el botón de avance
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % store.people.length);
    };

    // Función para manejar el clic en el botón de retroceso
    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + store.people.length) % store.people.length);
    };

    return (
        <div className="container mb-5">
            <h2 style={{ color: "yellow" }}>Characters</h2>
            <div className="row">
                <div className="col">
                    <div className="carousel slide" id="carouselExampleControls" data-bs-ride="carousel" style={{ position: "relative" }}>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="card-group">
                                    {store.people.map((character, index) => {
                                        const relativeIndex = (index - currentIndex + store.people.length) % store.people.length;
                                        if (relativeIndex < 3) {
                                            return (
                                                <div className="card" key={index} style={{ flex: "0 0 auto", width: "300px", marginRight: "10px" }}>
                                                    <img src={`https://starwars-visualguide.com/assets/img/characters/${index + 1}.jpg`} className="card-img-top" alt="..." />
                                                    <div className="card-header">{character.name}</div>
                                                    <div className="card-body">
                                                        <ul>
                                                            <li><strong>Height:</strong> {character.result.properties.height || 'N/A'}</li>
                                                            <li><strong>Birth Year:</strong> {character.result.properties.birth_year || 'N/A'}</li>
                                                            <li><strong>Gender:</strong> {character.result.properties.gender || 'N/A'}</li>
                                                        </ul>
                                                        <div className="buttons display-flex">
                                                            <button className="more btn btn-primary m-3">Learn more!</button>
                                                            <button className="heart btn btn-warning"><i className="fa-regular fa-heart"></i></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        }
                                        return null;
                                    })}
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev" onClick={handlePrev} style={{ position: "absolute", top: "50%", left: "0", transform: "translateY(-50%)" }}>
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next" onClick={handleNext} style={{ position: "absolute", top: "50%", right: "0", transform: "translateY(-50%)" }}>
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Characters;

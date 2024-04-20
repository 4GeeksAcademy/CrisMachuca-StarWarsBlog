import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/index.css";

export const Planets = () => {
    const { store, actions } = useContext(Context);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [imageErrors, setImageErrors] = useState([]);

    // Cargar los planetas cuando el componente se monte
    useEffect(() => {
        actions.showPlanets();
    }, []);

    // Función para manejar el error de la imagen para un planeta específico
    const handleImageError = index => {
        setImageErrors(prevErrors => [...prevErrors, index]);
    };

    // Función para manejar el clic en el botón de avance
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % store.planets.length);
    };

    // Función para manejar el clic en el botón de retroceso
    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + store.planets.length) % store.planets.length);
    };

    return (
        <div className="container mb-5">
            <h2 style={{color: "yellow"}}>Lista de Planetas</h2>
            <div className="row">
                <div className="col">
                    <div className="carousel slide" id="carouselExampleControls" data-bs-ride="carousel" style={{ position: "relative" }}>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="card-group">
                                    {store.planets.map((planet, index) => {
                                        const relativeIndex = (index - currentIndex + store.planets.length) % store.planets.length;
                                        if (relativeIndex < 3) {
                                            return (
                                                <div className="card" key={index} style={{ flex: "0 0 auto", width: "300px", marginRight: "10px" }}>
                                                    <img
                                                        src={!imageErrors.includes(index) ? `https://starwars-visualguide.com/assets/img/planets/${index + 1}.jpg` : `https://starwars-visualguide.com/assets/img/planets/10.jpg`}
                                                        className="card-img-top"
                                                        alt="..."
                                                        onError={() => handleImageError(index)}
                                                    />
                                                    <div className="card-header">{planet.name}</div>
                                                    <div className="card-body">
                                                        <ul>
                                                            <li><strong>Population:</strong> {planet.result.properties.population || 'N/A'}</li>
                                                            <li><strong>Climate:</strong> {planet.result.properties.climate || 'N/A'}</li>
                                                            <li><strong>Terrain:</strong> {planet.result.properties.terrain || 'N/A'}</li>
                                                        </ul>
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

export default Planets;

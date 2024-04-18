import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/index.css";

export const Vehicles = () => {
    const { store, actions } = useContext(Context);
    const [imageErrors, setImageErrors] = useState([]);

    // Cargar los vehículos cuando el componente se monte
    useEffect(() => {
        actions.showVehicles();
    }, [actions]);

    // Lista de propiedades a mostrar para cada vehículo
    const propertiesToShow = ["vehicle_class", "manufacturer", "cargo_capacity"];

    // Función para manejar el error de la imagen para un vehículo específico
    const handleImageError = index => {
        setImageErrors(prevErrors => [...prevErrors, index]);
    };

    return (
        <div>
            <h2 style={{ color: "red" }}>Lista de Vehículos</h2>
            <div className="text-center container">
                <div className="row scrolling-wrapper">
                    <div className="col-sm-12">
                        {store.vehicles.map((vehicle, index) => (
                            <div className="card" key={index}>
                                <img
                                    src={!imageErrors.includes(index) ? `https://starwars-visualguide.com/assets/img/vehicles/${index + 1}.jpg` : `https://starwars-visualguide.com/assets/img/vehicles/33.jpg`}
                                    className="card-img-top"
                                    alt="..."
                                    onError={() => handleImageError(index)}
                                />
                                <div className="card-header">{vehicle.name}</div>
                                <div className="card-body">
                                    <ul>
                                        {propertiesToShow.map(property => (
                                            <li key={property}>
                                                <strong>{property}: </strong>
                                                {vehicle.result.properties[property]}
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

export default Vehicles;

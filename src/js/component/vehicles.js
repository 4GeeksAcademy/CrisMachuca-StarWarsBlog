import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/index.css";

export const Vehicles = () => {
    const { store, actions } = useContext(Context);

    // Cargar los personajes cuando el componente se monte
    useEffect(() => {
        actions.showVehicles();
    }, [actions]);

    // Lista de propiedades a mostrar para cada personaje
    const propertiesToShow = ["vehicle_class", "manufacturer", "cargo_capacity"];

    return (
        
        <div>
            <h2 style={{color: "red"}}>Lista de Vehículos</h2>
            <div className="text-center container">
            <div className="row scrolling-wrapper">
                
            <div className="col-sm-12">
                    {store.vehicles.map((vehicle, index) => (
                        <div className="card" key={index} >
                            <img src={`https://starwars-visualguide.com/assets/img/vehicles/${index + 1}.jpg`} className="card-img-top" alt="..."/>
                            <div className="card-header">{vehicle.name}</div>
                            <div className="card-body">
                                <ul>
                                    {propertiesToShow.map(property => (
                                        <li key={property}>
                                            <strong>{property}: </strong>{vehicle.result.properties[property]}
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
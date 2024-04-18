import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Characters from "../component/characters";
import Planets from "../component/planets";
import Vehicles from "../component/vehicles";

export const Home = () => (
	<div className="text-center mt-5">
		<Characters/>
		<Planets/>
		<Vehicles/>
	</div>
);

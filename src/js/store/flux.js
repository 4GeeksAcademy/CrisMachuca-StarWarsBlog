const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			character: [],
			vehicles: [],
			vehicle: [],
			planets: [],
			planet: [],
			favourites: []

		},
		actions: {
			
			showCharacters: () => {
				fetch("https://www.swapi.tech/api/people")
					.then(res => res.json())
					.then(data => {
						// Verificar si se recibieron datos de la API
						if (data.results) {
							// Mapear sobre los resultados para obtener los detalles de cada personaje
							const promises = data.results.map(character =>
								fetch(character.url)
									.then(res => res.json())
									.then(characterData => ({
										// Si los detalles del personaje contienen una propiedad 'properties',
										// extraer las propiedades necesarias
										...('properties' in characterData ? characterData.properties : characterData),
										// Si no, usar los datos sin procesar
										name: character.name
									}))
							);
			
							// Esperar a que todas las promesas se resuelvan
							Promise.all(promises)
								.then(characters => {
									setStore({ people: characters });
								})
								.catch(err => console.error(err));
						} else {
							console.error("No se recibieron datos válidos de la API");
						}
					})
					.catch(err => console.error(err));
			},

			showPlanets: () => {
				fetch("https://www.swapi.tech/api/planets")
					.then(res => res.json())
					.then(data => {
						// Verificar si se recibieron datos de la API
						if (data.results) {
							// Mapear sobre los resultados para obtener los detalles de cada personaje
							const promises = data.results.map(planet =>
								fetch(planet.url)
									.then(res => res.json())
									.then(planetData => ({
										// Si los detalles del personaje contienen una propiedad 'properties',
										// extraer las propiedades necesarias
										...('properties' in planetData ? planetData.properties : planetData),
										// Si no, usar los datos sin procesar
										name: planet.name
									}))
							);
			
							// Esperar a que todas las promesas se resuelvan
							Promise.all(promises)
								.then(planetss => {
									setStore({ planets: planetss });
								})
								.catch(err => console.error(err));
						} else {
							console.error("No se recibieron datos válidos de la API");
						}
					})
					.catch(err => console.error(err));
			},

			showVehicles: () => {
				fetch("https://www.swapi.tech/api/vehicles")
					.then(res => res.json())
					.then(data => {
						// Verificar si se recibieron datos de la API
						if (data.results) {
							// Mapear sobre los resultados para obtener los detalles de cada personaje
							const promises = data.results.map(vehicle =>
								fetch(vehicle.url)
									.then(res => res.json())
									.then(vehicleData => ({
										// Si los detalles del personaje contienen una propiedad 'properties',
										// extraer las propiedades necesarias
										...('properties' in vehicleData ? vehicle.properties : vehicleData),
										// Si no, usar los datos sin procesar
										name: vehicle.name
									}))
							);
			
							// Esperar a que todas las promesas se resuelvan
							Promise.all(promises)
								.then(vehicless => {
									setStore({ vehicles: vehicless });
								})
								.catch(err => console.error(err));
						} else {
							console.error("No se recibieron datos válidos de la API");
						}
					})
					.catch(err => console.error(err));
			},

			 
			 /*OTRA FORMA USANDO ASYNC/AWAIT

			 showCharacters: async () => {
			try {
				const response = await fetch("https://www.swapi.tech/api/people");
				const data = await response.json();
				
				// Verificar si se recibieron datos de la API
				if (data.results) {
					const characters = await Promise.all(data.results.map(async character => {
						const characterResponse = await fetch(character.url);
						const characterData = await characterResponse.json();
						
						// Si los detalles del personaje contienen una propiedad 'properties',
						// extraer las propiedades necesarias, de lo contrario, usar los datos sin procesar
						const characterProperties = 'properties' in characterData ? characterData.properties : characterData;
						
						return {
							...characterProperties,
							name: character.name
						};
					}));
					
					setStore({ people: characters });
				} else {
					console.error("No se recibieron datos válidos de la API");
				}
			} catch (error) {
				console.error("Error al cargar los personajes:", error);
			}
		},
		*/
		// Función para cargar los datos de la API y almacenarlos en el almacenamiento local
		loadDataFromAPI: async (key, url) => {
			try {
				const localStorageData = localStorage.getItem(key);
				if (localStorageData) {
					setStore({ [key]: JSON.parse(localStorageData) });
				} else {
					const response = await fetch(url);
					const data = await response.json();
					if (data.results) {
						const items = await Promise.all(data.results.map(async item => {
							const itemResponse = await fetch(item.url);
							const itemData = await itemResponse.json();
							const itemProperties = 'properties' in itemData ? itemData.properties : itemData;
							return { ...itemProperties, name: item.name };
						}));
						localStorage.setItem(key, JSON.stringify(items));
						setStore({ [key]: items });
					} else {
						console.error("No se recibieron datos válidos de la API");
					}
				}
			} catch (error) {
				console.error("Error al cargar los datos:", error);
			}
		},

		// Funciones específicas para cargar datos desde la API y almacenarlos en el almacenamiento local
		showCharacters: () => {
			getActions().loadDataFromAPI("people", "https://www.swapi.tech/api/people");
		},
		showPlanets: () => {
			getActions().loadDataFromAPI("planets", "https://www.swapi.tech/api/planets");
		},
		showVehicles: () => {
			getActions().loadDataFromAPI("vehicles", "https://www.swapi.tech/api/vehicles");
		},
			

			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			
		}
	};
};

export default getState;

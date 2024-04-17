const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

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

			 /*
			 OTRA FORMA USANDO ASYNC/AWAIT

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
		}
			 */
			

			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			
		}
	};
};

export default getState;

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
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

			 
			



			

			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;

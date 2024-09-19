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
			personajes: [

			],
			planetas: [

			],
			personajesfavoritos: [

			],
			planetasfavoritos: [

			],
			propiedad1: "",
			propiedad2: "",
			propiedad3: "",
			propiedad4: "",
			propiedad5: "",
			propiedad6: ""
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				const store = getStore();
				console.log("se cargo la pagina")
				fetch("https://swapi.dev/api/people")
					.then((response) => response.json())
					.then((data) => {
						console.log(data.results)
						setStore({personajes: data.results})

					}
				)	
			},
			getPlanetas: () => {
				console.log("cargar planetas")
				fetch("https://swapi.dev/api/planets")
					.then((response) => response.json())
					.then((data) => {
						console.log(data.results)
						setStore({planetas: data.results})

					})
			},
			añadirpersonajefavorito: (nombre, url) => {
				console.log("Se añadirá a favoritos: " + nombre);
				console.log("Se añadirá a favoritos: " + url);
				const store = getStore();
				const favoritosActuales = store.personajesfavoritos || [];
				const favoritosActualizados = [...favoritosActuales, nombre];
				
				setStore({
					...store,
					personajesfavoritos: favoritosActualizados
				});
				console.log(favoritosActualizados);
			},
			eliminarpersonajeFavorito: (nombre) => {
				const store = getStore();
				setStore({...store,
					personajesfavoritos: store.personajesfavoritos.filter(favorito => favorito !== nombre) 
				});
			
				console.log("Favorito eliminado:", nombre);
			},
			añadirplanetafavorito: (nombre) => {
				console.log("Se añadirá a favoritos: " + nombre);
				const store = getStore();
				const favoritosActuales = store.planetasfavoritos || [];
				const favoritosActualizados = [...favoritosActuales, nombre];
				
				setStore({
					...store,
					planetasfavoritos: favoritosActualizados
				});
				console.log(favoritosActualizados);
			},
			eliminarplanetaFavorito: (nombre) => {
				const store = getStore();
				setStore({...store,
					planetasfavoritos: store.planetasfavoritos.filter(favorito => favorito !== nombre) 
				});
			
				console.log("Favorito eliminado:", nombre);
			},
			traerLeerMas: (prop1, prop2, prop3, prop4, prop5, prop6) => {
				setStore({propiedad1: prop1})
				setStore({propiedad2: prop2})
				setStore({propiedad3: prop3})
				setStore({propiedad4: prop4})
				setStore({propiedad5: prop5})
				setStore({propiedad6: prop6})


			}
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


export default getState;

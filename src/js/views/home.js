import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [backgraundBtn, setBackgraundBtn] = useState("white")

	function changeBackgraund () {
		if (backgraundBtn == "whithe"){
			setBackgraundBtn("yellow")
		} else {
			setBackgraundBtn("white")
		}
	}


	return (
		<>	
		<div className="container">

			<h1 style={{color: "#ef4545"}}>Characters</h1>
			<div
				style={{
					display: "flex",
					overflowX: "auto", 
					padding: "10px",
					gap: "10px", 
				}}
			>
				
				{store.personajes.map((item, index) => {
					return (
						<div
							key={index}
							className="card"
							style={{
								flex: "0 0 auto",
								width: "18rem",
							}}
						>
							<img style={{height:"230px", width: "18rem"}} src="https://starwars-visualguide.com/assets/img/characters/11.jpg" className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">{item.name}</h5>
								<div className="card-text">
									<p style={{marginBottom: "2px"}}>Gender: {item.gender}</p>
									<p style={{marginBottom: "2px"}}>Hair-Color: {item.hair_color}</p>
									<p style={{marginBottom: "2px"}}>Eye-Color: {item.eye_color}</p>
								</div>
								<Link to="/demo" >
									<button onClick={() => actions.traerLeerMas(item.name, item.birth_year, item.gender, item.height, item.skin_color, item.eye_color)} type="button" className="btn btn-outline-primary">Read more</button>
								</Link>
								<button type="button" className="btn btn-outline-warning" style={{float: "right", backgroundColor: backgraundBtn}} onClick={() =>{actions.añadirpersonajefavorito(item.name); changeBackgraund()}}>
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
										<path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
									</svg>
								</button>
							</div>
						</div>
					);
				})}
			</div>

			<h1 style={{color: "#ef4545"}}>Planets</h1>
			<div
				style={{
					display: "flex",
					overflowX: "auto", 
					padding: "10px",
					gap: "10px", 
				}}
			>
				
				{store.planetas.map((item, index) => {
					return (
						<div
							key={index}
							className="card"
							style={{
								flex: "0 0 auto",
								width: "18rem",
							}}
						>
							<img style={{height:"230px", width: "18rem"}} src="https://starwars-visualguide.com/assets/img/characters/46.jpg" className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">{item.name}</h5>
								<div className="card-text">
									<p style={{marginBottom: "2px"}}>Population: {item.population}</p>
									<p style={{marginBottom: "2px"}}>Terrain: {item.terrain}</p>
								</div>
								<Link to="/planeta" >
									<button onClick={() => actions.traerLeerMas(item.name, item.climate, item.population, item.orbital_period, item.rotation_period, item.diameter)} type="button" className="btn btn-outline-primary">Read more</button>
								</Link>
								<button type="button" className="btn btn-outline-warning" style={{float: "right", backgroundColor: backgraundBtn}} onClick={() =>{actions.añadirplanetafavorito(item.name); changeBackgraund()}}>
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
										<path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
									</svg>
								</button>
							</div>
						</div>
					);
				})}
			</div>
		</div>
		</>
	);
};
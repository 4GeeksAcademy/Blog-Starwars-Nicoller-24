import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	
	return( 
		<>
			<div>
				{store.personajes.map((item, index) => {
					<div key={index} className="card" style={{width: "18rem"}}>
					<img src="..." className="card-img-top" alt="..."/>
					<div className="card-body">
					<h5 className="card-title">{item[index].name}</h5>
					<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					<a href="#" className="btn btn-primary">Go somewhere</a>
					</div>
					</div>

				})}
			</div>

		
		</>
		
	)
} 

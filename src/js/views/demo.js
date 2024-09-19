import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Demo = () => {
	const { store, actions } = useContext(Context);
	console.log(store.propiedad1)
	return (
		<div className="container">
			<div className="d-flex">
				<img style={{width: "600px", height: "400px"}} src="https://starwars-visualguide.com/assets/img/characters/46.jpg"/>
				<div className="d-flex flex-column w-100">
					<h1 className="mx-auto">{store.propiedad1}</h1>
					<p className="mx-auto p-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</p>
				</div>
			</div>
			<div className="d-flex justify-content-between border-top border-danger mt-3" style={{padding: "30px"}}>
				<p style={{color: "red", width: "40px"}}>Name {store.propiedad1}</p>
				<p style={{color: "red", width: "40px"}}>birth Year{store.propiedad2}</p>
				<p style={{color: "red", width: "40px"}}>Gender {store.propiedad3}</p>
				<p style={{color: "red", width: "40px"}}>Height{store.propiedad4}</p>
				<p style={{color: "red", width: "40px"}}>Skin Color{store.propiedad5}</p>
				<p style={{color: "red", width: "40px"}}>Eye Color{store.propiedad6}</p>
				
			</div>
		</div>
	);
};
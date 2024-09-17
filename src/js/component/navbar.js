import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/demo">
				<img src="https://www.freepnglogos.com/uploads/star-wars-logo-31.png" style={{width: "100px", height: "100px", marginLeft: "250px"}}></img>
			</Link>
			<div className="ml-auto" style={{marginRight: "60px"}}>
				<div className="btn-group">
					<button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
						favorites
					</button>
					<ul className="dropdown-menu">
						<li><a className="dropdown-item" href="#">Action</a></li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

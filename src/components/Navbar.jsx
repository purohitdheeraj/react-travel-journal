import React from "react";
import globeIcon from "../assets/globe.svg";

function navbar() {
	return (
		<nav className="navbar">
			<span className="navbar-logo">
				<img src={globeIcon} alt="globe" />
			</span>
			my travel journal
		</nav>
	);
}

export default navbar;

import React from "react";
import locateLogo from "../assets/location.svg";

function Card(props) {
	return (
		<div className="card">
			<img
				className="card--image"
				src={props.imgUrl}
				alt={props.title}
			/>
			<div className="card--info">
				<span className="card--info-location">
					<img
						src={locateLogo}
						alt={props.location}
					/>{" "}
					{props.location}{" "}
					<a href={props.googleMapLink}>
						Google Map
					</a>
				</span>
				<h2 className="card--info-title">
					{props.title}
				</h2>

				<strong className="card--info-date">
					{props.startDate}- {props.endDate}
				</strong>

				<p className="card--info-description">
					{props.description}
				</p>
			</div>
		</div>
	);
}

export default Card;

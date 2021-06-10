import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./navigation.css"
const Navigation = (props) => {
	// console.log("props", props.token2);
	// console.log("nn user", props);

	
	return <div className="navigation">
		<p className="logo">Our<span>Restaurants</span></p>
		
		<div className="allLinks">
		<Link className="links"  to="/" style={{ textDecoration: 'none',color:"#731702" }}
> Home </Link>
		<Link className="links" to="/about-us" style={{ textDecoration: 'none',color:"#731702" }}> About Us </Link>
		<Link className="links" to="/restaurants" style={{ textDecoration: 'none',color:"#731702" }}> Restaurants </Link>
		
		
		{!props.token2 ? <div className="Navigation">
			<Link className="links" to="/login" style={{ textDecoration: 'none',color:"#731702" }}> log in</Link>
		</div> : ""}


		{props.token2? <div className="Navigation">
			<Link className="links" to="/profile" style={{ textDecoration: 'none',color:"#731702" }}>Hi {props.userP.firstName} <img className="profile_img" src={`${props.userP.image}`} width="25px" height="25px" /> </Link>
		</div> : ""}

		{props.token2 ? <div className="Navigation">
			<svg className="links" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16" onClick={() => { props.token4(localStorage.setItem("token", "")); }}>
				<path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z" />
				<path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
			</svg>
		</div> : ""}


		
		
		</div>
	</div>;




};

export default Navigation;

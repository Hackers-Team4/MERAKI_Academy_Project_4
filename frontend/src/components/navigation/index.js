import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import "./navigation.css"
const Navigation = (props) => {
	// console.log("props", props.token2);
	// console.log("nn user", props);
	const history = useHistory();
	return <div className="navigation">
		<p className="logo">Our<span>Restaurants</span></p>

	<div>
		<div >
			{!props.token2 ? <div className="withoutToken">
				<Link className="links" to="/" style={{ textDecoration: 'none', color: "white" }}
				> Home </Link>
				<Link className="links" to="/about-us" style={{ textDecoration: 'none', color: "white" }}> About Us </Link>
				<Link className="links" to="/restaurants" style={{ textDecoration: 'none', color: " white" }}> Restaurants </Link>
				<div className="Navigation">
					<Link className="links" to="/login" style={{ textDecoration: 'none', color: "white" }}> log in</Link>
				</div>
			</div> : ""}
		</div>

		<div >
			{props.token2 ? <div className="withToken">
				<Link className="links" to="/" style={{ textDecoration: 'none', color: "white" }}
				> Home </Link>
				<Link className="links" to="/about-us" style={{ textDecoration: 'none', color: "white" }}> About Us </Link>
				<Link className="links" to="/restaurants" style={{ textDecoration: 'none', color: " white" }}> Restaurants </Link>
				<div className="Navigation">
					<Link className="links" to="/profile" style={{ textDecoration: 'none', color: "white" }}>
						<img className="profile_img" src={`${props.userP.image&&props.userP.image}`} width="30px" height="30px" style={{ marginTop: "-8px" }} /> </Link>
				</div>
			
			<div className="Navigation">
				<Link className="links" to="/profile" style={{ textDecoration: 'none', color: "white" }}>
					Hi {props.userP.firstName}  </Link>
			</div>
			<div className="Navigation_1">

				<svg style={{ color: "white" }} className="links" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16" onClick={() => { props.token4(localStorage.setItem("token", "")); history.push("/") }
				}>
					<path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z" />
					<path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
				</svg>
			</div></div> : ""}


		</div>

		</div>
	</div>;




};

export default Navigation;
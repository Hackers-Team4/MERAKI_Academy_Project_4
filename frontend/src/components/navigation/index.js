import React ,{ useEffect }from 'react';
import { Link } from 'react-router-dom';
import "./navigation.css"
const Navigation = (props) => {
	console.log("props", props.token2);
	console.log("nn user", props);

	// useEffect(() => {
	// 	const data = localStorage.getItem("token");
	// 	props.token4(data)
	// })
	// useEffect(() => {
	// 	const data = localStorage.getItem("users");
	// 	props.userPs(JSON.parse(data))
	//   })

	return <div className="navigation">
		<p className="logo">Our<span>Restaurants</span></p>
		<Link to="/"> Home </Link>
		<Link to="/about-us"> About Us </Link>
		<Link to="/restaurants"> Restaurants </Link>

		{!props.token2 ? <div className="Navigation">
			<Link to="/login"> log in</Link>
		</div> : ""}


		{props.token2 ? <div className="Navigation">
			<Link to="/profile">Hi {props.userP.firstName}  <img src={`${props.userP.image}`} width="25px" height="25px" /> </Link>
		</div> : ""}

		{props.token2 ? <div className="Navigation">
			<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16" onClick={() => { props.token4(localStorage.setItem("token", "")); }}>
				<path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z" />
				<path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
			</svg>
		</div> : ""}


		<Link to="/facebook"> <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
			<path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
		</svg></Link>
	</div>;




};

export default Navigation;

<<<<<<< HEAD
import React, { useState } from "react";
=======
import React, { useState, useEffect } from "react";
>>>>>>> a062c707f320beca8d8c7f15e9b864bedb12668e
import { Route } from "react-router-dom";
import Navigation from "./components/navigation";
import Register from "./components/signIn/signUp";
import Login from "./components/signIn/login";
import Restaurant from "./components/restaurant/Restaurant";
import RestaurantDetails from "./components/restaurant/restaurantDetails";
import Booking from "./components/restaurant/Booking";
import Home from "./components/Home";
import About from "./components/aboutus/about";
import FliterByTypeOfFood from "./components/Fliter";
import Profile from "./components/signIn/profile";

const App = () => {
	const [token, setToken] = useState("");
	const [restaurantItem, setRestaurantItem] = useState("");
	const [type, setType] = useState("");
	const [users, setUsers] = useState({ _id: 1 });
	//console.log("res", restaurantItem);
	//console.log("type", type);
	console.log("app", token);
	//console.log("user", users);

	// useEffect(() => {
	// 	const data=	localStorage.getItem("token");
	// 	setToken(data)
	// })
	
	//useEffect(() => {
		//localStorage.setItem("token", token);
	//})

	return (
		<div className="App">
			<Navigation token2={token} userP={users} token4={setToken} userPs={setUsers}/>
			<Route exact path="/restaurants"
				render={() => <Restaurant type2={setType} />}
			/>
			<Route exact path="/" render={() => <Home type1={setType} />} />
			<Route exact path="/singUp" render={() => <Register setUsers={setUsers} />} />
			<Route exact path="/login" render={() => <Login token1={setToken} setUsers={setUsers} />} />
<<<<<<< HEAD
			<Route exact path="/restaurant/:id" render={() => < RestaurantDetails token1={setRestaurantItem} token5={token} />} />
			<Route exact path="/restaurants/:typeOfFood" render={() => <FliterByTypeOfFood typeItem={type} />} />
			<Route exact path="/profile" render={() => <Profile userP={users}/>} />
			<Route exact path="/booking" render={() => <Booking userB={users} />} />
			<Route exact path="/about-us" component={About} />
			<div className="slider">
			</div>
=======
			<Route exact path="/restaurant/:id" render={() => < RestaurantDetails token1={setRestaurantItem} token5={token} user5={users} book1={setRestBooking} token6={setToken} user55={setUsers}/>} />
			<Route exact path="/restaurants/:typeOfFood" render={() => <FliterByTypeOfFood typeItem={type} />} />
			<Route exact path="/profile" render={() => <Profile userP={users} userpp={setUsers}/>} />
			<Route exact path="/booking" render={() => <Booking userB={users} book2={restBooking} userBB={setUsers} />} />
			<Route exact path="/about-us" component={About} />
			<div className="slider">
			</div>
		</div>
	);
>>>>>>> a062c707f320beca8d8c7f15e9b864bedb12668e


		</div>
	);
};
export default App;

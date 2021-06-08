import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import Navigation from './components/navigation';
import Register from './components/signIn/signUp';
import Login from './components/signIn/login';
import Restaurant from './components/restaurant/Restaurant';
import RestaurantDetails from './components/restaurant/restaurantDetails'
import Home from "./components/Home"
import About from "./components/aboutus/about"
import FliterByTypeOfFood from "./components/Fliter"
import Profile from './components/signIn/profile'


const App = () => {
	const [token, setToken] = useState("");
	const [restaurantItem, setRestaurantItem] = useState("");
	const [type, setType] = useState("");
	console.log("res", restaurantItem)
	console.log("type",type)
	console.log("app",token );
	return <div className="App">

		<Navigation token2={token} />
		<Route exact path="/" render={() => <Home type1={setType}/>} />
		<Route exact path="/singUp" component={Register} />
		<Route exact path="/login" render={() => <Login token1={setToken} />} />
		<Route exact path="/restaurants" component={Restaurant} />
		<Route exact path="/about-us" component={About} />
		<Route exact path="/restaurants/:id" render={() => < RestaurantDetails token1={setRestaurantItem} />} />
		<Route exact path="/restaurants/:typeOfFood" render={() => <FliterByTypeOfFood typeItem={type}/>} />
		<Route exact path="/profile" component={Profile} />
		<div className="slider">

		</div>

	</div>;
};
export default App;

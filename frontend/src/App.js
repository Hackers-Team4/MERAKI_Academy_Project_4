import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import Navigation from './components/navigation';
import Register from './components/signIn/signUp';
import Login from './components/signIn/login';
import Restaurant from './components/restaurant/Restaurant';
import RestaurantDetails from './components/restaurant/restaurantDetails'
const App = () => {
	const [token, setToken] = useState("");
	const [restaurantItem, setRestaurantItem] = useState("");
	console.log("res",restaurantItem)
	return <div className="App">
		<Navigation />	
		<Route exact path="/singUp" component={Register} />
		<Route exact path="/login" render={() => <Login token1={setToken} />}/>
		<Route exact path="/restaurants" render={() => <Restaurant item={setRestaurantItem} />}/>
		<Route path="/restaurants/:id"  render={() => <RestaurantDetails rest={restaurantItem}/>}
        />

	</div>;
};
export default App;

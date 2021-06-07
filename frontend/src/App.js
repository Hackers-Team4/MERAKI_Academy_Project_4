import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import Navigation from './components/navigation';
import Register from './components/signIn/signUp';
import Login from './components/signIn/login';
import Restaurant from './components/restaurant/Restaurant';
import Slideshow from "./components/home"
const App = () => {
	const [token, setToken] = useState("");
	return <div className="App">
		<Navigation />
		<Slideshow/>
		<Route exact path="/singUp" component={Register} />
		<Route exact path="/login" render={() => <Login token1={setToken} />}/>
		<Route exact path="/restaurants" component={Restaurant}/>

		<div className="slider">
			
		</div>
	</div>;
};

export default App;

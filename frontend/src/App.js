import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import Navigation from './components/navigation';
import Register from './components/signIn/signUp';
import Login from './components/signIn/login';
import Restaurant from './components/restaurant/Restaurant';

const App = () => {
	const [token, setToken] = useState("");
	return <div className="App">
		<Navigation />
		<Route exact path="/singUp" component={Register} />
		<Route exact path="/login" render={() => <Login token1={setToken} />}/>
		<Route exact path="/restaurants" component={Restaurant}/>
	</div>;
};

export default App;

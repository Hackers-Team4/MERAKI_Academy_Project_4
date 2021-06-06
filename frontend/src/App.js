import React from 'react';
import { Route } from 'react-router-dom';
import Navigation from './components/navigation';
import Register from './components/signIn/signUp';
import Login from './components/signIn/login';

const App = () => {
	return <div className="App">
		<Navigation/>
		<Route exact path="/singIn" component = {Register}/>
		<Route exact path="/logIn" component = {Login}/>



	</div>;
};

export default App;

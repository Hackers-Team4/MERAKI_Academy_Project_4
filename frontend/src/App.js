import React from 'react';
import { Route } from 'react-router-dom';
import Navigation from './components/navigation';
import Register from './components/signIn/signUp'

const App = () => {
	return <div className="App">
		<Navigation/>
		<Route exact path="/singIn" component = {Register}/>


	</div>;
};

export default App;

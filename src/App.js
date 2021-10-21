import React, {useState} from "react";
// import './App.css';
import MainNavigation from "./components/UI/MainNavigation";
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch
} from 'react-router-dom';
import DatePrincipale from "./components/DatePrincipale/DatePrincipale";
import Galerie from "./components/Galerie/Galerie";
import Auth from "./components/Auth/Auth";
import Profile from "./components/Auth/Profile";
import DespreFirma from "./components/DespreFirma/DespreFirma";
import DateFiscale from "./components/DateFiscale/DateFiscale";
import TipuriLucrari from "./components/TipuriLucrari/TipuriLucrari";
import Mesaje from "./components/Messaje/Mesaje";
import DateContact from "./components/DateContact/DateContact";
import TipuriAbonamente from "./components/TipuriAbonamente/TipuriAbonamente";
import Statistici from "./components/Satistici/Statistici";


import {LogginContext} from "./context/LogginContext";
import GlobalStyle from "./components/UIElements/GlobalStyle";
// import ThemeP from "./components/UIElements/ThemeProvider";


function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	let routes;
	if (isLoggedIn) {
		routes = (
			<Switch>
				<Route path="/" exact>
					<DatePrincipale/>
				</Route>
				<Route path="/galerie" exact>
					<Galerie/>
				</Route>
				<Route path="/despre-firma" exact>
					<DespreFirma/>
				</Route>
				<Route path="/date-fiscale" exact>
					<DateFiscale/>
				</Route>
				<Route path="/tipuri-lucrari" exact>
					<TipuriLucrari/>
				</Route>
				<Route path="/mesaje" exact>
					<Mesaje/>
				</Route>

				<Route path="/date-contact" exact>
					<DateContact/>
				</Route>
				<Route path="/tipuri-abonamente" exact>
					<TipuriAbonamente/>
				</Route>
				<Route path="/statistici" exact>
					<Statistici />
				</Route>
				<Route path="/" exact>
					<Auth/>
				</Route>
				<Route path="/profile" exact>
					<Profile/>
				</Route>
				<Redirect to="/"/>
			</Switch>
		);

	}
	else {
		routes = (
			<Switch>
				<Route path="/auth" exact>
					<Auth/>
				</Route>
				{/*<Redirect to="/" exact />*/}
				{/*<Route path="/profile" exact>*/}
				{/*	<Profile/>*/}
				{/*</Route>*/}
				{/*<Redirect to="/" exact />*/}
			</Switch>
		);

	}

	return (
		<LogginContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
			<Router>
				<MainNavigation/>
				<GlobalStyle />
				<main>
					{isLoggedIn ? routes : <Auth/>}
					{/*{routes}*/}
				</main>
			</Router>
		</LogginContext.Provider>

	);
}

export default App;

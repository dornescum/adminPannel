import React, {useContext} from 'react';
import {LogginContext} from "../../context/LogginContext";

const Auth = () => {
	const {setIsLoggedIn} = useContext(LogginContext);
	return (
		<>

			<h2>Username :</h2>
			<input type="text" placeholder="username"/>
			<button onClick={() => {
				setIsLoggedIn(true);
			}}> Login
			</button>
		</>
	);
};

export default Auth;

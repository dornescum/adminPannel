import React, {useContext} from 'react';
import {LogginContext} from "../../context/LogginContext";

const Profile = () => {
	const {isLoggedIn, setIsLoginIn} = useContext(LogginContext);
	return (
		<>
			<h1>Profile</h1>
			<h2>Username :</h2>
			<input type='text' placeholder='name'  />
			<button onClick={()=>{setIsLoginIn(true)}}> Login</button>
		</>
	);
};

export default Profile;

import React, {useContext, useState} from 'react';
import {LogginContext} from "../../context/LogginContext";
import styled from 'styled-components';
import {NavLink} from "react-router-dom";


const Auth = () => {
	const {setIsLoggedIn} = useContext(LogginContext);
	const [name, setName] =useState('');
	const [email, setEmail] =useState('');
	const nameHandler=(e)=>{
		console.log(e.target.value);
		setName(e.target.value)
	}
	const emailHandler=(e)=>{
		setEmail(e.target.value)
	}
	const logHandler =(e)=>{
		e.preventDefault();
		if(name.length > 3 && email.length > 6){
			setIsLoggedIn(true);
		}
		// if(email.length> 6){
		// 	setIsLoggedIn(true);
		// }

	}
	return (
		<Wrapper>
			<ContainerLogin>
				<Title>Log in</Title>
				<FormLogIn action="" onSubmit={logHandler}>
					<InputLogin placeholder="Name" value={name} onChange={nameHandler} required/>
					<InputLogin placeholder="Email" value={email} onChange={emailHandler} required/>
					<BtnLogin >Login</BtnLogin>
				</FormLogIn>

				<Account>
					<p>Dont have an account yet ?
						<NavLink to="/profile">Go here</NavLink>
					</p>
				</Account>
			</ContainerLogin>

		</Wrapper>
	);
};

export default Auth;
const Wrapper = styled.article`
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 1rem 0 0 0;
  background: var(--background);
  height: 100vh;
`;
const ContainerLogin = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  height: 550px;
  width: 450px;
  background: #e8e8e8;
  border-radius: 15px;
  margin: 6rem 0 0 0;
  transition: var(--transition);
  box-shadow: var(--dark-shadow);
  &:hover {
    background: #e3e3e3;
  }
  @media (max-width: 480px){
	margin: 2rem 0 0 0;
    height: 500px;
	width: 350px;
  }
  @media (max-width: 320px){
    margin: 1rem 0 0 0;
    height: 450px;
    width: 300px;
  }
`;
const InputLogin = styled.input`
  border: 1px solid #ccc;
  height: 20px;
  position: relative;
  top: 50px;
  margin: 1rem;
  padding: 1rem;
  border-radius: var(--radius);
  transition: var(--transition);
  outline: none;
  &:hover {
    border: 1px solid black;
  }
  &:focus {
    background: #ffffe0;
    transition: var(--transition);
  }
  @media (max-width: 768px){
	margin: .5rem 1rem;
  }
`;

const Title = styled.h1`
  text-align: center;
  text-transform: capitalize;
  margin: 3rem 0 0 0;
  @media (max-width: 768px){
    margin: 0;
  }
`;
const BtnLogin = styled.button`
  margin: 6rem 1rem;
  padding: 1rem;
  color: var(--dark-color);
  font-size: var(--font-lg);
  border-radius: var(--radius);
  //border: 1px solid var(--dark-color);
  border: none;
  box-shadow: var(--light-shadow);
  transition: var(--transition);
	cursor: pointer;
  &:hover {
    background: #cfcfcf;
    color: var(--light-color);
  }
  @media (max-width: 768px){
    margin: 4rem 1rem 0 1rem;
  }
`;
const Account = styled.div`
  display: flex;
  justify-content: space-around;
	p{
	  padding: 1rem;
	}
  a {
	padding: 1rem;
	text-transform: capitalize;
	color: var(--blue);
	text-decoration: none;
  }
  @media (max-width: 320px){
   font-size: var(--font-sm);
  }
`
const FormLogIn = styled.form`
display: flex;
  flex-direction: column;
`

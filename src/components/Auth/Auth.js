import React, {useContext} from 'react';
import {LogginContext} from "../../context/LogginContext";
import styled from 'styled-components';


const Auth = () => {
	const {setIsLoggedIn} = useContext(LogginContext);
	return (
		<Wrapper>
			{/*<h1>Loggin</h1>*/}

			<ContainerLogin>
				<Title>Log in</Title>
				<InputLogin placeholder="Name"/>
				<InputLogin placeholder="Email"/>
				<BtnLogin onClick={() => {
					setIsLoggedIn(true);
				}}>Login</BtnLogin>
			</ContainerLogin>

			{/*<h2>Username :</h2>*/}
			{/*<input type="text" placeholder="username"/>*/}
			{/*<button onClick={() => {*/}
			{/*	setIsLoggedIn(true);*/}
			{/*}}> Login*/}
			{/*</button>*/}
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
  @media (max-width: 768px){
	margin: 2rem 0 0 0;
    height: 450px;
	width: 350px;
  }
  @media (max-width: 320px){
    margin: 2rem 0 0 0;
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
`;

const Title = styled.h1`
  text-align: center;
  text-transform: capitalize;
  margin: 3rem 0 0 0;
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

  &:hover {
    background: #cfcfcf;
    color: var(--light-color);
  }
`;

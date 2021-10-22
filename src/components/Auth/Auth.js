import React, {useContext, useState} from 'react';
import {LogginContext} from "../../context/LogginContext";
import styled, {css} from 'styled-components';
import {NavLink} from "react-router-dom";
import Questions from "./Questions/Questions";


const Auth = () => {
	const {setIsLoggedIn} = useContext(LogginContext);
	const [name, setName] =useState('');
	const [email, setEmail] =useState('');
	const [people, setPeople]= useState([]);
	const nameHandler=(e)=>{
		setName(e.target.value)
	}
	const emailHandler=(e)=>{
		setEmail(e.target.value)
	}
	const logHandler =(e)=>{
		e.preventDefault();
		if(name.length > 3 && email.length > 6 && email.includes('@')){
			const person = {name, email};
			setPeople((item)=>{
				return [...item, person]
			})
			setName('');
			setEmail('');
			setIsLoggedIn(true);
		}
	}
	const accountCreate = ()=>{
		alert('not ready yet')
	}
	return (
		<Wrapper>
			<ContainerLogin>
				<Title data-testid='title-login'>Log in</Title>
				<FormLogIn action="" onSubmit={logHandler}>
					<InputLogin placeholder="Name" valid={name} value={name} onChange={nameHandler} required/>
					<InputLogin placeholder="Email" valid={email} value={email} onChange={emailHandler} required/>
					<BtnLogin type='submit'>Login</BtnLogin>
				</FormLogIn>
				<Account>
					<p>Dont have an account yet ?
						<NavLink to="/profile" onClick={accountCreate} data-testid='go-here'>Go here</NavLink>
					</p>
				</Account>
			</ContainerLogin>
			<Questions />
		</Wrapper>
	);
};

export default Auth;
const Wrapper = styled.article`
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  margin: 1rem 0 0 0;
  background: var(--background);
  //height: 100vh;
  @media (max-width: 768px){
	flex-direction: column;
    justify-content: center;
	align-items: center;
  }
`;
const ContainerLogin = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  //height: 550px;
  height: 600px;
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
const InputLogin = styled.input.attrs((props)=>{
	return {placeholder: props.placeholder || 'please enter value' }
})`
  border: 1px solid #ccc;
  height: 20px;
  position: relative;
  top: 50px;
  margin: 1rem;
  padding: 1rem;
  border-radius: var(--radius);
  transition: var(--transition);
  outline: none;

  //&:active {
  //  border: 1px solid #ccc;
  //}
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
// attrs(type: 'button')
const BtnLogin = styled.button.attrs((props)=>{
	// dc exista type definit foloseste pe ala altfel button
	return {type: props.type || 'button'}
})`
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

// ${({valid})=>{
// 	return valid ? css`
//         border: 1px solid #ccc;
//       ` :css`
//         border: 1px solid red;
//       `
// }}

import React, {useContext} from 'react';
import {LogginContext} from "../../context/LogginContext";
import {Container} from "../UIElements/Container";
import {Flex} from "../UIElements/Flex";
import {Card} from "../UIElements/Card";
import {Button} from "../UIElements/Button";

import styled from "styled-components";

const Profile = () => {
	const {isLoggedIn, setIsLoginIn} = useContext(LogginContext);
	return (
		<Container>
			<Flex justify="center">
				<Card justify="center">
					<FormProfile>
						<h1>Website title</h1>
						<div>
							<label htmlFor="username">User name
							</label>
							<input type="text" id="username"/>
						</div>
						<div>
							<label htmlFor="email">Email
							</label>
							<input type="text" id="email"/>
						</div>
						<div>
							<label htmlFor="password">Pasword
							</label>
							<input type="text" id="password"/>
						</div>

						<div>
							<label htmlFor="password">Repet Pasword
							</label>
							<input type="text" id="password"/>
						</div>
						<Button bg='var(--dark-color)' onClick={()=>{setIsLoginIn(true)}}>Submit</Button>

					</FormProfile>
				</Card>
			</Flex>

		</Container>
	);
};

export default Profile;

const FormProfile = styled.form`
  width: 492px;
  height: 1270px;

  h1 {
    text-align: center;
  }

  div {
    display: flex;
    flex-direction: column;

    label {
      text-align: center;
      padding: 1rem 0;
    }

    input {
      padding: 1rem;
      font-size: var(--font-lg)
    }
  }
`;

{/*<h1>Profile</h1>*/}
{/*<h2>Username :</h2>*/}
{/*<input type='text' placeholder='name'  />*/}
{/*<button onClick={()=>{setIsLoginIn(true)}}> Login</button>*/}

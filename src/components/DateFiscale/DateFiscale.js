import React, {useState} from 'react';
import AboutCompany from "./AboutCompany";
import BankContact from "./BankContact";
import {Container} from "../UIElements/Container";
import styled from "styled-components";


const DateFiscale = () => {
	const [showAbout, setShowAbout] = useState(true);
	const [showBank, setShowBank] = useState(true);
	const handleAboutInfo =()=>{
		setShowAbout(!showAbout);
	}
	const handleBankInfo =()=>{
		setShowBank(!showBank);
		setShowAbout(!showAbout);
	}
	return (
		<Container >
			<BtnHolder data-testid='container-dateFiscale' id='btn-holder'>
				<ul>
					<li>
						<div>
							<button onClick={handleBankInfo}>About Company</button>
							<button onClick={handleBankInfo}>Bank Details</button>
						</div>
					</li>
				</ul>
			</BtnHolder>
			<h1>{showAbout && <AboutCompany />}</h1>
			<h1>{!showAbout && <BankContact />}</h1>
		</Container>
	);
};

export default DateFiscale;
const BtnHolder = styled.div`
padding: 1rem 2rem;
  ul {
	list-style-type: none;
  }
  button {
	border:1px solid red;
  }
`

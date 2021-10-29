import React, {useState} from 'react';
import AboutCompany from "./AboutCompany";
import BankContact from "./BankContact";
import {Container} from "../UIElements/Container";
import {Button} from "../UIElements/Button";
import styled from "styled-components";


const DateFiscale = () => {
	const [showAbout, setShowAbout] = useState(true);
	const [showBank, setShowBank] = useState(false);
	const handleAboutInfo =()=>{
		setShowAbout(true);
		setShowBank(false);
	}
	const handleBankInfo =()=>{
		setShowBank(true);
		setShowAbout(false);
	}
	return (
		<Container >
			<BtnHolder data-testid='container-dateFiscale' id='btn-holder'>
				<ul>
					<li>
						<div>

							<Button bg='var(--light-blue)' onClick={handleAboutInfo} className={showAbout ? 'active-link': ''}>About Company</Button>
							<Button bg='var(--light-blue)' onClick={handleBankInfo} className={showBank ? 'active-link': ''}>Bank Details</Button>
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
`

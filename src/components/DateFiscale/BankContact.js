import React, {useState} from 'react';
import styled from "styled-components";
import {Form} from "../UIElements/Form";


const BankContact = () => {
	const [bank, setBank] = useState('');
	const [iban, setIban] = useState('');
	const [message, setMessage] = useState('');
	const [county, setCounty] = useState('');

	const handleBank = (e) => {
		setBank(e.target.value);
	};
	const handleIban = (e) => {
		setIban(e.target.value);
	};
	const handleMessage = (e) => {
		// if(e.target.value.contains('banana')){
		// 	message.replace(e.target.value, 'cacat')
		// }
		if(e.target.value.includes('banana')){
			e.target.value.replaceAll(e.target.value, 'cacat');
			setMessage(e.target.value);
		}
		if(e.target.value==='banana'){
			e.target.value.replaceAll(e.target.value, 'cacat')
			setMessage(e.target.value);
		}
		// const message = e.target.value;
		// message.replace('banana', 'cacat')
		// setMessage(e.target.value);
	};
	const handleCounty = (e) => {
		setCounty(e.target.value);
	};
	const handleBankForm =(e)=>{
		e.preventDefault();
		const data ={bank, iban, message, county}
		setBank('');
		setIban('');
		setMessage('');
		setCounty('');
		console.log(data);
	}

	return (
		<div>
			<Form id='bank-form' data-testid='bak-form' onSubmit={handleBankForm}>
				<div>
					<label htmlFor="bank" id="bank-label" data-testid="bank-label">Bank</label>
					<input type="text" placeholder="bank" id="bank" value={bank} onChange={handleBank}
						   data-testid="company-input"/>
				</div>
				<div>
					<label htmlFor="iban" id="iban-label" data-testid="iban-label">Iban</label>
					<input type="text" placeholder="iban" id="iban" value={iban} onChange={handleIban}
						   data-testid="company-input"/>
				</div>
				<div>
					<label htmlFor="message" id="message-label" data-testid="message-label">Message</label>
					{/*<input type="text" placeholder="company" id="company" value={message} onChange={handleMessage}*/}
					{/*	   data-testid="company-input"/>*/}
					<textarea placeholder='enter your message' id='message' rows='3' value={message} onChange={handleMessage}>
					  {/*Hello there, this is some text in a text area*/}
					</textarea>
				</div>
				<div>
					<label htmlFor="county" id="county-label" data-testid="county-label">County</label>

					<select id="county" value={county} onChange={handleCounty}>
						<option value="grapefruit">Grapefruit</option>
						<option value="lime">Lime</option>
						<option selected value="coconut">Coconut</option>
						<option value="mango">Mango</option>
					</select>
				</div>
				<div data-testid="submit-btnBank">
					<button>Submit</button>
				</div>
			</Form>
		</div>
	);
};

export default BankContact;

import React, {useState} from 'react';
import styled from "styled-components";
import {Form} from "../UIElements/Form";
import {FormContainer} from "../UIElements/FormContainer";




const BankContact = () => {
	const [bank, setBank] = useState('');
	const [iban, setIban] = useState('');
	const [message, setMessage] = useState('');
	const [county, setCounty] = useState('');
	const [checkedInput, setCheckedInput] = useState(false);


	const handleBank = (e) => {
		setBank(e.target.value);
	};
	const handleIban = (e) => {
		setIban(e.target.value);
	};
	const handleMessage = (e) => {
		// if(e.target.value.contains('banana')){
		// 	e.target.value.replace(e.target.value, 'cacat')
		// }
		// if(e.target.value.includes('banana')){
		// 	e.target.value.replaceAll(e.target.value, 'cacat');
		// 	setMessage(e.target.value);
		// }
		// if(e.target.value==='banana'){
		// 	e.target.value.replaceAll(e.target.value, 'cacat')
		// 	setMessage(e.target.value);
		// }
		let value = e.target.value;

		setMessage(e.target.value === 'banana' ? 'cacat' : value);
		// setMessage(e.target.value.contains('banana').replace('banana', 'cacat'));
		// setMessage(value);
	};
	const handleCounty = (e) => {
		setCounty(e.target.value);
	};
	const handleChecked = () => {
		setCheckedInput(true);
	};

	const handleBankForm = (e) => {
		e.preventDefault();
		if (!checkedInput){
			alert('please check to submit')
		} else if (checkedInput){
			setBank('');
			setIban('');
			setMessage('');
			setCounty('');
			setCheckedInput(false);
		}

		const data = {bank, iban, message, county};
		// setBank('');
		// setIban('');
		// setMessage('');
		// setCounty('');
		console.log(data);
	};

	return (
		<FormContainer>
			<Form id="bank-form" data-testid="bak-form" onSubmit={handleBankForm}>
				<div>
					<label htmlFor="bank" id="bank-label" data-testid="bank-label">Bank</label>
					<input type="text" placeholder="bank" id="bank" value={bank} onChange={handleBank}
						   data-testid="company-input" required={true}/>
				</div>
				<div>
					<label htmlFor="iban" id="iban-label" data-testid="iban-label">Iban</label>
					<input type="number" placeholder="iban" id="iban" value={iban} onChange={handleIban}
						    required={true}/>
				</div>
				<div>
					<label htmlFor="message" id="message-label" data-testid="message-label">Message</label>
					{/*<input type="text" placeholder="company" id="company" value={message} onChange={handleMessage}*/}
					{/*	   data-testid="company-input"/>*/}
					<textarea placeholder="enter your message" id="message" rows="5" value={message}
							  onChange={handleMessage}>
					  {/*Hello there, this is some text in a text area*/}
					</textarea>
				</div>
				<div>
					<label htmlFor="county" id="county-label" data-testid="county-label">County</label>

					<select id="county" value={county} onChange={handleCounty}>
						<option value="grapefruit">Grapefruit</option>
						<option value="lime">Lime</option>
						<option value="coconut">Coconut</option>
						<option value="mango">Mango</option>
					</select>
				</div>
				<div id="check-bank">
					{/*<input type="checkbox" data-testid='checkbox-bank'/>*/}
					{/*<p>I will sell all your info to the highest bitter</p>*/}
					<ul>
						<li>
							<input type="checkbox" data-testid="checkbox-bank" value={checkedInput}  onChange={handleChecked}/>
						</li>
						<li>
							<a href="!#" data-testid="agreed-selling">I will sell all your info to the highest
								bidder</a>
						</li>
					</ul>
				</div>
				<div data-testid="submit-btnBank">
					<button>Submit</button>
				</div>
			</Form>
			<Image>
				<a href="!#">
					<img
						src="https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHdvcmslMjB3aXRoJTIwdXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
						alt=""/>
				</a>

			</Image>
		</FormContainer>
	);
};

export default BankContact;
const Image = styled.div`
  display: block;

  img {
    border-radius: var(--radius);
    width: 100%;
    height: 100%;
    object-fit: cover;
    @media (max-width: 1024px) {
      display: none;
    }
  }
`;

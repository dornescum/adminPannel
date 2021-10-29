import React, {useState} from 'react';
import {Form} from "../UIElements/Form";
// import {Flex} from "../UIElements/Flex";
import styled from 'styled-components';


const AboutCompany = () => {

	const [company, setCompany] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [fax, setFax] = useState('');
	const [showImage, setShowImage] = useState(true);


	const handleCompany = (e) => {
		setCompany(e.target.value);
	};
	const handleEmail = (e) => {
			setEmail(e.target.value);
	};
	const handlePhone = (e) => {
		setPhone(e.target.value);
	};
	const handleFax = (e) => {
		setFax(e.target.value);
	};

	const inputValues = (e) => {
		e.preventDefault();

		const data = {company, email, phone, fax};
		console.log(data);
		setCompany('');
		setEmail('');
		setPhone('');
		setFax('');
	};
	return (
		<FormContainer>
			<Form id="form-aboutCompany" data-testid="form-about" onSubmit={inputValues}>
				<div>
					<label htmlFor="company" id="company-label" data-testis="company-label">Company</label>
					<input type="text" placeholder="company" id="company" value={company} onChange={handleCompany}
						   data-testid="company-input"  required={true}/>
				</div>
				<div>
					<label htmlFor="emai" data-testis="email-label">Email</label>
					<input type="text" placeholder="email" id="email" value={email} onChange={handleEmail}
						   data-testid="email-input"  required={true}/>
				</div>
				<div>
					<label htmlFor="phone" data-testid="phone-label">Phone</label>
					<input type="number" placeholder="phone" value={phone} id="phone" onChange={handlePhone}
						   data-testid="phone-input"/>
				</div>
				<div>
					<label htmlFor="fax" data-testid="fax-label">Fax</label>
					<input type="number" placeholder="fax number" value={fax} id="fax" onChange={handleFax}
						   data-testid="fax-input"/>
				</div>

				<div data-testid="submit-btn">
					<button>Submit</button>
				</div>

			</Form>
			{showImage && <Image>
				<a href="!#">
					<img
						src="https://images.unsplash.com/photo-1504270997636-07ddfbd48945?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHdvcmslMjB3aXRoJTIwdXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
						alt=""/>
				</a>

			</Image>}

		</FormContainer>
	);
};

export default AboutCompany;
const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`;

const Image = styled.div`
  display: block;
  background: var(--background);

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

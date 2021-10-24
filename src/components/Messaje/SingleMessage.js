import React, {useState} from 'react';
import styled from "styled-components";


const SingleMessage = ({title, body}) => {
	const [showMessage, setShowMessage] = useState(true)
	const handleMessage =()=>{
		setShowMessage(false)
	}
	return (
		<div>
			<button  onClick={handleMessage}>X</button>
			{showMessage && <Single>
				<h1>{title}</h1>
				<p>{body}</p>
			</Single>}
			{/*<Single>*/}
			{/*	/!*<button onClick={setShowMessage(!showMessage)}>X</button>*!/*/}
			{/*	<h1>{title}</h1>*/}
			{/*	<p>{body}</p>*/}
			{/*</Single>*/}
			{!showMessage && <p>No message</p>}

		</div>

	);
};

export default SingleMessage;

const Single = styled.div`
//border: 1px solid var(--dark-color);
  padding: 1rem .5rem;
  margin: 1rem 0;
  background: var(--light-color);
  border-radius: var(--radius);
  h1 {
	padding: .5rem 0 .5rem 2rem;
	margin: .5rem 0 .5rem 0;
  }
  p {
    padding: .5rem 0 .5rem 2rem;
    margin: .5rem 0 .5rem 0;
  }
`

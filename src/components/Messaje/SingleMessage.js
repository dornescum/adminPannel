import React, {useState} from 'react';
import styled from "styled-components";


const SingleMessage = ({title, body}) => {
	const [showMessage, setShowMessage] = useState(true);
	const handleMessage = () => {
		setShowMessage(!showMessage);
	};
	return (<MainSingle data-testid='main-single' className={showMessage ? 'block': 'flex'} >
			<Btn onClick={handleMessage}>X</Btn>
			<WrapperSingle>
				{showMessage && <Single>
					<h1>{title}</h1>
					<p>{body}</p>
				</Single>}

				{/*<Single>*/}
				{/*	/!*<button onClick={setShowMessage(!showMessage)}>X</button>*!/*/}
				{/*	<h1>{title}</h1>*/}
				{/*	<p>{body}</p>*/}
				{/*</Single>*/}
				{!showMessage && <h5 style={{padding: '0 1rem 0 0'}}>Hidden message</h5>}
			</WrapperSingle>
		</MainSingle>


	);
};

export default SingleMessage;

const Single = styled.div`
  //border: 1px solid var(--dark-color);
  padding: 1rem .5rem;
  margin: 1rem 1rem 1rem 0;
  background: var(--light-color);
  border-radius: var(--radius);
  width: 100%;

  h1 {
    padding: .5rem 0 .5rem 2rem;
    margin: .5rem 0 .5rem 0;
  }

  p {
    padding: .5rem 0 .5rem 2rem;
    margin: .5rem 0 .5rem 0;
  }
`;
const WrapperSingle = styled.div`
  display: flex;
  justify-content: space-around;
  position: relative;
`;
const Btn = styled.div`
  background: red;
  height: 1rem;
  width: 1rem;
  position: relative;
  top: 2rem;
  left: 1rem;
  z-index: 1;
`;
const MainSingle = styled.div`
  //display: ${({flex})=> flex || 'block'}
  //justify-content: space-between;
`;

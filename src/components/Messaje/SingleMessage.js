import React, {useState} from 'react';
import styled from "styled-components";
import {FaChevronDown, FaChevronRight} from "react-icons/fa";


const SingleMessage = ({title, body, id}) => {
	const [showMessage, setShowMessage] = useState(true);
	const handleMessage = () => {
		setShowMessage(!showMessage);
	};

	return (<MainSingle data-testid="main-single" className={showMessage ? 'block' : 'flex'}>
			<Btn onClick={handleMessage}>
				{showMessage && <FaChevronDown />}
				{!showMessage && <FaChevronRight />}
			</Btn>
			<WrapperSingle>

				{showMessage && <Single id={id}>
					<h1>{title}</h1>
					<p>{body}</p>
				</Single>}
				{!showMessage && <Hidden>Hidden message from : <span>{title.slice(0, 10)}</span></Hidden>}
			</WrapperSingle>
		</MainSingle>


	);
};

export default SingleMessage;

const Single = styled.div`
  //border: 1px solid var(--dark-color);
  padding: 1rem .5rem;
  //margin: 1rem 1rem 1rem 0;
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
  background: var(--dark-color);
  color: var(--light-color);
  border-radius: 50%;
  height: 1.1rem;
  width: 1.1rem;
  position: relative;
  top: 2rem;
  left: 1rem;
  z-index: 1;
  cursor: pointer;
`;
const MainSingle = styled.div`
    //display: ${({flex}) => flex || 'block'}
  //justify-content: space-between;
  background: var(--silver);
`;
const Hidden = styled.h5`
  padding: 0 1rem 0 0;

  span {
    font-weight: bolder;
    text-decoration: underline;
  }
`;

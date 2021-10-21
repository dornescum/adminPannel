import React, {useState} from 'react';
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai';
import styled from "styled-components";
import Questions from "./Questions";

const SingleQuestion = ({title, info}) => {
	const [showInfo, setShowInfo] = useState(false);
	return (
		<Question>
			<Header>
				<h4>{title}</h4>
				<PBtn onClick={() => setShowInfo(!showInfo)}>
					{showInfo ? <AiOutlineMinus/> : <AiOutlinePlus/>}
				</PBtn>
			</Header>
			{showInfo && <Response>{info}</Response>}
		</Question>
	);
};

export default SingleQuestion;

const Question = styled.article`
  padding: 1rem 1.5rem;
  //border: 2px solid var(--grey);
  margin-bottom: 1rem;
  border-radius: var(--radius);
  box-shadow: var(--light-shadow);
  transition: var(--transition);

  &:hover {
    box-shadow: var(--dark-shadow);
    background: #e3e3e3;
  }

`;
const Response = styled.p`
  color: var(--dark-color);
  margin-bottom: 0;
  margin-top: 0.5rem;
  width: 21.875rem;
  @media (max-width: 768px) {
    width: 18.75rem;
  }
  @media (max-width: 340px) {
    width: 16.5625rem;
  }
`;
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

`;
const PBtn = styled.button`
  background: transparent;
  border-color: transparent;
  width: 2rem;
  height: 2rem;
  background: var(--light-color);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: var(--dark-color);
  cursor: pointer;
  margin-left: 1rem;
  align-self: center;
  min-width: 2rem;
`;

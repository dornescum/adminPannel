import React, {useState} from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import styled from "styled-components";
import Questions from "./Questions";

const SingleQuestion = ({title, info}) => {
	const [showInfo, setShowInfo] = useState(false);
	return (
		<Question>
			<Header>
				<h4>{title}</h4>
				<button className='btn' onClick={() => setShowInfo(!showInfo)}>
					{showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
				</button>
			</Header>
			{showInfo && <Response>{info}</Response>}
		</Question>
	);
};

export default SingleQuestion;

const Question = styled.article`
 
    padding: 1rem 1.5rem;
    border: 2px solid var(--grey);
    margin-bottom: 1rem;
    border-radius: var(--radius);
    box-shadow: var(--light-shadow);
 
`
const Response = styled.p`
  color: var(--dark-color);
  margin-bottom: 0;
  margin-top: 0.5rem;
  width: 350px;
`
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

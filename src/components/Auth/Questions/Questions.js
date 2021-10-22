import React, {useState} from 'react';
import data from '../Questions/data-questions';
import SingleQuestion from '../Questions/SingleQuestion'
import styled from "styled-components";

const Questions = () => {
	const [questions, setQuestions] = useState(data);
	return (

			<QuestionContainer>
				<h3>questions and answers about login</h3>
				<section>
					{questions.map((item) => {
						return (
							// {...item} !!!
							<SingleQuestion key={item.id} {...item}></SingleQuestion>
						);
					})}
				</section>
			</QuestionContainer>

	);
};

export default Questions;

const QuestionContainer = styled.div`
  margin: 5rem 0 0 0;
  background: var(--background);
  width: 28.125rem;
  @media (max-width: 768px){
	width: 28rem;
  }
  @media (max-width: 480px){
    width: 20rem;
  }
  @media (max-width: 340px){
    width: 18.75rem;
	margin: 1rem .5rem  0 .5rem;
  }
  h3 {
	text-align: center;
  }
`

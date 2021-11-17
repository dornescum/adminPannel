import React from 'react';
import styled from "styled-components";


const SingleInfo = ({id, title}) => {
	return (

		<List id={id}>
			<MessageContainer>
				{title}
			</MessageContainer>
		</List>

	);
};

export default SingleInfo;
const List = styled.li`
  padding: .3rem 0;
  border-radius: var(--radius);
  margin: .5rem;
  cursor: pointer;

  &:hover {
    //background: #61dafb;
    box-shadow: var(--dark-shadow);
    transition: var(--transition);

  }
`;
const MessageContainer = styled.article`
  padding: .5rem .7rem;
  margin: .5rem;
  background: var(--background);
  border-radius: var(--radius);

`;

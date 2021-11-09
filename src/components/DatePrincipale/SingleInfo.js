import React from 'react';
import styled from "styled-components";


const SingleInfo = ({id, title}) => {
	return (
		<div>
			<List id={id}>
				{title}
			</List>
		</div>
	);
};

export default SingleInfo;
const List = styled.li`
padding: .3rem 0;
  &:hover{
	background: #61dafb;
  }
`

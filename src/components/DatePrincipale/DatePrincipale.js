import React from 'react';
import RightInfo from "./RightInfo";
import LeftInfo from "./LeftInfo";
import InfoAd from "./InfoAd";

import styled from "styled-components";


const DatePrincipale = () => {
	return (
		<div>
			<Header id='header-datePricipale' data-testid='test1'>
				<h1 data-testid='test'>some text</h1>
			</Header>
			<TopInfo id='top-info'>
				<RightInfo/>
				<LeftInfo/>
			</TopInfo>
			<InfoAd/>
		</div>
	);
};

export default DatePrincipale;

const TopInfo = styled.div`
  display: flex;
  justify-content: center;
  height: 40rem;
  @media (max-width: 768px) {
  flex-direction: column;
`;
const Header = styled.header`
  h1 {
    text-align: center;
  }

`

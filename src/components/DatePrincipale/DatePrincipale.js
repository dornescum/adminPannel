import React from 'react';
import RightInfo from "./RightInfo";
import LeftInfo from "./LeftInfo";
import InfoAd from "./InfoAd";

import styled from "styled-components";


const DatePrincipale = () => {
	return (
		<div>
			<TopInfo>
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
`;

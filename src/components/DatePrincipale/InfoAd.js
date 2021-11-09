import React from 'react';

import styled from "styled-components";


const InfoAd = () => {
	return (
		<ImageContainer id='img-datePricipale'>
			<img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="just an image" id='image-datePricipale'/>
		</ImageContainer>
	);
};

export default InfoAd;
const ImageContainer = styled.div`
  padding: 1rem 0;

  img{
	object-fit: cover;
    height: 100vh;
    width: 100vw;
  }
`

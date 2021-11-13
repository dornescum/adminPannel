import React from 'react';

import styled from "styled-components";


const InfoAd = () => {
	return (
		<ImageContainer id="img-datePricipale">
			<h3>some text</h3>
			<p id="hidden-text">hidden text available only on focus</p>
			<img
				src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
				alt="just an image" id="image-datePricipale"/>
		</ImageContainer>
	);
};

export default InfoAd;
const ImageContainer = styled.div`
  padding: 1rem 0;

  h3 {
    position: absolute;
    padding: 1rem;
    margin: 1rem;
    border: 1px solid #ffffff;
    cursor: pointer;
	color: #ffffff;
  }

  #hidden-text {
    display: none;
    //visibility: hidden;
  }

  h3:hover + #hidden-text {
    display: block;
    position: absolute;
    z-index: 1;
    color: red;
    //top: 25rem;
    right: 1rem;
  }

  img {
    object-fit: cover;
    height: 100vh;
    width: 100vw;
  }
`;

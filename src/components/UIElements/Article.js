import styled from 'styled-components';

export const Article = styled.article`
  display: flex;
  align-items: flex-start;
  justify-content:  ${({ justify }) => justify || 'flex-start'};
  flex-direction: ${({ layout }) => layout || 'row'};
  background: var(--light-color);
  width: 1135px;
  margin: 6rem 0 0 0;
  border-radius: var(--radius);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  padding: 1rem 1rem 1rem 3rem;
  text-align: justify;
   p {
	 padding: .1rem .5rem;
	 margin: 1rem .1rem;
   }
  h4 {
	padding: .2rem .2rem .2rem 1rem;
	text-align: start;
  }
  ol {
	padding: .2rem 0 .2rem 2rem;
	margin: .2rem;
	li {
      padding: .5rem .2rem;
      margin: .2rem;
	}
  }

  @media(max-width: 1124px){
    width: 890px;
  }
  @media(max-width: 960px){
    width: 790px;
  }
  @media(max-width: 768px){
    width: 575px;
	flex-direction: column;
  }
  @media(max-width: 420px){
    width: 310px;
    margin: 5rem 0 0 0;
	padding:.2rem .2rem .2rem .5rem;
  }
  @media(max-width: 320px){
    width: 265px;
  }
`;

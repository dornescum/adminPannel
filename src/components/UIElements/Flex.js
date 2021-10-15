import styled from 'styled-components'

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content:  ${({ justify }) => justify || 'flex-start'};
  //& > div,
  //& > ul {
  //  flex: 1;
  //}
  @media (max-width:768px) {
    flex-direction: column;
    text-align: center;
	padding: .5rem;
	margin: .5rem;
  }
  @media (max-width:480px) {

    //padding: 1rem 1.3rem;
    //margin: 1rem 1.3rem;
  }
`

import styled from 'styled-components'

export const Card = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: var(--radius);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 10px 0;
  padding: 10px;
  width: 100%;
  justify-content:  ${({ justify }) => justify || 'flex-start'};
  flex-direction: ${({ layout }) => layout || 'row'};
  img {
    width: 25%;
  }
  //& > div {
  //  flex: 1;
  //}
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

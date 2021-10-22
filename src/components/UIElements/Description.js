import styled from 'styled-components';

export const Description = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({justify}) => justify || 'flex-start'};
  background-color: #fff;
  //border-radius: var(--radius);
  //box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 10px 0;
  padding: 10px;
  width: 100%;
  flex-direction: ${({layout}) => layout || 'row'};
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

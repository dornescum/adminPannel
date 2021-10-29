import styled from 'styled-components';

export const Button = styled.button`
  border-radius: var(--radius);
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  padding: 15px 60px;
  margin: 1rem .3rem;
  width: 25rem;
  background-color: ${({bg}) => bg || '#fff'};
  color: ${({color}) => color || 'var(--light-color)'};
  transition: var(--transition);
 


  &:hover {
    opacity: 0.9;
    //transform: scale(0.99);
	//background: var(--blue);
	//color: var(--dark-color);
  }
`;

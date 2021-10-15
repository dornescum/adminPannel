import React from 'react';
// import './MainHeader.css';
import styled from 'styled-components';

const Header = styled.header`
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background: var(--dark-color);
  //background: {({props})=> {props.bg}};
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.26);
  padding: 0 1rem;
  z-index: 5;
  justify-content: space-between;
  //@media (max-width: 768px) {
  //  justify-content: space-between;
  //}
`


const MainHeader = props => {
  // return <header className="main-header">{props.children}</header>;
  return <Header>{props.children}</Header>;
};

export default MainHeader;

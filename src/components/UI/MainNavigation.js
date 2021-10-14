import React, {useState, useContext} from 'react';
import {Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';
import {FiMenu} from "react-icons/fi";
import {FaChevronRight} from "react-icons/fa";


import MainHeader from './MainHeader';
// import NavLinks from './NavLinks';
import SideDrawer from "./SideDrawer";
import Backdrop from "../UIElements/Backdrop";
import './MainNavigation.css';

import {LogginContext} from "../../context/LogginContext";


const MainNavigation = props => {
	const [drawerIsOpen, setDrawerIsOpen] = useState(false);

	const openDrawer = () => {
		setDrawerIsOpen(true);
	};

	const closeDrawer = () => {
		setDrawerIsOpen(false);
	};
	const {isLoggedIn, setIsLoggedIn} = useContext(LogginContext);

	return (
		<React.Fragment>
			{drawerIsOpen && <Backdrop onClick={closeDrawer}/>}
			{drawerIsOpen && (
				<SideDrawer>
					<nav className="main-navigation__drawer-nav">
						<h2>Title</h2>
						{isLoggedIn && <ul>
							<li>
								<NavLink to="/" onClick={closeDrawer}>Date pricipale</NavLink>
							</li>
							<li>
								<NavLink to="/galerie" onClick={closeDrawer}>Galerie foto</NavLink>
							</li>
							<li>
								<NavLink to="/despre-firma" onClick={closeDrawer}>despre firma</NavLink>
							</li>
							<li>
								<NavLink to="/date-fiscale" onClick={closeDrawer}>date fiscale</NavLink>
							</li>
							<li>
								<NavLink to="/despre-firma" onClick={closeDrawer}>tipuri lucrari</NavLink>
							</li>
							<li>
								<NavLink to="/despre-firma" onClick={closeDrawer}>mesaje</NavLink>
							</li>
							<li>
								<NavLink to="/despre-firma" onClick={closeDrawer}>date contact</NavLink>
							</li>
							<li>
								<NavLink to="/despre-firma" onClick={closeDrawer}>tipuri abonamente</NavLink>
							</li>
							<li>
								<NavLink to="/despre-firma" onClick={closeDrawer}>statistici</NavLink>
							</li>


							<li>
								<NavLink to="/profile" onClick={closeDrawer}>Profil</NavLink>
							</li>
							<li>
								<NavLink to="/auth" onClick={() => setIsLoggedIn(false)}>Logout</NavLink>
							</li>
						</ul>}
						{!isLoggedIn && <ul>
							<li>
								<NavLink to="/" onClick={() => setIsLoggedIn(true)}>Login</NavLink>
							</li>
							{/*<li>*/}
							{/*	<NavLink to="/profile">Profile</NavLink>*/}
							{/*</li>*/}
						</ul>}

					</nav>
				</SideDrawer>
			)}
			<MainHeader>
				<NavBtn onClick={openDrawer} id="hamburger">
					<FiMenu/>
				</NavBtn>
				{isLoggedIn && <Nav>
					<Logo>
						<NavLink to="/">Home</NavLink>
					</Logo>
					<AuthBtn>
						<NavLink to="/" onClick={() => setIsLoggedIn(false)}>
							<FaChevronRight/>
						</NavLink>
					</AuthBtn>
				</Nav>
				}
				{!isLoggedIn && <Nav>
					<Logo>
						<NavLink to="/profile">Profile</NavLink>
					</Logo>
					{/*<AuthBtn onClick={()=>setIsLoggedIn(true)}>*/}
					{/*	<NavLink to="/auth">Login</NavLink>*/}
					{/*</AuthBtn>*/}
				</Nav>}

			</MainHeader>
		</React.Fragment>
	);
};

export default MainNavigation;
const NavBtn = styled.button`
  width: 3rem;
  height: 3rem;
  background: transparent;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 1rem;
  cursor: pointer;
`;
const AuthBtn = styled.button`
  display: block;
  margin-right: 2rem;
  background: var(--dark-color);
  border: none;
  font-size: 1rem;

  a {
    color: var(--light-color);
    text-decoration: none;
  }

  @media (max-width: 768px) {
    //fixme dc ramane
    //display: none;
  }
`;
const Nav = styled.nav`
  background: var(--dark-color);
  display: flex;
`;
const Logo = styled.div`
  height: 1rem;
  width: 5rem;
  color: var(--light-color);

  a {
    display: flex;
    color: var(--light-color);
    margin: 0 1rem 0 0;
    text-decoration: none;
  }
`;

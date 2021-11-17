/* eslint-disable */
/// <reference types="cypress" />
import Login_PO from "../../support/pageObjects/Login/Login_PO";
import SideBar_PO from "../../support/pageObjects/Login/SideBar_PO";


describe('first test', ()=>{
	const loginFunc = new Login_PO();
	const sidebar= new SideBar_PO();

	beforeEach(()=>{
		 cy.visit('/');
		 loginFunc.login();
	 })
	it('test', function () {
		cy.get("p")
	});
	it('should have login button on ipad mini', function () {
		// eslint-disable-next-line no-undef
		cy.viewport("ipad-mini")

		cy.visit('/')
		// eslint-disable-next-line no-undef
		cy.get('button').should('have.text', 'Login')
	});
	it('should 2 input on iphone xr', function () {
		// eslint-disable-next-line no-undef
		cy.viewport('iphone-xr')
		// cy.get('input')
	});



	it('should have a div', function () {
		cy.get('div')
		cy.get('div#root')
	});
	it('should not exist id=next', function () {
		cy.get('div#next').should('not.exist')
	});
	it('should open menu on click hamburger icon ', function () {
		// cy.viewport(1280, 720)
		// cy.pause()
		cy.get('#hamburger > svg').click()
	});

	it.only('login works => sidebar logout & return to login page', function () {
		sidebar.sidebarAction();
		cy.chooseLink(11, {force: true});
		cy.get('.backdrop')
	});
	it('should pass login verifcation', function () {
		cy.get('[placeholder="Name"]').type(Cypress.env('name'));
		cy.get('[placeholder="Email"]').type(Cypress.env('password'));
		cy.get('.sc-bqyKOL').click();
	});
})

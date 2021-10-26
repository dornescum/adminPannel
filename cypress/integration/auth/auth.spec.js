/* eslint-disable */
/// <reference types="cypress" />

describe('first test', ()=>{
	 beforeEach(()=>{
		 // eslint-disable-next-line no-undef
		 // cy.visit('https://dornescu.ro')
		 cy.visit('/')
		 // cy.viewport("ipad-mini")
		 // cy.viewport("macbook-13")
	 })
	it('test', function () {
		// eslint-disable-next-line no-undef
		cy.get("p")
			// .should('have.text', 'Log In')
		// throw new Error('whoops')
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
		cy.get('input')
	});
	it('should have title Log In', function () {
		// cy.contains('Log In')
		cy.get('[data-testid=title-login]')
		cy.get('[placeholder="Name"]')
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
		cy.pause()
		cy.get('#hamburger > svg').click()
	});
	it('should alert on Go Here', function () {
		// cy.get('p > .active')
		cy.get('[data-testid=go-here]')
	});
	it('should have Profile button disabled', function () {
		// cy.get(':button').should('be.disabled')
		// todo dc nu merge should('be.disabled)?
		// cy.get('.sc-eCstlR > a').should('be.disabled')
		cy.contains("Profile").should('exist')
	});
	it('login works => redirect 3000', function () {
		cy.contains('Login').click()
		cy.url().should('include', '/')
	});
})

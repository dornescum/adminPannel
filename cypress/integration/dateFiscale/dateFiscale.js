/* eslint-disable */
/// <reference types="cypress" />
describe('date fiscale',()=>{
	beforeEach(()=>{
		cy.visit('/');
		cy.get('[placeholder="Name"]').type(Cypress.env('user_name'));
		cy.get('[placeholder="Email"]').type(Cypress.env('password'));
		cy.get('.sc-bqyKOL').click();
	})
	// it('should find side drawer buttons', function () {
	// 	// cy.get('#hamburger > svg').click();
	// 	// cy.get('#btn-holder');
	// });
	it('should find ul', function () {
		cy.get('#hamburger > svg').click();
		cy.get('.side-drawer > nav > ul');
		cy.get(' :nth-child(4) > a').click();
		cy.url().should('include', 'date-fiscale')
	});
})

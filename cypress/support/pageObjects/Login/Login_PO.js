/* eslint-disable */
/// <reference types= "cypress" />
class Login {
	login(){
		cy.visit('/');
		cy.get('[placeholder="Name"]').type(Cypress.env('name'));
		cy.get('[placeholder="Email"]').type(Cypress.env('password'));
		cy.get('.sc-bqyKOL').click();
	}
}
export default Login;

/* eslint-disable */
/// <reference types= "cypress" />
class Login {
	login(){
		cy.visit('/');
		cy.get('[placeholder="Name"]').type(Cypress.env('name'));
		cy.get('[placeholder="Email"]').type(Cypress.env('password'));
		//! id ul asta se tot schimba
		// cy.get('.sc-bqyKOL').click();
		// cy.get('.sc-dIUeWJ').click();
		cy.get('.sc-hHfuMS').click();
	}
}
export default Login;

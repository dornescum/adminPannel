/* eslint-disable */
/// <reference types= "cypress" />
import Login_PO from "../../support/pageObjects/Login/Login_PO";
import FiscalForm from '../../support/pageObjects/Login/fiscalForm';
import SideBar_PO from "../../support/pageObjects/Login/SideBar_PO";

describe('date fiscale',()=>{
	const loginFunc = new Login_PO();
	const sidebar= new SideBar_PO();
	beforeEach(()=>{
		loginFunc.login();
	})
	it('should find ul and check for 4 li', function () {
		sidebar.sidebarAction();
		// cy.get(' :nth-child(4) > a').click();
		cy.chooseLink(4);
		cy.url().should('include', 'date-fiscale')
	});
	it('should input text and send form', function () {
		sidebar.sidebarAction();
		// cy.get(' :nth-child(4) > a').click();
		cy.chooseLink(4);
		const completeCompanyTest = new FiscalForm();
		completeCompanyTest.aboutCompany(Cypress.env("user_name"), Cypress.env("email"),Cypress.env("phone"), Cypress.env("fax"));
	});
	it('should input text in bank form and send', function () {
		sidebar.sidebarAction();
		// cy.get(' :nth-child(4) > a').click();
		cy.chooseLink(4);
		cy.get('li > div > :nth-child(2)').click();
		cy.get('[data-testid=company-input]').type(Cypress.env("fax"))
		cy.get('#iban').type(Cypress.env("phone"));
		cy.get('#message').type("just a message");
		// fixme changes back to initial value after select
		cy.get('#county').select("mango").wait(2000);
		cy.get('[data-testid=checkbox-bank]').click();
		cy.get('[data-testid=submit-btnBank] > button').click();

	});
})

// cy.get('#hamburger > svg').click();
// cy.get('.side-drawer > nav > ul');

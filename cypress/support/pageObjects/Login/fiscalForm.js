/* eslint-disable */
/// <reference types= "cypress" />

class FiscalForm {
	aboutCompany(name, email, phone, fax){
		cy.get('[data-testid=company-input]').type(name);
		cy.get('[data-testid=email-input]').type(email);
		cy.get('[data-testid=phone-input]').type(phone);
		cy.get('[data-testid=fax-input]').type(fax);
		cy.get('[data-testid=submit-btn] > button').click();
	}
}
export default FiscalForm;

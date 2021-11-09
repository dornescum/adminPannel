/* eslint-disable */
/// <reference types="cypress" />
import Login_PO from "../../support/pageObjects/Login/Login_PO";
import SideBar_PO from "../../support/pageObjects/Login/SideBar_PO";


describe("fetch message", () => {
	const loginFunc = new Login_PO();
	const sidebar= new SideBar_PO();
	let result;
	before(() => {
		loginFunc.login();
	});
	it('should fetch all messages GET method', function () {
		sidebar.sidebarAction();
		// cy.get(':nth-child(6) > a').click();
		cy.chooseLink(6);
		result =cy.request('/mesaje')
		result.its("status").should("eq", 200);
	});
	it('should check for post 1', function () {
		cy.get('#1').should('contain.text', "sunt");
	});
	it('should check for post 1', function () {
	// sidebar.sidebarAction();
	// cy.get(':nth-child(6) > a').click();
	cy.intercept({
		method: "GET",
		url:"**/posts/1"
	}).as("getPost");
	cy.wait("@getPosts").its("response.status").should("eq", 200);
	cy.get("#fetch-messages > 1");
});
});


// it('should check for post 1', function () {
// 	// sidebar.sidebarAction();
// 	// cy.get(':nth-child(6) > a').click();
// 	cy.intercept({
// 		method: "GET",
// 		url:"**/posts/1"
// 	}).as("getPost");
// 	cy.wait("@getPosts").its("response.status").should("eq", 200);
// 	cy.get("#fetch-messages > 1");
// });

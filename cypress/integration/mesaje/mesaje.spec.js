/* eslint-disable */
/// <reference types="cypress" />
import Login_PO from "../../support/pageObjects/Login/Login_PO";
import SideBar_PO from "../../support/pageObjects/Login/SideBar_PO";
import {getMessage} from "@testing-library/jest-dom/dist/utils";


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
		result =cy.request('/mesaje');

		result.its("status").should("eq", 200);
	});
	it('should check for post 1', function () {
		cy.get('#1').should('contain.text', "sunt");
	});
	it('should get request body', function () {
		cy.intercept('GET', "**/jsonplaceholder.typicode.com/*").as('getMessages');
		// result =cy.request('/mesaje');
		cy.log('@getMessages');
		cy.wait('@getMessages').should(({request, response})=>{
			// cy.log(JSON.stringify(request));
			// cy.log(JSON.stringify(response));
		})
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

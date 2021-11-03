/* eslint-disable */
/// <reference types= "cypress" />
class SideBar_PO {
	sidebarAction (){
		cy.get('#hamburger > svg').click();
		cy.get('.side-drawer > nav > ul');
		// cy.get(' :nth-child(4) > a').click();
	}
}
export default SideBar_PO;

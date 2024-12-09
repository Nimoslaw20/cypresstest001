// cypress/support/pages/LoginPage.js

export class LoginPage {


  
    visit() {
      cy.visit('/auth/login');
    }
  
  
  
    typeUsername(username) {
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(username);
    }
  
    typePassword(password) {
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(password);
    }
  
    clickLoginButton() {
      cy.get('.oxd-button').click();
    }
  
    login(username, password) {
      this.typeUsername(username);
      this.typePassword(password);
      this.clickLoginButton();
    }

    constructor(){

    };
  }
  

  
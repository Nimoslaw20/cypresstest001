// cypress/integration/login.spec.js

import { LoginPage } from '../../support/pages/loginpage';



  const currentPage = new LoginPage();
describe('Login - Saucelab', () => {


  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
  });


  it('Login functionality', () => {
    // cy.pause();
    currentPage.visit();
    cy.fixture('user.json').as('userData');
    cy.intercept('**/third-party-script.js', { body: '' });
    cy.get('@userData').then((userData) => {
      cy.log(userData.name);
      cy.log(userData.password);
      currentPage.visit();
      currentPage.login(userData.name, userData.password);
    });
  });
});

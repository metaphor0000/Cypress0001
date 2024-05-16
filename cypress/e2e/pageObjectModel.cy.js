import { LoginPage } from "./pages/login";  

const loginPage = new LoginPage()

describe('login Test', () => {
    
    it('Login Test Page Object Model', function() {
      cy.visit('https://opensource-demo.orangehrmlive.com/');

      loginPage.enterUser('Admin');
      loginPage.enterPass('admin123');
      loginPage.clickLogin();

    //   cy.get("input[name='username']").type('Admin');
    //   cy.get("input[name='password']").type('admin123');
    //   cy.get('.oxd-button').click();

    //cy.get("[class=oxd-text oxd-text--span oxd-main-menu-item--name]").click()
    cy.contains("PIM").click()
    cy.get("button[class='oxd-button oxd-button--medium oxd-button--secondary']").click()
    cy.get("input[placeholder='First name']").type("A")
    cy.get("input[placeholder='Middle name']").type("B")
    cy.get("input[placeholder='Last Name']").type("C")
    cy.get("div[class='oxd-input-group oxd-input-field-bottom-space'] div input[class='oxd-input oxd-input--active']").type("123")
    cy.get("button[type='submit']").click()


    });
  })
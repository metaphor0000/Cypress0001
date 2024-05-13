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
    });
  })
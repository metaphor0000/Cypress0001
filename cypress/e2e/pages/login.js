import { LoginLocators } from "../wiring/loginLocators";

const loginlocators = new LoginLocators()

export class LoginPage{
    
    enterUser(user){
        cy.get(loginlocators.usernameLocator).type(user);
    }

    enterPass(pass){
        cy.get(loginlocators.passwordLocator).type(pass);
    }

    clickLogin(){
        cy.get(loginlocators.buttonLocator).click();
    }
}
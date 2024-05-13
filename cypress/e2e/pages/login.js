export class LoginPage{
    userObject = "input[name='username']"
    passObject = "input[name='password']"
    buttonObject= '.oxd-button'

    enterUser(user){
        cy.get(this.userObject).type(user);
    }

    enterPass(pass){
        cy.get(this.passObject).type(pass);
    }

    clickLogin(){
        cy.get(this.buttonObject).click();
    }
}
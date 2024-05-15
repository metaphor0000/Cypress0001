export class LoginLocators{
    
    userObject = "input[name='username']"
    passObject = "input[name='password']"
    buttonObject= '.oxd-button'

    get usernameLocator(){
        return this.userObject
    }

    get passwordLocator(){
        return this.passObject
    }

    get buttonLocator(){
        return this.buttonObject
    }


}
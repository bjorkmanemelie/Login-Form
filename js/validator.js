export class validator {
    constructor() { 
       this.emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //most include @ and .
        this.passwordMinLength = 8; // Minimum length requirement
    }
}



//  const validator = new validator();
//  validator.validateEmail("test@test.com");
//  validator.validatorEmail("admin@test.com");
//  validator.validatePassword("Admin123");
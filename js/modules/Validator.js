export class Validator {
  constructor() {
    //Email must include ...
    this.emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  }

  validateEmail(email) {
    if (!email.trim()) {
      return { isValid: false, error: "Email is required" };
    }

    if (!this.emailRegex.test(email)) {
      return { isValid: false, error: "Enter a valid email" };
    }

    return { isValid: true, error: "" };
  }

  validatePassword(password) {
    if (!password) {
      return { isValid: false, error: "Password is required" };
    }

    if (password.length < 8) {
      return { isValid: false, error: "Min 8 characters" };
    }

    return { isValid: true, error: "" };
  }
}

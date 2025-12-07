import { Validator } from './Validator.js';
import { UIController } from './UIController.js';

export class LoginForm {
    constructor(form) {
        this.form = form;
        this.emailInput = form.querySelector('#email');
        this.passwordInput = form.querySelector('#password');
        this.emailError = form.querySelector('#emailError');
        this.passwordError = form.querySelector('#passwordError');
        this.button = form.querySelector('button');
        
        this.validator = new Validator();
        this.ui = new UIController();
        
        this.setupEvents();
    }
    
    setupEvents() {
        // Email validation
        this.emailInput.addEventListener('input', () => {
            if (this.emailInput.value === '') {
                this.ui.clearError(this.emailInput, this.emailError);
                return;
            }
            
            const result = this.validator.validateEmail(this.emailInput.value);
            if (result.isValid) {
                this.ui.clearError(this.emailInput, this.emailError);
            } else {
                this.ui.showError(this.emailInput, this.emailError, result.error);
            }
        });
        
        // Password validation
        this.passwordInput.addEventListener('input', () => {
            if (this.passwordInput.value === '') {
                this.ui.clearError(this.passwordInput, this.passwordError);
                return;
            }
            
            const result = this.validator.validatePassword(this.passwordInput.value);
            if (result.isValid) {
                this.ui.clearError(this.passwordInput, this.passwordError);
            } else {
                this.ui.showError(this.passwordInput, this.passwordError, result.error);
            }
        });
        
        // Form submit
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    }
    
    async handleSubmit(e) {
        e.preventDefault();
        
        const email = this.emailInput.value.trim();
        const password = this.passwordInput.value;
        
        // Validate
        const emailResult = this.validator.validateEmail(email);
        const passwordResult = this.validator.validatePassword(password);
        
        let isValid = true;
        
        if (!emailResult.isValid) {
            this.ui.showError(this.emailInput, this.emailError, emailResult.error);
            isValid = false;
        }
        
        if (!passwordResult.isValid) {
            this.ui.showError(this.passwordInput, this.passwordError, passwordResult.error);
            isValid = false;
        }
        
        if (!isValid) return;
        
        // Login
        this.ui.setLoading(this.button, true);
        
        setTimeout(() => {
            if (email === 'test@test.se' && password === 'password123') {
                alert('Login successful! ✅');
            } else {
                this.ui.showError(this.passwordInput, this.passwordError, 'Invalid credentials');
            }
            
            this.ui.setLoading(this.button, false);
        }, 1000);
    }
}



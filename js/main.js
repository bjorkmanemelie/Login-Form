import { LoginForm } from "./modules/LoginForm.js";

const form = document.getElementById("loginForm");
new LoginForm(form);

console.log("✅ Login form ready!");
console.log("Test: test@test.se / password123");

export class UIController {
  showError(input, errorDiv, message) {
    input.classList.add("error");
    errorDiv.textContent = message;
    errorDiv.classList.add("show");
  }

  clearError(input, errorDiv) {
    input.classList.remove("error");
    errorDiv.textContent = "";
    errorDiv.classList.remove("show");
  }

  setLoading(button, isLoading) {
    if (isLoading) {
      button.disabled = true;
      button.textContent = "Logging in...";
    } else {
      button.disabled = false;
      button.textContent = "Login";
    }
  }
}

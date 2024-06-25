
const submitBtn = document.querySelector("#createAccountBtn");
const errorPrompt = document.querySelector("#passwordError");
const passwordInput = document.querySelector("#password");
const passwordConfirmationInput = document.querySelector("#confirmPassword");

const checkIfMatch = () => {
    const passwordValue = document.querySelector("#password").value;
    const passwordConfirmationValue = document.querySelector("#confirmPassword").value;
    if ((passwordValue == "" && passwordConfirmationValue == "") || (!passwordConfirmationValue && passwordValue)) {
        errorPrompt.textContent = ""
        passwordInput.style.outline = "none";
        passwordConfirmationInput.style.outline = "none";
        }
    else if (passwordValue==passwordConfirmationValue) {
        
        errorPrompt.textContent = ""
        passwordConfirmationInput.style.outline = "1px solid rgb(0, 123, 108)";
        passwordInput.style.outline = "1px solid rgb(0, 123, 108)";
        return true
    }
    else {
        errorPrompt.textContent="Passwords do not match!";
        passwordInput.style.outline = "1px solid rgb(179, 0, 59)";
        passwordConfirmationInput.style.outline = "1px solid rgb(179, 0, 59)";
        return false
    }
}

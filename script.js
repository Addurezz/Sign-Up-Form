
const submitBtn = document.querySelector("#createAccountBtn");

const checkIfMatch = () => {
    const passwordInput = document.querySelector("#password").value;
    const passwordConfirmationInput = document.querySelector("#confirmPassword").value;

    if (passwordInput==passwordConfirmationInput) {
        return "Match"
    }
    else {
        return "Dont Match"
    }
}

submitBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const matchStatus = checkIfMatch();
    console.log(matchStatus)
})
console.log(`Hello World!`);

const inputPassword_DOM = document.querySelector(`#input-password`);
const inputConfirmPassword_DOM = document.querySelector(`#input-confirm-password`);
const signUpButton_DOM = document.querySelector(`#sign-up-button`);
const passwordMismatch_DOM = document.querySelector(`#password-mismatch`);

signUpButton_DOM.addEventListener(`click`, () => {
    console.log(`Submit button clicked!`);
    const ifPasswordMatch = (inputPassword_DOM.textContent === inputConfirmPassword_DOM.textContent) ? true : false;
    if (ifPasswordMatch === false) {
        console.log(`Passwords do not match!`)
        passwordMismatch_DOM.textContent = `Please make sure your password match.`;
    };
});
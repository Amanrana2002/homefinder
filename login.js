// const choicesElmCont = document.getElementById("choices-container");
// const btnSignUp = document.getElementById("btn-sign-up");
// const btnLogin = document.getElementById("btn-login");

// btnSignUp.addEventListener("click", function () {
//   choicesElmCont.classList.remove("login-step");
// });

// btnLogin.addEventListener("click", function () {
//   choicesElmCont.classList.add("login-step");
// });

/**
 * Variables
 */
const signupButton = document.getElementById('signup-button'),
    loginButton = document.getElementById('login-button'),
    userForms = document.getElementById('user_options-forms')

/**
 * Add event listener to the "Sign Up" button
 */
signupButton.addEventListener('click', () => {
  e.preventDefault();
  userForms.classList.remove('bounceRight')
  userForms.classList.add('bounceLeft')
}, false)

/**
 * Add event listener to the "Login" button
 */
loginButton.addEventListener('click', () => {
  userForms.classList.remove('bounceLeft')
  userForms.classList.add('bounceRight')
}, false)
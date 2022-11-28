// obtendo a referencia
const form = document.getElementById("form");
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const sendButton = document.getElementById("send");
// variaveis de controller para saber se esta tudo OK
let isUsername,
  isEmail,
  isPass,
  isConfirmPass = false;

// disparar o submit do botao
form.addEventListener("submit", (event) => {
  event.preventDefault(); // evitar o comportamento do form

  let usernameValue = usernameInput.value.trim();
  let emailValue = emailInput.value.trim();
  let passValue = passwordInput.value.trim();
  let confirmPassValue = confirmPasswordInput.value.trim();

  const inputValues = {
    usernameValue,
    emailValue,
    passValue,
    confirmPassValue,
  };

  validateInputs(inputValues); // validar os campos

  //   se todas as variaveis de controle tiver true deixe fazer algo.
  if (isUsername && isEmail && isPass && isConfirmPass) {

    let users = JSON.parse(localStorage.getItem("@user") || "[]");

    const user = {
      name: usernameValue,
      email: emailValue,
      passValue: passValue,
    };

    users.push(user);

    localStorage.setItem("@user", JSON.stringify(users));
    sendButton.innerText = "SENDING";
    sendButton.style.background = "#4ECA64";
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }
});

function validateInputs({
  usernameValue,
  emailValue,
  passValue,
  confirmPassValue,
}) {
  // obtendo os valores dos inputs

  if (usernameValue === "") {
    // mostrar o error em tela
    // mudar a cor do input de error
    errorsValidations(usernameInput, "Username is required.");
    isUsername = false;
  } else {
    // mostrar a cor do input de sucesso
    successValidations(usernameInput);
    isUsername = true;
  }

  if (!validateEmail(emailValue)) {
    errorsValidations(emailInput, "E-mail is required");
    isEmail = false;
  } else {
    successValidations(emailInput);
    isEmail = true;
  }

  if (passValue === "") {
    errorsValidations(passwordInput, "Password is required");
    isPass = false;
  } else if (passValue.length < 3) {
    errorsValidations(
      passwordInput,
      "Password must be longer than 3 characters"
    );
    isPass = false;
  } else {
    successValidations(passwordInput);
    isPass = true;
  }

  if (confirmPassValue === "") {
    errorsValidations(confirmPasswordInput, "Confirm password is required");
    isConfirmPass = false;
  } else if (passValue !== confirmPassValue) {
    errorsValidations(
      confirmPasswordInput,
      "Confirm password daes not match with your password"
    );
    isConfirmPass = false;
  } else {
    successValidations(confirmPasswordInput);
    isConfirmPass = true;
  }
}

// adicionar class e messagem de error
function errorsValidations(input, message) {
  const formControl = input.parentElement;
  const setError = formControl.querySelector("small");
  setError.innerText = message;
  formControl.className = "form-control error";
}

// adicionar class de sucesso
function successValidations(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

// Validar email
function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

// resetar formulario
function resetForm() {
  usernameInput.value = "";
  emailInput.value = "";
  passwordInput.value = "";
  confirmPasswordInput.value = "";
}

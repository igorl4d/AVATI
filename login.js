const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
const passwordErrorMsg = document.getElementById("password-error-msg")
const fullLoginErrorMsg = document.getElementById("full-login-error-msg")
// Função a ser rodada no click do butão:

loginButton.addEventListener("click", (e) => {
    // Escondendo os blocos de erro
    loginErrorMsg.style.display = "none";
    passwordErrorMsg.style.display = "none";
    fullLoginErrorMsg.style.display = "none";
    // Previne o envio default do formulario
    e.preventDefault();
    // Valores retirados do form
    const username = loginForm.username.value;
    const password = loginForm.password.value;  
    
    // Regex para validação de email
    var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    

    // Condicionais de validação do email e da senha
    if (re.test(username) == true && password.length > 5) {
        alert(("Login feito com sucesso"));
        location.reload();
    } 
    else if (password.length < 6 && re.test(username) == false){
        fullLoginErrorMsg.style.display = "initial";
    } 
    else if (password.length < 6 && re.test(username) == true){
        passwordErrorMsg.style.display = "initial";
    }
    else {
        loginErrorMsg.style.display = "initial";
    }
})
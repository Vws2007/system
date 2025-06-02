
function login() {
    let email = document.getElementById("user").value;
    let password = document.getElementById("pass").value;

    if (email == "admin" && password == "1234") {
        window.location.href = "./webpage/lacreme.html";
    }
    else {
        alert("Email ou senha inválidos!");
    }
}
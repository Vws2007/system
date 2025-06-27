function login(event) {
    event.preventDefault(); // Impede o envio do formulário
    let email = document.getElementById("user").value;
    let password = document.getElementById("pass").value;

    if (email === "" || password === "") {
        alert("Preencha todos os campos!");
        return; // Interrompe a função se algum campo estiver vazio
    }

    if (email === "admin" && password === "1234") {
        window.location.href = "./webpage/index.html";
    } else {
        alert("Email ou senha inválidos!");
    }
}
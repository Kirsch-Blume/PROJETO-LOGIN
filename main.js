let body = document.querySelector("body");
let usuario = document.querySelector("#usuario");
let senha = document.querySelector("#senha");
let usuarioCerto = "admin";
let senhaCerta = "123";
let form = document.querySelector("#login-form");
let msg = document.querySelector("#mensagem");
let checkbox = document.querySelector("#mostrar-senha");
let darkMode = document.querySelector("#dark-mode");

function login(event) {
  event.preventDefault();

  msg.className = "";
  if (usuario.value == usuarioCerto && senha.value == senhaCerta) {
    msg.textContent = "Login realizado com sucesso";
    msg.classList.toggle("sucesso");
    form.reset();
  } else {
    msg.textContent = "Senha/Usuário incorreto(a)";
    msg.classList.toggle("erro");
  }
  //removendo msg apos x segundos

  setTimeout(() => {
    msg.className = "";
  }, 2000);
}
//Mostrando ou ocupando a senha do usuário
checkbox.addEventListener("click", () => {
  if (senha.type == "password") {
    senha.type = "text";
  } else {
    senha.type = "password";
  }
});

darkMode.addEventListener("click", () => {
  body.classList.toggle("dark");
  form.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    darkMode.textContent = "🌞";
  } else {
    darkMode.textContent = "🌙";
  }
});

form.addEventListener("submit", login);

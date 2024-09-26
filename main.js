let usuario = document.querySelector('#usuario')
let senha = document.querySelector('#senha')
let usuarioCerto = "admin";
let senhaCerta ="123";
let form = document.querySelector("#login-form")

function login(event){
    event.preventDefault();
   

    if(usuario.value == usuarioCerto && senha.value == senhaCerta){
        alert('sucesso');
        form.reset();
    }else{
        alert('Usuário ou senha incorreto(a)');
    }
    
}

form.addEventListener("submit", login)
let formLogin = document.getElementById('login')
let formRegister = document.getElementById('register')

function loginForm() {
    formRegister.style.display = 'none'
    formLogin.style.display = 'block'
}

function registerForm() {
    formLogin.style.display = 'none'
    formRegister.style.display = 'block'
}
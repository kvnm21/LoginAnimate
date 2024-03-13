const container = document.getElementById('container');
const registreBtn = document.getElementById('registre');
const LoginBtn = document.getElementById('Login');

registreBtn.addEventListener('click', () => {
    container.classList.add("active");
});

LoginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});
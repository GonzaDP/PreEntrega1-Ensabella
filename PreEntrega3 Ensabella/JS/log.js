document.addEventListener('DOMContentLoaded', function() {
    // Manejo del formulario de registro
    const registerForm = document.getElementById('registerFormElement');
    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();
        register();
    });

    // Manejo del formulario de inicio de sesión
    const loginForm = document.getElementById('loginFormElement');
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        login();
    });

    // Manejo de enlaces para mostrar formularios
    const registerLink = document.getElementById('registerLink');
    registerLink.addEventListener('click', function(event) {
        event.preventDefault();
        showRegisterForm();
    });

    const loginLink = document.getElementById('loginLink');
    loginLink.addEventListener('click', function(event) {
        event.preventDefault();
        showLoginForm();
    });
});

function showRegisterForm() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("registerForm").style.display = "block";
}

function showLoginForm() {
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("registerForm").style.display = "none";
}

function register() {
    const username = document.getElementById("registerUsername").value;
    const password = document.getElementById("registerPassword").value;

    if (username == "" || password == "") {
        alert("Por favor, completa todos los campos.");
        return;
    }

    const user = {
        username: username,
        password: password
    };

    localStorage.setItem(username, JSON.stringify(user));
    alert("Registro exitoso. Ahora puedes iniciar sesión.");
    showLoginForm();
}

function login() {
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    const storedUser = localStorage.getItem(username);
    if (!storedUser) {
        alert("Usuario no encontrado.");
        return;
    }

    const user = JSON.parse(storedUser);

    if (user.password === password) {
        alert("Inicio de sesión exitoso.");
        window.location.href = "./index.html";
    } else {
        alert("Contraseña incorrecta.");
    }
}

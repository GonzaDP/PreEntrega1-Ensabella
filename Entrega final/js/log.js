
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
        Toastify({
            text: "Por favor, completa todos los campos.",
            className: "",
            style: {
              color: "#B22222",  
              background: "#FFD700",
            }
          }).showToast();
        return;
    }

    const user = {
        username: username,
        password: password
    };

    localStorage.setItem(username, JSON.stringify(user));
    Swal.fire({
        title: '¡Registro exitoso!',
        text: "Ahora puedes iniciar sesión.",
        icon: 'success',
        showConfirmButton: false,
      })
    setTimeout(()=> {showLoginForm();},1500);
    
}

function login() {
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    const storedUser = localStorage.getItem(username);
    if (!storedUser) {
        Toastify({
            text: "Usuario incorrecto",
            className: "",
            style: {
              background: "#B22222",
            }
          }).showToast();
        return;
    }

    const user = JSON.parse(storedUser);

    if (user.password === password) {

            Swal.fire({
                title: '¡Bienvenido!',
                text: "Inicio de sesion exitoso",
                icon: 'success',
                showConfirmButton: false,
              })
        setTimeout(()=> {window.location.href = "./index.html"},1500);
    } else {
        Toastify({
            text: "Contraseña incorrecta",
            className: "",
            style: {
              background: "#B22222",
            }
          }).showToast();
    }
}

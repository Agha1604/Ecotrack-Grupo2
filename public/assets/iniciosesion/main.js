function mostrarCrearCuenta() {
  document.getElementById("form-login").classList.add("oculto");
  document.getElementById("form-crear-cuenta").classList.remove("oculto");
  document.getElementById("form-login-email").classList.add("oculto");
}

function mostrarLoginEmail() {
  document.getElementById("form-login").classList.add("oculto");
  document.getElementById("form-crear-cuenta").classList.add("oculto");
  document.getElementById("form-login-email").classList.remove("oculto");
}

document.addEventListener("DOMContentLoaded", function () {
  const formCrear = document.getElementById("formCrearCuenta");

  if (formCrear) {
    formCrear.addEventListener("submit", function (e) {
      e.preventDefault();

      const email = document.getElementById("email").value.trim();
      const telefono = document.getElementById("telefono").value.trim();
      const dni = document.getElementById("dni").value.trim();
      const contrasena = document.getElementById("contrasena").value.trim();
      const confirmar = document
        .getElementById("confirmarContrasena")
        .value.trim();

      if (!email || !telefono || !dni || !contrasena || !confirmar) {
        alert("Por favor, complete todos los campos.");
        return;
      }

      if (contrasena !== confirmar) {
        alert("Las contraseñas no coinciden.");
        return;
      }

      const confirmarEnvio = confirm("¡Cuenta creada exitosamente!");
      if (confirmarEnvio) {
        console.log("Formulario válido. Se puede enviar al servidor.");
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const formLogin = document.getElementById("formLoginEmail");

  if (formLogin) {
    formLogin.addEventListener("submit", function (e) {
      e.preventDefault();

      const email = document.getElementById("loginEmail").value.trim();
      const contrasena = document
        .getElementById("loginContrasena")
        .value.trim();

      if (!email || !contrasena) {
        alert("Por favor, complete ambos campos.");
        return;
      }

      const emailValido = "usuario@ecotrack.com";
      const contrasenaValida = "123456";

      if (email === emailValido && contrasena === contrasenaValida) {
        const confirmacion = confirm(
          "Inicio de sesión exitoso. Bienvenido a ECOTRACK."
        );
        if (confirmacion) {
          console.log("Redirigiendo a la cuenta...");
        }
      } else {
        alert("Email o contraseña incorrectos.");
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const btnCerrarSesion = document.getElementById("cerrarSesion");

  if (btnCerrarSesion) {
    btnCerrarSesion.addEventListener("click", function () {
      alert("Sesión cerrada exitosamente.");
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const btnRecuperar = document.getElementById("btnRecuperar");

  if (btnRecuperar) {
    btnRecuperar.addEventListener("click", function () {
      const correo = document.getElementById("correoRecuperacion").value.trim();

      if (!correo) {
        alert("Por favor, ingresa tu correo.");
        return;
      }

      const correoRegistrado = "usuario@ecotrack.com";

      if (correo === correoRegistrado) {
        alert("Te hemos enviado un enlace de recuperación a tu correo.");
      } else {
        alert("Correo no registrado.");
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const btnCambiar = document.getElementById("btnCambiarContrasena");

  if (btnCambiar) {
    btnCambiar.addEventListener("click", function () {
      const actual = document.getElementById("contrasenaActual").value.trim();
      const nueva = document.getElementById("nuevaContrasena").value.trim();
      const confirmar = document
        .getElementById("confirmarContrasena")
        .value.trim();

      const contrasenaGuardada = "123456";

      if (!actual || !nueva || !confirmar) {
        alert("Por favor, complete todos los campos.");
        return;
      }

      if (actual !== contrasenaGuardada) {
        alert("La contraseña actual es incorrecta.");
        return;
      }

      if (nueva !== confirmar) {
        alert("La nueva contraseña no coincide con la confirmación.");
        return;
      }

      alert("Contraseña cambiada exitosamente.");
      document.getElementById("contrasenaActual").value = "";
      document.getElementById("nuevaContrasena").value = "";
      document.getElementById("confirmarContrasena").value = "";
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const btnCambiarCorreo = document.getElementById("btnCambiarCorreo");

  if (btnCambiarCorreo) {
    btnCambiarCorreo.addEventListener("click", function () {
      const correo = document.getElementById("nuevoCorreo").value.trim();

      const formatoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!correo) {
        alert("Por favor, ingrese un correo electrónico.");
        return;
      }

      if (!formatoValido.test(correo)) {
        alert("El formato del correo electrónico es inválido.");
        return;
      }

      alert("Correo electrónico actualizado exitosamente.");
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const btnGuardarNotificaciones = document.getElementById(
    "btnGuardarNotificaciones"
  );

  if (btnGuardarNotificaciones) {
    btnGuardarNotificaciones.addEventListener("click", function () {
      const checkSi = document.getElementById("notificacionSi").checked;
      const checkNo = document.getElementById("notificacionNo").checked;

      if (!checkSi && !checkNo) {
        alert("Por favor, selecciona una opción para las notificaciones.");
        return;
      }

      if (checkSi && checkNo) {
        alert("Solo puedes seleccionar una opción: Sí o No.");
        return;
      }

      if (checkSi) {
        alert("Notificaciones activadas.");
      } else if (checkNo) {
        alert("Notificaciones desactivadas.");
      }
    });
  }
});

const checkSi = document.getElementById("notificacionSi");
const checkNo = document.getElementById("notificacionNo");

checkSi.addEventListener("change", () => {
  if (checkSi.checked) checkNo.checked = false;
});

checkNo.addEventListener("change", () => {
  if (checkNo.checked) checkSi.checked = false;
});

document.addEventListener("DOMContentLoaded", function () {
  const inputFoto = document.getElementById("fotoPerfil");
  const vistaPrevia = document.getElementById("vistaPrevia");

  if (inputFoto) {
    inputFoto.addEventListener("change", function () {
      const archivo = inputFoto.files[0];

      if (!archivo) {
        return;
      }

      const tiposPermitidos = ["image/jpeg", "image/png", "image/jpg"];

      if (!tiposPermitidos.includes(archivo.type)) {
        alert("Formato no válido. Solo se permiten imágenes .jpg y .png.");
        inputFoto.value = ""; // limpiar selección
        vistaPrevia.style.display = "none";
        return;
      }

      const lector = new FileReader();

      lector.onload = function (e) {
        vistaPrevia.src = e.target.result;
        vistaPrevia.style.display = "block";
        alert("Imagen cargada correctamente.");
      };

      lector.readAsDataURL(archivo);
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const btnEliminarCuenta = document.getElementById("btnEliminarCuenta");

  if (btnEliminarCuenta) {
    btnEliminarCuenta.addEventListener("click", function () {
      const confirmar = confirm(
        "¿Estás seguro de que deseas eliminar tu cuenta? Esta acción no se puede deshacer."
      );

      if (confirmar) {
        alert("Cuenta eliminada exitosamente.");
      } else {
        alert("Acción cancelada. Tu cuenta sigue activa.");
      }
    });
  }
});

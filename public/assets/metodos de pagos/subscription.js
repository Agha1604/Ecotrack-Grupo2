document.addEventListener("DOMContentLoaded", function () {
  // Variables globales
  let selectedPlan = null;
  const plans = {
    free: { name: "Gratuito", price: 0 },
    premium: { name: "Premium", price: 30 },
    mega: { name: "Mega", price: 60 },
  };

  // Elementos del DOM
  const planSelectionSection = document.getElementById("plan-selection");
  const paymentFormSection = document.getElementById("payment-form");
  const paymentConfirmationSection = document.getElementById(
    "payment-confirmation"
  );
  const btnNext = document.getElementById("btn-next");
  const btnBack = document.getElementById("btn-back");
  const btnConfirm = document.getElementById("btn-confirm");
  const btnReturn = document.getElementById("btn-return");
  const confirmationMessage = document.getElementById("confirmation-message");

  // Selectores de plan
  const planButtons = document.querySelectorAll(".btn-select");
  planButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      selectedPlan = this.getAttribute("data-plan");

      // Remover selecciones previas
      document.querySelectorAll(".plan-card").forEach((card) => {
        card.classList.remove("selected");
      });
      document.querySelectorAll(".btn-select").forEach((btn) => {
        btn.classList.remove("active");
      });

      // Aplicar selección actual
      this.closest(".plan-card").classList.add("selected");
      this.classList.add("active");
      btnNext.disabled = false;
    });
  });

  // Navegación entre secciones
  btnNext.addEventListener("click", function () {
    if (!selectedPlan) return;

    planSelectionSection.classList.remove("active-section");
    planSelectionSection.classList.add("hidden-section");
    paymentFormSection.classList.remove("hidden-section");
    paymentFormSection.classList.add("active-section");
  });

  btnBack.addEventListener("click", function () {
    paymentFormSection.classList.remove("active-section");
    paymentFormSection.classList.add("hidden-section");
    planSelectionSection.classList.remove("hidden-section");
    planSelectionSection.classList.add("active-section");
  });

  btnReturn.addEventListener("click", function () {
    paymentConfirmationSection.classList.remove("active-section");
    paymentConfirmationSection.classList.add("hidden-section");
    planSelectionSection.classList.remove("hidden-section");
    planSelectionSection.classList.add("active-section");

    // Resetear selección
    resetSelection();
  });

  // Validación de formulario de pago
  const paymentForm = document.getElementById("payment-form-data");
  paymentForm.addEventListener("submit", function (e) {
    e.preventDefault();

    if (!validatePaymentForm()) return;

    // Simular procesamiento de pago
    processPayment();
  });

  // Funciones de validación
  function validatePaymentForm() {
    const cardNumber = document.getElementById("card-number").value;
    const cardExpiry = document.getElementById("card-expiry").value;
    const cardCvc = document.getElementById("card-cvc").value;
    const cardEmail = document.getElementById("card-email").value;

    if (!validateCardNumber(cardNumber)) {
      alert("Número de tarjeta inválido");
      return false;
    }

    if (!validateExpiry(cardExpiry)) {
      alert("Fecha de vencimiento inválida (MM/AA)");
      return false;
    }

    if (!validateCvc(cardCvc)) {
      alert("Código de seguridad inválido (3 dígitos)");
      return false;
    }

    if (!validateEmail(cardEmail)) {
      alert("Correo electrónico inválido");
      return false;
    }

    return true;
  }

  function validateCardNumber(number) {
    return /^\d{16}$/.test(number.replace(/\s/g, ""));
  }

  function validateExpiry(expiry) {
    return /^\d{2}\/\d{2}$/.test(expiry);
  }

  function validateCvc(cvc) {
    return /^\d{3}$/.test(cvc);
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  // Simular pago exitoso
  function processPayment() {
    btnConfirm.disabled = true;
    btnConfirm.textContent = "Procesando...";

    setTimeout(() => {
      paymentFormSection.classList.remove("active-section");
      paymentFormSection.classList.add("hidden-section");
      paymentConfirmationSection.classList.remove("hidden-section");
      paymentConfirmationSection.classList.add("active-section");

      confirmationMessage.textContent = `Tu suscripción ${plans[selectedPlan].name} ha sido activada correctamente.`;

      paymentForm.reset();
      btnConfirm.disabled = false;
      btnConfirm.textContent = "Confirmar Pago";
    }, 1500);
  }

  // Resetear selección
  function resetSelection() {
    selectedPlan = null;
    btnNext.disabled = true;
    document.querySelectorAll(".plan-card").forEach((card) => {
      card.classList.remove("selected");
    });
    document.querySelectorAll(".btn-select").forEach((btn) => {
      btn.classList.remove("active");
    });
  }

  // Formatear inputs
  document
    .getElementById("card-number")
    .addEventListener("input", function (e) {
      let value = e.target.value.replace(/\s+/g, "");
      if (value.length > 0) {
        value = value.match(new RegExp(".{1,4}", "g")).join(" ");
      }
      e.target.value = value;
    });

  document
    .getElementById("card-expiry")
    .addEventListener("input", function (e) {
      let value = e.target.value.replace(/\D/g, "");
      if (value.length >= 3) {
        value = value.substring(0, 2) + "/" + value.substring(2, 4);
      }
      e.target.value = value;
    });
});

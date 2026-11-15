// Año automático en el pie de página.
document.querySelectorAll(".year").forEach((element) => {
  element.textContent = new Date().getFullYear();
});

// Contador interactivo de compromisos (se reinicia al recargar la página).
const supportButton = document.getElementById("supportButton");
if (supportButton) {
  let count = 0;
  const countDisplay = document.getElementById("supportCount");
  const message = document.getElementById("supportMessage");

  supportButton.addEventListener("click", () => {
    count += 1;
    countDisplay.textContent = count;
    message.textContent = "¡Gracias por comprometerte a cuidar el planeta!";
    supportButton.disabled = true;
    supportButton.textContent = "¡Compromiso registrado!";
  });
}

// Validación accesible del formulario. No transmite datos a internet.
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formMessage = document.getElementById("formMessage");

    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();
      formMessage.textContent = "Revisa los campos indicados antes de enviar.";
      return;
    }

    const name = document.getElementById("name").value.trim();
    formMessage.textContent = `¡Gracias, ${name}! Tu compromiso quedó registrado en esta demostración.`;
    contactForm.reset();
  });
}

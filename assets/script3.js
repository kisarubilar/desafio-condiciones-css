function validarPassword() {
  // Obtenemos los strings seleccionados de cada menú desplegable
  const d1 = document.querySelector("#digito1").value;
  const d2 = document.querySelector("#digito2").value;
  const d3 = document.querySelector("#digito3").value;
  const mensaje = document.querySelector("#mensaje-password");

  // Concatenamos los tres dígitos para formar el intento de clave completo
  const passwordCompleto = d1 + d2 + d3;

  // REQUERIMIENTO 3: Evaluar las tres posibilidades mediante if, else if y else
  if (passwordCompleto === "911") {
    mensaje.innerHTML = "password 1 correcto";
    mensaje.style.color = "green";
  } else if (passwordCompleto === "714") {
    mensaje.innerHTML = "password 2 es correcto";
    mensaje.style.color = "green";
  } else {
    mensaje.innerHTML = "password incorrecto";
    mensaje.style.color = "red";
  }
}
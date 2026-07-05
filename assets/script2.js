function verificarStickers() {
  // Capturamos los valores de los inputs y los transformamos a números (parseInt)
  const s1 = parseInt(document.querySelector("#sticker1").value) || 0;
  const s2 = parseInt(document.querySelector("#sticker2").value) || 0;
  const s3 = parseInt(document.querySelector("#sticker3").value) || 0;
  const mensaje = document.querySelector("#mensaje-resultado");

  const total = s1 + s2 + s3;

  // REQUERIMIENTO 2: Lógica condicional if-else
  if (total <= 10) {
    mensaje.innerHTML = `Llevas ${total} stickers`;
    mensaje.style.color = "black";
  } else {
    mensaje.innerHTML = "Llevas demasiados stickers";
    mensaje.style.color = "red";
  }
}
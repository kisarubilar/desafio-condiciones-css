const imagen = document.querySelector("#imagen-interactiva");

function alternarBorde() {
  // Comprobamos si el estilo actual tiene o no el borde rojo
  if (imagen.style.border === "2px solid red") {
    imagen.style.border = "2px solid transparent"; // Se lo quitamos
  } else {
    imagen.style.border = "2px solid red"; // Se lo agregamos
  }
}
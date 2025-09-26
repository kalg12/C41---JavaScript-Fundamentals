/* DOM - Podemos Seleccionar y Podemos Manipular */
const titulo = document.getElementById("titulo_encabezado");
titulo.innerHTML = "<h2>Hola</h2>";

/* Aquí usaremos el método para ingresar un párrafo desde JS */
const parrafoIntroductorio = document.getElementById("parrafo_introduccion");
parrafoIntroductorio.textContent =
  "Este es un parrafo introducido desde JS y no desde el HTML";

/* Creación de nodos o elementos */
const p = document.createElement("p");
p.textContent = "Soy un nuevo parrafo y fui creado desde el JS";
document.body.appendChild(p);

titulo.remove();

/* Seleccionamos con DOM al body */
const bodyElement = document.getElementsByClassName("textoTres");
console.log(bodyElement);
bodyElement[2].innerHTML = "<h1>ZOO</h1>";

const botonDeLaPagina = document.getElementById("boton");
botonDeLaPagina.addEventListener("click", () => {
  p.style.color = "red";
  alert("Haz dado un clic sobre el botón");
});

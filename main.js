//Sirve para imprimir pantalla un string
console.log("Hola");

const numeroUno = 5;
const numeroDos = "5";

console.log(numeroUno + numeroDos);
console.log(typeof numeroUno);
console.log(typeof numeroDos);
console.log("========");

if (numeroUno !== numeroDos) {
  //Si la instrucción es verdadera, se mostrará el mensaje de abajo
  console.log("Es cierto");
} else {
  //Si la instrucción es falsa, se mostrará el mensaje de abajo
  console.log("No es cierto");
}

console.log("=======");
const usuario = "admin";
const contrasenia = "123ucamp";

const contraseniaIngresada = "123ucamp";

/* Simulación de ingreso a un sistema */
if (usuario == "admin") {
  console.log("Usuario ingresado correctamente");
}
if (contrasenia === contraseniaIngresada) {
  console.log("Contraseña ingresada correctamente");
} else {
  console.log("La contraseña no correspone para el usuario: " + usuario);
}

/* Aplicar validaciones */
console.log("=======");
const edad = 18;

if (edad < 18) {
  console.log("Eres menor de edad");
} else {
  console.log("Eres mayor de edad");
}

/* Aplicar el operador && */
console.log("=======");
if (usuario === "admin" && contrasenia === contraseniaIngresada) {
  console.log("Bienvenido al sistema");
} else {
  console.log("Algo anda mal con tus credenciales");
}

/* Tablas de multiplicar */
console.log("=======");
console.log("5x1=5");
console.log("5x2=10");
console.log("5x3=15");

console.log("=======");
const numeroAMultiplicar = 90;
for (let tabla = 1; tabla <= 10; tabla++) {
  console.log(
    numeroAMultiplicar + "x" + tabla + "=" + numeroAMultiplicar * tabla
  );
}

/* Funciones */
console.log("=======");

function saludar() {
  console.log("Hola UCAMP");
}

saludar(); //Esto representa la llamada a mi función

/* Funciones con un parámetro */
console.log("=======");

function saludarDos(nombre) {
  console.log("Hola " + nombre);
}

saludarDos("Carlos"); //Esto representa la llamada a mi función

/* Funciones con parametros */
console.log("=======");

function suma(numeroUno, numeroDos) {
  console.log(numeroUno + numeroDos);
}

suma(5); //Esto representa la llamada a mi función

/* Función JS que advierte al usuario que hizo clic donde no debía */
const advertenciaAlerta = () => {
  alert("Diste clic al botón que no debías 😡");
};

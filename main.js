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
console.log("8x1=8");
console.log("8x2=16");
console.log("8x3=24");

console.log("=======");
const numeroAMultiplicar = 8;
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

suma(5, 5); //Esto representa la llamada a mi función

/* Función JS que advierte al usuario que hizo clic donde no debía */
const advertenciaAlerta = () => {
  alert("Diste clic al botón que no debías 😡");
};

/* Función que ejecuta la tabla de multiplicar del 10 */
const funcionMultiplicar10 = () => {
  const numeroAMultiplicar = 10;
  for (let tabla = 1; tabla <= 10; tabla++) {
    console.log(
      numeroAMultiplicar + "x" + tabla + "=" + numeroAMultiplicar * tabla
    );
  }
};

const funcionMultiplicar08 = () => {
  const numeroAMultiplicar = 8;
  for (let tabla = 1; tabla <= 10; tabla++) {
    console.log(
      numeroAMultiplicar + "x" + tabla + "=" + numeroAMultiplicar * tabla
    );
  }
};

/* ------------------------------------------------------------------------------- */
const mascota = {
  nombre: "Firulais",
  tieneJuguetes: true,
  tipoMascota: "Perro",
  raza: "Pastor Alemán",
  anioNacimiento: 2023,
  sexo: "Macho",
  hobbies: [
    "jugar la pelota",
    "Dormir mucho",
    "Le gusta mojarse en la lluvia ",
    "correr",
  ],
  familia: {
    madre: "Luna",
    padre: "Toby",
  },
};

/* Función que muestra en consola un objeto de ejemplo */
const funcionDispararObjetoMuestra = () => {
  /* Vamos a imprimir en consola el tipo de dato que representa la constante mascota */
  console.log(typeof mascota);
  console.log(mascota); //Esto debe hacer que en consola me salga todas las características de la mascota
  /* ¿Cómo muestro un dato específico? */
  console.log("El nombre de esta mascota es: " + mascota.nombre);
  /* ¿Qué tipo de datos es la propiedad tieneJuegues? */
  const tipoDeValor = typeof mascota.tieneJuguetes;
  console.log(
    "El tipo de dato de la propiedad tieneJuegues es: " + tipoDeValor
  );
};

/* Función que muestra en consola como funciona una clase */
const funcionDispararClaseoMuestra = () => {
  // Clase padre

  class Animal {
    constructor(nombre) {
      this.nombre = nombre;
    }

    hablar(tipoDeRuido) {
      console.log(this.nombre + tipoDeRuido);
    }
  }

  const animal = new Animal("Perro");
  const animalDos = new Animal("Gato");

  // Imprime: `Animal dice: Jirafa hace un ruido`
  console.log(`Animal dice: ${animal.hablar("Guauuu guauu")}`);
  console.log("Animal dice: " + animalDos.hablar("Miauuuuu"));

  // Clase hija, hereda de la clase `Animal`

  class Perro extends Animal {
    constructor(nombre) {
      super(nombre);
    }

    // Sobrecarga del método `hablar`, polimorfismo
    hablar() {
      console.log(this.nombre + " ladra.");
    }
  }

  const perro = new Perro("Firulais");

  // Imprime: `Perro dice: Firulais ladra`
  console.log(`Perro dice: ${perro.hablar()}`);
};

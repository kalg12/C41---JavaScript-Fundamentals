console.log("--- Arreglos ---");
/* Los arreglos son objetos, que nos permiten almacenar cualquier tipo de dato, los arreglos
parten del número 0 y no del número 1 como comunmente tendemos a contar */
const arreglo = [
  true,
  "Carlos",
  "Roberto",
  2025,
  {
    id: "29d880b7-9909-47f1-88a4-bb7cb503e10b",
    name: "Libro",
    sku: "SUP-64KBPZ3",
    unit: "unidad",
    quantity: "4.00",
    reorderLevel: "5.00",
    isLowStock: true,
    isActive: true,
    purchasePrice: "150.00",
    createdAt: "2025-06-07T11:06:55.451Z",
    updatedAt: "2025-09-17T09:37:06.000Z",
    isFavorite: true,
    provider: {
      id: "736fe684-3d28-11f0-bf99-638574b326a2",
      name: "Cárnicos Selectos",
      contactPerson: "Carlos Ramírez",
      phone: "555-345-6789",
      email: "info@carnicosselectos.com",
      deliverySchedule: null,
      pendingAmount: "0",
      totalSpent: "0",
      averageDeliveryTime: "0",
      notes: null,
      isActive: true,
      createdAt: "2025-05-30T13:33:59.318Z",
      updatedAt: "2025-05-30T13:33:59.318Z",
    },
  },
];
console.log(typeof arreglo);
console.log(arreglo); // Imprimos en pantalla el arreglo con sus elementos
/* Imprimir el nombre de Carlos */
console.log(arreglo[1]);
/* Imprimir el nombre de Roberto pero concatenado con un texto */
console.log("El siguiente ucamper es: " + arreglo[2]);
/* LOS ARREGLOS TIENEN MÉTODOS = FUNCIONES */
/* -------------------------------------------- */
/* Dinámica de Zoologico */
let zoo = [];
console.log("-- Zoo --");
/* Imprimo los animales de mi Zoo */
console.log(zoo);
/* ¿Cuántos animales tengo? */
console.log(zoo.length);
/* Vamos a comprar un nuevo animal */
zoo.push("🐯1");
/* Vamor a verificar ahora cuantos animales tiene nuestro Zoo */
console.log(zoo);
/* ¿Cuántos animales tengo? */
console.log(zoo.length);
/* Resulta que el trigre está generando ingresos en mi Zoo, y ahora compraré 3 animales más */
zoo.push("🐯2", "🐒", "🐒");
/* Vamor a verificar ahora cuantos animales tiene nuestro Zoo */
console.log(zoo);
/* ¿Cuántos animales tengo? */
console.log(zoo.length);
/* Compramos un animal más */
zoo.push("🦈");
/* Vamor a verificar ahora cuantos animales tiene nuestro Zoo */
console.log(zoo);
/* ¿Cuántos animales tengo? */
console.log(zoo.length);
/* ------- */
/* Se muere mi último animal adquirido */
zoo.pop(); // POP elimina el último elemento de la lista
/* Vamor a verificar ahora cuantos animales tiene nuestro Zoo */
console.log(zoo);
/* ¿Cuántos animales tengo? */
console.log(zoo.length);
/* El tigre 1 ya está viejo, y vamos a venderlo */
zoo.shift();
/* Vamor a verificar ahora cuantos animales tiene nuestro Zoo */
console.log(zoo);
/* ¿Cuántos animales tengo? */
console.log(zoo.length);
/* Me donan un cocodrilo viejo, pero aguantador, y este por orden representará el primer elemento */
zoo.unshift("🐊");
/* Vamor a verificar ahora cuantos animales tiene nuestro Zoo */
console.log(zoo);
/* ¿Cuántos animales tengo? */
console.log(zoo.length);
/* ---- TOCA INSPECCIÓN Y NOS PREGUNTAN SI TENEMOS MONOS EN EL ZOO */
console.log("¿Hay monos en el zoo 🐒?");
console.log(zoo.includes("🐒")); //Esto retorna un booleano
/* Resulta que nos piden 2 monos  */
zoo.splice(2, 1);
/* Vamor a verificar ahora cuantos animales tiene nuestro Zoo */
console.log(zoo);
/* ¿Cuántos animales tengo? */
console.log(zoo.length);

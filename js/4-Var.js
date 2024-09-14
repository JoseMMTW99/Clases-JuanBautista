// Entendiendo "var" en JavaScript

/*
En las versiones más antiguas de JavaScript, la palabra clave `var` era la forma principal de declarar variables. 
Hoy en día, se usa más `let` y `const`, pero es importante entender cómo funciona `var`, especialmente por su comportamiento único.
*/

// 1. Declarar una variable con `var`

var nombre = "Carlos";
console.log(nombre); // Esto imprimirá "Carlos" en la consola.

/*
Con `var`, podemos declarar una variable y asignarle un valor. Hasta aquí parece igual a `let` o `const`,
pero hay algunos comportamientos importantes que hacen que `var` sea diferente.
*/

// 2. Reasignar una variable declarada con `var`

nombre = "Ana"; // Reasignamos un nuevo valor a la variable
console.log(nombre); // Ahora imprime "Ana"

/*
Las variables declaradas con `var` pueden ser reasignadas fácilmente, lo que es normal en muchos casos. 
Pero a diferencia de `let` y `const`, `var` tiene un comportamiento especial en cuanto a su alcance y la elevación (hoisting).
*/

// 3. Alcance de `var`

/*
El alcance se refiere a dónde podemos acceder a una variable en el código.
Las variables declaradas con `var` tienen **alcance de función**, lo que significa que solo existen dentro de la función en la que se declaran.
Si declaras una variable con `var` fuera de una función, se vuelve global.
*/

// Ejemplo de alcance global con `var`:
var globalVar = "Soy global";

function mostrarVariable() {
  console.log(globalVar); // Puede acceder a `globalVar` porque es global
}

mostrarVariable(); // Esto imprime "Soy global"

// Ejemplo de alcance de función:
function ejemploFuncion() {
  var funcionVar = "Solo existo aquí";
  console.log(funcionVar); // Esto funciona dentro de la función
}

ejemploFuncion();
// console.log(funcionVar); // Si intentamos usarla aquí, dará un error, porque `funcionVar` solo existe dentro de la función

/*
Conclusión: las variables declaradas con `var` dentro de funciones solo pueden ser usadas dentro de esas funciones, 
pero si las declaras fuera, son accesibles desde cualquier parte del código.
*/

// 4. Hoisting (Elevación)

/*
Uno de los comportamientos más confusos de `var` es el hoisting (elevación). 
En JavaScript, las declaraciones de variables con `var` se "elevan" al inicio de su ámbito (global o de función) 
antes de que el código sea ejecutado. Esto significa que puedes usar una variable con `var` antes de declararla.
*/

// Ejemplo de hoisting:
console.log(edad); // Aquí no da un error, pero imprime 'undefined'
var edad = 25;
console.log(edad); // Ahora imprime 25

/*
Aunque parece que estamos usando la variable `edad` antes de declararla, 
lo que realmente pasa es que JavaScript "eleva" la declaración de la variable al principio del código, 
aunque la asignación del valor ocurre en su lugar original. 
Es por eso que obtenemos 'undefined' en el primer `console.log`.
*/

// Esto es lo que JavaScript hace internamente:

/*
var edad;
console.log(edad); // undefined
edad = 25;
console.log(edad); // 25
*/

/*
Importante: aunque la declaración de la variable se eleva, su valor no se asigna hasta que el código llega a la línea de la asignación.
*/

// 5. Problemas con `var`

/*
El comportamiento de hoisting y el alcance global pueden hacer que `var` sea difícil de controlar en proyectos grandes,
porque es fácil sobreescribir variables sin querer. 

Por ejemplo, si declaramos una variable `var` dentro de un bucle, sigue siendo accesible fuera del bucle.
*/

// Ejemplo:
for (var i = 0; i < 3; i++) {
  console.log(i); // Imprime 0, 1, 2
}
console.log(i); // Esto imprime 3, lo que puede ser confuso

/*
Por eso, hoy en día se recomienda usar `let` o `const`, que tienen un comportamiento de alcance más predecible (por bloque).
*/

// Conclusión:
/*
- `var` tiene alcance de función y es global si no está dentro de una función.
- `var` permite la reasignación.
- `var` se eleva (hoisting), lo que significa que su declaración se mueve al principio del código en su ámbito.
- Usar `let` o `const` es más seguro en la mayoría de los casos.
*/
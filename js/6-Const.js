// Entendiendo "const" en JavaScript

/*
`const` es otra forma de declarar variables en JavaScript, introducida junto con `let` en ES6 (ECMAScript 2015).
A diferencia de `let`, las variables declaradas con `const` **no pueden ser reasignadas**, lo que significa que su valor no puede cambiar después de ser asignado.

Sin embargo, si la variable contiene un objeto o un array, las propiedades o elementos internos **sí** pueden cambiar.
*/

// 1. Declarar una variable con `const`

const nombre = "Juan";
console.log(nombre); // Imprime "Juan"

// nombre = "Pedro"; // Esto causará un error, porque `const` no permite reasignar la variable

/*
Cuando declaras una variable con `const`, debes asignarle un valor inmediatamente.
Después de asignarla, no puedes reasignar esa variable. Si intentas cambiar su valor, JavaScript lanzará un error.
*/

// 2. Alcance de bloque con `const`

/*
Igual que `let`, `const` tiene **alcance de bloque**, lo que significa que solo existe dentro del bloque `{}` donde fue declarada.
Esto es diferente de `var`, que tiene alcance de función o global.
*/

if (true) {
  const mensaje = "Este es un mensaje";
  console.log(mensaje); // Imprime "Este es un mensaje"
}

// console.log(mensaje); // Esto causará un error, porque `mensaje` solo existe dentro del bloque `if`

/*
Al igual que `let`, `const` solo es accesible dentro del bloque donde fue declarada. 
Intentar acceder a la variable fuera de su bloque resultará en un error.
*/

// 3. Constantes con objetos y arrays

/*
Aunque no puedes reasignar una variable declarada con `const`, los objetos y arrays declarados con `const` **sí pueden modificarse internamente**. 
Solo la referencia al objeto no puede cambiar.
*/

// Ejemplo con un objeto:
const persona = {
  nombre: "Carlos",
  edad: 30
};

console.log(persona.nombre); // Imprime "Carlos"

// Puedes cambiar las propiedades del objeto
persona.nombre = "Ana";
console.log(persona.nombre); // Ahora imprime "Ana"

// Pero no puedes reasignar el objeto completo
// persona = { nombre: "Pedro", edad: 25 }; // Esto causará un error

/*
Como puedes ver, aunque las propiedades del objeto pueden cambiar, no puedes reasignar un nuevo objeto a la variable `persona`.
*/

// Ejemplo con un array:
const numeros = [1, 2, 3];

console.log(numeros); // Imprime [1, 2, 3]

// Puedes modificar el array
numeros.push(4);
console.log(numeros); // Imprime [1, 2, 3, 4]

// Pero no puedes asignar un nuevo array a `numeros`
// numeros = [5, 6, 7]; // Esto causará un error

/*
El contenido de un array declarado con `const` puede modificarse (agregar o quitar elementos), 
pero no puedes reasignar un array completamente nuevo.
*/

// 4. Hoisting (Elevación) en `const`

/*
Al igual que `let`, `const` también tiene "hoisting" (elevación), pero las variables no pueden ser usadas antes de su declaración.
Intentar usar una variable `const` antes de declararla causará un error.
*/

console.log(ciudad); // Esto lanzará un error, porque `const` no permite el uso de variables antes de su declaración.
const ciudad = "Madrid";

/*
Al igual que con `let`, `const` también tiene una "Zona Temporal Muerta" (Temporal Dead Zone) hasta que se declara la variable.
Esto significa que no puedes acceder a una variable `const` antes de que el código llegue a su declaración.
*/

// 5. Buenas prácticas con `const`

/*
- Usa `const` cuando sepas que el valor de la variable no debe cambiar durante la ejecución del programa.
- Es preferible usar `const` por defecto para garantizar que las variables no sean reasignadas accidentalmente.
- Si necesitas cambiar el valor de una variable, entonces usa `let`.
*/

// Conclusión:

/*
- `const` declara variables que no pueden ser reasignadas.
- Tiene **alcance de bloque**, al igual que `let`.
- Aunque no puedes reasignar una variable `const`, los objetos y arrays declarados con `const` **sí pueden ser modificados internamente**.
- Es una buena práctica usar `const` por defecto y solo usar `let` cuando sepas que el valor de la variable cambiará.
*/
// Entendiendo "let" en JavaScript

/*
`let` es una forma más moderna de declarar variables en JavaScript.
Fue introducida en ES6 (también conocido como ECMAScript 2015) y soluciona algunos de los problemas que tenía `var`.

A diferencia de `var`, `let` tiene **alcance de bloque**, lo que significa que solo existe dentro de las llaves `{}` donde es declarada. 
También, `let` no se eleva (hoisting) de la misma manera que `var`, lo que lo hace más seguro y predecible.
*/

// 1. Declarar una variable con `let`

let nombre = "María";
console.log(nombre); // Imprime "María"

// Igual que con `var`, puedes declarar una variable y asignarle un valor usando `let`.
// La principal diferencia viene en el comportamiento del alcance y en cómo se maneja el hoisting.

// 2. Reasignar una variable declarada con `let`

nombre = "Pedro";
console.log(nombre); // Ahora imprime "Pedro"

/*
Con `let`, puedes reasignar un valor a una variable ya declarada, de forma similar a `var`. 
Sin embargo, `let` no permite que se redeclare la misma variable en el mismo ámbito, algo que `var` sí permite.
*/

// Ejemplo con `let`:

let edad = 20;
console.log(edad); // Imprime 20

// let edad = 25; // Esto causaría un error porque ya se declaró 'edad' en este ámbito

/*
En este caso, si intentamos declarar `edad` de nuevo con `let` en el mismo ámbito (ámbito global en este caso), 
JavaScript lanzará un error diciendo que `edad` ya fue declarada. Esto ayuda a prevenir errores accidentales.
*/

// 3. Alcance de bloque con `let`

/*
Las variables declaradas con `let` tienen **alcance de bloque**, lo que significa que solo existen dentro del bloque 
donde fueron declaradas (dentro de las llaves `{}`). 
Esto es diferente a `var`, que tiene alcance de función o global.
*/

if (true) {
  let mensaje = "Dentro del bloque";
  console.log(mensaje); // Imprime "Dentro del bloque"
}

// console.log(mensaje); // Esto daría un error porque 'mensaje' solo existe dentro del bloque del 'if'

/*
Como puedes ver, la variable `mensaje` solo existe dentro de las llaves `{}` del bloque `if`. 
Si intentas acceder a ella fuera del bloque, JavaScript lanzará un error diciendo que `mensaje` no está definida.
*/

// 4. Uso de `let` en bucles

/*
Uno de los usos más comunes de `let` es en bucles, ya que el alcance de bloque evita problemas comunes que ocurren con `var`.
Cada iteración del bucle con `let` tiene su propio alcance.
*/

for (let i = 0; i < 3; i++) {
  console.log(i); // Imprime 0, 1, 2
}

// console.log(i); // Esto da un error porque 'i' solo existe dentro del bucle

/*
Con `let`, la variable `i` en el bucle solo existe dentro del bloque `for`. 
Fuera del bucle, no podemos acceder a `i`, lo que es diferente de `var`, que sí permitiría el acceso a `i` fuera del bucle.
*/

// 5. Hoisting (Elevación) en `let`

/*
Las variables declaradas con `let` también son "elevadas", pero de una manera diferente a `var`.
Aunque la declaración de la variable es "elevada", no puedes usarla antes de declararla. Si lo haces, obtendrás un error de referencia.
*/

console.log(saludo); // Esto lanzará un error, porque `let` no permite el uso de variables antes de su declaración.
let saludo = "Hola";

/*
Este comportamiento se llama "Zona Temporal Muerta" (Temporal Dead Zone). 
Significa que la variable existe, pero no puedes acceder a ella hasta que el código llegue a su declaración.
*/

// 6. Buenas Prácticas con `let`

/*
- Usa `let` cuando necesites declarar una variable cuyo valor cambiará, pero no quieres que sea accesible fuera de su bloque.
- Evita usar `var`, ya que `let` tiene un comportamiento más seguro y predecible.
- Usa `const` si sabes que el valor de la variable no cambiará, para evitar reasignaciones accidentales.
*/

// Conclusión:

/*
- `let` tiene **alcance de bloque**, lo que significa que solo es accesible dentro del bloque `{}` donde fue declarada.
- `let` permite reasignar variables, pero no permite redeclararlas en el mismo bloque.
- El "hoisting" de `let` es diferente al de `var`. No puedes usar una variable `let` antes de su declaración.
- `let` es más seguro y predecible que `var` y es la mejor opción cuando necesitas declarar variables que cambiarán.
*/
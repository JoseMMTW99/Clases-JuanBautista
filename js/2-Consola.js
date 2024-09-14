// ¿Qué es la Consola y Para Qué Sirve?

/*
La consola es una herramienta que los desarrolladores usan para ver información sobre lo que está pasando en su código.
Es como un lugar secreto donde podemos ver mensajes, errores, y resultados de nuestro programa sin que se muestren en la página web.

La consola está disponible en todos los navegadores web (como Chrome, Firefox, etc.), y nos ayuda a depurar (buscar y arreglar errores) y entender cómo funciona nuestro código.

Para abrir la consola en el navegador:
  - En Chrome o Firefox: Haz clic derecho en la página y selecciona "Inspeccionar". Luego ve a la pestaña "Consola".
  - También puedes presionar F12 o Ctrl+Shift+I (Cmd+Option+I en Mac) para abrir directamente las herramientas de desarrollo.
*/

// 1. Mostrar Mensajes en la Consola

/*
Podemos usar el comando `console.log()` para mostrar mensajes o resultados de operaciones en la consola.
Esto es muy útil para verificar si nuestro código está funcionando como esperamos.
*/

console.log("Hola, esto es un mensaje en la consola."); // Muestra un mensaje de texto en la consola.

let numero = 42;
console.log("El valor de la variable 'numero' es:", numero); // Muestra el valor de una variable en la consola.

/*
Esto no se muestra en la página web, solo lo verás si abres la consola del navegador.

Podemos mostrar cualquier tipo de información en la consola:
  - Números
  - Texto (cadenas)
  - Variables
  - Resultados de operaciones
*/

// 2. Errores en la Consola

/*
Si hay un error en tu código, JavaScript te lo mostrará en la consola. Los errores te dicen qué está mal y dónde está el problema.

Por ejemplo, si intentamos usar una variable que no existe, veremos un error en la consola.
*/

console.log(mensajeQueNoExiste); // Esto dará un error, ya que 'mensajeQueNoExiste' no está definida.

/*
El error se verá algo así en la consola:
  "Uncaught ReferenceError: mensajeQueNoExiste is not defined"
  
Esto nos dice que estamos tratando de usar algo que JavaScript no reconoce, y nos ayuda a corregir el problema.
*/

// 3. Otros Comandos de Consola

/*
Además de `console.log()`, la consola tiene otros comandos útiles:

- `console.error()`: para mostrar errores en rojo, lo que puede ayudarte a notar problemas importantes.
- `console.warn()`: para mostrar advertencias en amarillo.
- `console.table()`: para mostrar datos en forma de tabla.
*/

// Ejemplos:
console.error("Este es un mensaje de error"); // Muestra un error en la consola.
console.warn("Este es un mensaje de advertencia"); // Muestra una advertencia en la consola.

let personas = [
  { nombre: "Juan", edad: 14 },
  { nombre: "Ana", edad: 13 },
  { nombre: "Luis", edad: 15 }
];

console.table(personas); // Muestra los datos en una tabla en la consola.

/*
Conclusión:
La consola es una herramienta super útil para los programadores. Nos permite probar nuestro código, ver resultados, y encontrar errores sin afectar lo que los usuarios ven en la página web.
*/
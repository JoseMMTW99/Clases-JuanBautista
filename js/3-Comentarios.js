// ¿Para Qué Sirven los Comentarios en JavaScript?

/*
Los comentarios son notas que puedes agregar a tu código para explicar lo que está haciendo.
JavaScript no ejecuta los comentarios; son solo para que tú (y otros desarrolladores) puedan entender el código más fácilmente.

Imagina que los comentarios son como anotaciones en un libro: ayudan a recordar por qué hiciste algo o cómo funciona una parte del código.
*/

// 1. Comentarios de Una Sola Línea

// Para hacer un comentario de una sola línea, usamos dos barras inclinadas (//).
// Todo lo que escribas después de esas barras no será ejecutado por JavaScript.

let nombre = "Ana"; // Aquí estamos guardando el nombre "Ana" en una variable.

// Este comentario explica lo que hace la línea de arriba.

// 2. Comentarios de Varias Líneas

/*
Si necesitas escribir un comentario más largo o explicar algo en más detalle, puedes usar comentarios de varias líneas.
Para eso, usas una barra inclinada y un asterisco (/*) al inicio, y cierras con un asterisco y una barra inclinada
*/

let edad = 14; /* 
Aquí estamos guardando la edad 14 en una variable llamada 'edad'.
Este es un comentario de varias líneas que nos permite escribir más de una línea sin tener que usar varias veces el símbolo de comentario.
*/

/*
Los comentarios de varias líneas son útiles para dar explicaciones más largas o desactivar partes grandes de código sin borrarlas.
*/

// 3. ¿Por Qué Usar Comentarios?

/*
1. Para explicar el código:
   Los comentarios ayudan a que otros programadores (o tú mismo en el futuro) entiendan lo que hace tu código.

2. Para organizar tu trabajo:
   Puedes usar comentarios para dividir tu código en secciones o dejar notas sobre lo que falta hacer.

3. Para desactivar código:
   Si quieres "apagar" temporalmente una parte del código sin borrarla, puedes comentarla.
*/

// Ejemplo de desactivar código:
let resultado = 10 + 5; // Esta línea funciona normalmente.
// console.log(resultado); // Esta línea está "apagada" porque está comentada. No se ejecuta.

// 4. Buenas Prácticas
/*
- Escribe comentarios que sean claros y útiles. No comentes cosas obvias.
- Usa comentarios para explicar "por qué" haces algo, no solo "qué" estás haciendo.
- Los comentarios deben ser breves, pero suficientes para que el código sea fácil de entender.
*/

// ¡Recuerda usar comentarios para hacer tu código más fácil de entender y mantener!
# React + Vite

En este repositorio, encontrarás dos ejemplos de código en React que implementan una lista de tareas. Ambos códigos son funcionalmente equivalentes, pero utilizan enfoques ligeramente diferentes para realizar solicitudes HTTP y manejar respuestas.

## Código 1 - Uso de Promesas y `fetch`

El primer código (`AppFetch.jsx`) utiliza promesas y el método `fetch` para realizar solicitudes HTTP y manejar las respuestas. Aquí hay un resumen de cómo funciona:

- **Solicitudes HTTP**: Las solicitudes GET y POST se realizan utilizando `fetch` para obtener y crear tareas en una lista de tareas ficticia.

- **Manejo de Promesas**: Las promesas devueltas por `fetch` se manejan utilizando el método `then` para procesar las respuestas exitosas y el método `catch` para capturar errores.

- **Funcionalidad**: El código permite agregar tareas nuevas, eliminar tareas existentes y muestra un mensaje de error si se intenta agregar una tarea vacía.

## Código 2 - Uso de Async/Await

El segundo código (`AppAsync.jsx`) utiliza la sintaxis de `async/await` para simplificar la gestión de solicitudes HTTP y respuestas. Aquí hay un resumen de cómo funciona:

- **Solicitudes HTTP**: Al igual que en el primer código, se realizan solicitudes GET y POST utilizando `fetch`.

- **Async/Await**: En lugar de encadenar `then` y `catch`, las solicitudes se manejan dentro de funciones `async` utilizando `await`. Esto simplifica el flujo de control y hace que el código sea más legible.

- **Bloques Try-Catch**: Se utiliza un bloque `try...catch` para manejar errores tanto en las solicitudes `fetch` como en el procesamiento de las respuestas.

- **Funcionalidad**: La funcionalidad general, como agregar y eliminar tareas, es la misma que en el primer código.

- **Como Utilizar**: Para probar ambos códigos, simplemente sigue las indicaciones comentadas en el archivo `main.jsx`.

## Uso

1. Clona este repositorio o descarga los archivos correspondientes.

2. Instala las dependencias de React si aún no las tienes instaladas:

3. Ejecuta la aplicación React:

4. Abre la aplicación en tu navegador y prueba ambas implementaciones.

## Conclusión:
Ambos códigos logran la misma tarea de crear, leer y eliminar tareas en una lista de tareas utilizando una API de prueba (JSONPlaceholder) y React. En términos generales, el uso de async/await se considera una práctica más moderna y legible para manejar solicitudes HTTP asincrónicas en JavaScript. Sin embargo, ambas formas son válidas y funcionarán correctamente. La elección de cuál utilizar depende en última instancia de las preferencias personales y de las convenciones de codificación en el equipo o proyecto en el que estés trabajando.
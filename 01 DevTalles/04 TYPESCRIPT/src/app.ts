
import { findUserById } from "./services/usersServices";



const usuario = findUserById(2);
console.log(usuario?.nombre ?? 'Usuario no encontrado')


console.log("Lauren Eve Mayberry")

//CONFIGURACION DE TYPESCRIPT
/* Documento README.md
https://gist.github.com/Klerith/47af527da090043f604b972b22dd4c01
*/


// npm install typscript @types/node -D

// Inicializar typescript: npx tsc --init --outDir dist/ --rootDir src

// Transpilar o compilar el poryecto a javascript: [ npx tsc ] o [ npx tsc -w para observar los cambios al instante ]


// -----Configurar nodemon en un proyecto de typescript

/* 

npm install -D nodemon ts-node

ts-node: Permite ejecutar directamente codigo de typescript en node, sin tener que transpilarlo o tener
que congifurar algo mas


Archivo de configuracon de nodemon (nodemon.json)

{

  "watch": ["src"], > Observa todo lo que este dentro de src para  ejecutarlo
  "ext": ".ts,.js", > Extensiones de archivos que va tomar en cuenta para ejecutar
  "ignore": [], > Archivos que va ignorar
  "exec": "npx ts-node ./src/app.ts" > Comando que va a utilizar para su ejecuion. NOTA: Poemos quitar 'npx' si instalamos ts-node como dependecia de desarrollo
}

// COMPILACION DE PROYECTO

nmp install -D rimraf



*/
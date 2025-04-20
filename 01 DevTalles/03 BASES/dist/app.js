"use strict";
//------------------------Importacion y exportaciones----------------------------------------------------
// Importaciones mediante CommonJS
// const { emailTemplate} = require('./01-Fundations/template')
// console.log(emailTemplate)
// require('./01-Fundations/02-Desestructuring')
//------------------------CALLBACKS----------------------------------------------------
// const {getUserById} = require('./01-Fundations/03-Callbacks')
// const id = 2
// getUserById(id, (error, user) =>{
//     // Verificamos si el callback nos devolvio un error
//     if(error){
//         throw new Error(error)
//     }
//     // Si no devolio error, enonces mostratremos el valor obtenido
//     console.log(user)
// })
//-------------------------------------------------------------------------------------
//------------------------FACTORY FUNCTIONS----------------------------------------------------
const { getAge, getAgeActual } = require("./plugins/get_Age");
const { getUuid } = require('./plugins/get_uuid');
const { MakeBuildPerson } = require('./01-Fundations/05-Factury');
// Pasamos nuestros metodos de geAge y getUuid a nuestro factory function
const buildPerson = MakeBuildPerson({ getAge, getUuid });
const kela = buildPerson({ nombre: "Keila Elizabeth", nacimiento: '2002-04-02' });
console.log(kela);
//------------------------PROMESAS----------------------------------------------------
// const { pokeongetById } = require('./01-Fundations/06-Promesas')
// import { pokeongetById } from "./01-Fundations/06-Promesas"
// // Promesasa con callback
// // pokeongetById(3, (pokemon) => {
// //     console.log(pokemon)
// // })
// // Promesas sin callbacks
// pokeongetById(85)
//     .then((pokemon) => console.log(pokemon))
//     // Cachamos el eror en caso de que surga uno
//     //.catch((err) => {console.log(err)})
//     // funallu siempre se ejecutara cuando termine de procear la soliciutd
//     .finally(() => {console.log("El proceso ha terminado correctamente")})
//------------------------LOGGER - WINSTON----------------------------------------------------
//const buildLogger = require('./plugins/logger_adapter')
// import { buildLogger } from "./plugins/logger_adapter"
// const logger = buildLogger("app.js") // app.js es el archivo es donde estamos mandando a llama el logger
// logger.log("Lauren Eve Mayberry")
// logger.error("Ocurrio un problema")
//-----------------------TYPESCRIPT-----------------------
const nombre = "Lauren Eve Mayberry";
console.log(nombre);
/* ----------------------------------------------- TEST - COVERAGE ----------------------------------------- */
/* Coverarege es una especie de reporte que como su nombre lo dice, te da la covertura de todos los metodos a los que
realizaste prueba, eh indica si hay lineas de codigo  que no han pasado las pruebas correctamente */
/* ---------------------------------------------TESTING + CODIGO DE PRODUCCIONS -------------------------------------------*/
/* Dentro de nuestros script de ejecucion, nosostros podemos indicar que nuestra aplicacion no haga un build si no pasa los
test realizados

originalmente es nuestro scipt de "build" poddemos tener lo siguiente

"build": "rimraf ./dist && tsc"

al hacer npm run build, lo que hara es borrar la carpeta donde se encuentra nuestro codigo transpilado, una vez eliminado
se vuelve a transpilar nuestro codigo a js con cambios realizados

"build": "npm run test && rimraf ./dist && tsc"

---------------------------------------------------------------------------------------------------------------------------

Ahora al hacer npm run build con la modificacion realizada en el script, primero se realizan los test sobre los metodos con los
que se hayan hecho pruebas en los archivos .test.ts , si estas pruebas no pasar correctamente, evitara que se ejecutan las siguientes
indicaciones que se indican en el script

Si las pruebas pasan, entonces se hacer el build sobre la carpeta .dist/

*/ 

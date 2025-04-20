
import yargs, { array } from "yargs";
import { yarg } from "./plugins/yargs.plugin";
import { ServerApp } from "./presentation/serverApp";
import { CreateTable } from "./domain/uses-cases/create-table-use-case";

// argv: Arguments Values
// console.log(process.argv) /* Es donde podemos ver los argumentos declarados y que son utilzados para ejecutar nuestro archivo */ 

/* 
 Nosotros tambien podemos mandar argumentos al momento de querer ejecutar nuestro archivo nodeJs

 Ejmplo:

    node dist/app.js -k -l 

*/


// ------------------------------------ Argumentos con YARGS -----------------------------------------------------------

/* Dentro de nuestro script "dev", pasamos los argumentos -b 10
ahora con el uso de yargs, nos ayudar a entener que el argumento -b tiene como valor 10

*/

// Mostramos como yargs nos devuelve neustros valores
// console.log(yarg)

// //obtenemos el valor que mandamos en el argumento de -b
// console.log(yarg.b)



// ------------------------------------ FUNCIONES ANONIMAS AUTOINVOCADAS -----------------------------------------------------

/* En node js no podemos ejecutar funciones que sean asincronas, siempre y cuando no se encuentren denrto de un 
bloque de estos mismos, es decir un metodo async function()

Ya que por defecto un archivo de nodejs es sincrono

Aqui es donde entran las funciones anonimas autoinvocables, que es preactimente una funcion que se processa en cuanto
el archivo sea ejecutado

*/


// Inicar una funcion anonima

// (async()=> {
    
//     main()
// })()

// /* Se conoce como anomima, por que no es necesario que le asignemos un nombre a comparacion de un metodo/funcion tradicional */

// async function main(){
//     console.log(yarg)

//     // Pasar los argumenotis al ejecutar nuestro archivo 
//     // npx ts-node src/app.ts -b 10 || --base 10

//     // Tambien podemos desdestrucurar todos los valores que contengan nuestro objeto de yargs
//     const {b, base} = yarg
//     console.log(`-b ${b} | --base ${base}`)

//     // Argumetos opcionales
//     //npx ts-node src/app.ts --base 10 --limite 20
//     const { l, limite } = yarg
//     console.log(`l- ${l} | --limite ${limite}`)
// }



// ------------------------------------ ARQUITECTURA LIMPIA -----------------------------------------------------


// (async()=> {
//     main()
// })()


// // Metodo que arranca los metodos de inciio
// function main(){

//     console.log(yarg)

//     // Recibir los nuevos argumentos n y d

//     /* n: Argumento que contendra el nombre del archivo a generar
//        d: Argumento que contendra el nombre del directorio donde se almacenara el archivo    
//     */
    

//     const {b:base, l:limite, s:showTable, n:nombre, d:destino} = yarg

//     // Pasamos os argumentos a los parametros del meotod run() de la clase ServerApp
//     ServerApp.run({ base, limite, showTable, nombre, destino })



// }
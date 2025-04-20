
import { argv } from "node:process"
import yargs from "yargs"
import { hideBin } from "yargs/helpers"


export const yarg = yargs(hideBin(process.argv))
    // agregar personzalicacion a nuestro argumentos
    .option('b',{
        alias: 'base', // Aginamos un alias a nuestro argumento
        type: 'number', // Indicamos que el valor que se proporcione a este sera de tipo numerico
        demandOption: true, // es un argumento obligatorio, si no se indica el archivo no serra ejecutado
        describe: "Base para la tabla de multiplicacion" // Breve descripcion de nuestro argumentos
    })

    /* En la siguiene personalizacion indcamos que el argumeto -l sera opcional, por lo cual si el usuario lo manda o no
    el archivo de todas maneras se ejecutara

    Tambien le indicamos que si el usuario no manda el argumento, tome como default el valor de 10
    */
    .option('l', {
        alias: 'limite',
        type: 'number',
        default: 10, // Indicamos el valor por defacult en caso de que no se mande el argumento
        describe: "Limite para la tabla de multiplicacion"
    })

    .option('s', {
        alias: "show",
        type: 'boolean',
        default: false,
        describe: "Mostrar la tabla"
    })
    .option('n',{

        alias: "nombre",
        type: 'string',
        default: "table",
        describe: "Nombre del archivo"
    })

    .option('d', {

        alias: "destino",
        type: 'string',
        default: 'outputs',
        describe: "Destino del archivo"
    })

    // VALIADCIONES EN NUESTROS ARGUMENTOS
    /* Podemos agregar validaciones todos los argumentos utilizando el metodo .check que yargs nos provee*/
    .check((argv, options)=> {

        /*  argv: Contiene todos los argumetos que pasemos 
            options: Contiene todas las configuraciones que definimos para nuestros argumentos    
        */

        if(argv.b < 1 ) throw `El valor que se proporcione para ${argv.b} debe ser mayor a 1`

        /*  Si todas la condiciones y validacioens que definamos son correctas, nuestro metodo de check devolvera true,
            haciedo que nuestro archivo de node puede ejecutarse 
        */
        return true
    })
    .parseSync()
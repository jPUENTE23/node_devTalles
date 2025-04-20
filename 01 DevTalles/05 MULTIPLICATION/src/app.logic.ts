import { isUtf8 } from "node:buffer"
import { Console } from "node:console"
import fs from "node:fs"

// const nombre: string = "Lauren Eve Mayberry";

// const tabla: number = 5
// const contetText: string[] = [

//     '=================================================================== \n',
//     `                       Tabla del ${tabla}                           \n`,
//     "=================================================================== \n"

// ]


// for(let num = 1; num<=10; num++){

//     contetText.push(`${tabla} * ${num} = ${tabla * num} \n`) 
// }


// const generarTabla = async( content: string[]) => {

//     let contador = 0
//     do {

//         await fs.writeFile('src/outputs/tabla-5.txt', content[contador], {
//             flag: 'a'
//         })
//         contador += 1

//     } while( contador < content.length )
//     // contador += 1

// }



// (async() => {

//     await generarTabla(contetText)

//     const data = await fs.readFile('src/outputs/tabla-5.txt', {
//         encoding: 'utf-8'
//     })

//     console.log(data)

// })()



// ---------------------------------------- CORECCION -------------------------------------------------------------------


import { yarg } from "./plugins/yargs.plugin"


// Desestructuracion de los argumentos que se mandan en el archivo
const {b, l, s} = yarg

// const tabla: number = 5
let contentBody: string = ''
const contentHeader: string = `
==================================================
                TABLA DEL ${b}
================================================== \n
`


for(let num = 1; num<=l; num++){

    contentBody += `${b} * ${num} = ${b * num} \n`
}

const contenteTxt = contentHeader + contentBody

// Si el usuario manda el argumento -s, se mostrar la tabla en consola
// de los contrario, solo se creara el archivo con la informacion
if(s){
    console.log(contenteTxt)
}


// Si nuestro directorio outputs/ no existe, hacemos que node lo creee 
const outPutPath = 'outputs'

// fs.mkadirSync, crar nuestro directorio
/* recursive: Hace referencia a si nuestro directorio contendra subcarpetas, es decir outputs/tablas/numer.. */
fs.mkdirSync(outPutPath, {recursive: true})

fs.writeFileSync(`outputs/tabla-${b}.txt`, contenteTxt )

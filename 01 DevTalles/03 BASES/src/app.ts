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

const { getAge, getAgeActual } = require("./plugins/get_Age")
const { getUuid } = require('./plugins/get_uuid')

const { MakeBuildPerson } = require('./01-Fundations/05-Factury')


// Pasamos nuestros metodos de geAge y getUuid a nuestro factory function
const buildPerson = MakeBuildPerson({getAge, getUuid})
const kela = buildPerson({nombre: "Keila Elizabeth", nacimiento: '2002-04-02'})
console.log(kela)


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

const nombre: string = "Lauren Eve Mayberry"
console.log(nombre)
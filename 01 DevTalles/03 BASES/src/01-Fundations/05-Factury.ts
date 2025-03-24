// El meotod factory function es metodo que crea una funcon
// const { v4 } = require('uuid')
// const { getAge } = require('../plugins/get_Age')
// const { getUuid } = require('../plugins/get_uuid')

/* PATRON ADAPTADOR: El patron adapatador es un patron de diseño utilizado para adapatadr una librearia o servicio de terceros
esto con la finalidad de que un futura cuado requeriamos modificar o cambiar estas librerias/servicios, se realicen desde
un solo archivo, y no tener que realizar las modificaciones en cada parte del codigo en el que se aplicaron
*/


// const buildPerson = ({nombre, nacimiento}) => {

//     return {
//         id: getUuid(),
//         nombre,
//         nacimiento,
//         edad: getAge(nacimiento)
//     }
// }


// const persona = {nombre: "Keila Elizabeth", nacimiento: '2002-04-02'}
// const keila = buildPerson(persona)
// console.log(keila)


// APLICACION DE FACTORY FUNCTIONS
// Las factory functions hacen que no dependemos de nigun otro metodo, haciendo que pasemos como paramestros los adapatadorees de getAge y getUuid


import { getAge } from "../plugins/get_Age"
import { getUuid } from "../plugins/get_uuid"


interface MakeBuildPersonProps {
    getAge: (nacimiento: string) => void,
    getUuid: () => string
}

interface PersonProps {
    nombre: string,
    nacimiento: string
}

export const MakeBuildPerson = ({getAge, getUuid}: MakeBuildPersonProps) => {

    return ({ nombre, nacimiento }: PersonProps) => {

        return {
            id: getUuid(),
            nombre,
            nacimiento,
            edad: getAge(nacimiento)
        }
    }
}

// module.exports = {
//     MakeBuildPerson
// }
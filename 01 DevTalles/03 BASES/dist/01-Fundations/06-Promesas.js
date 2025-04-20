"use strict";
// PROMSESAS
// const pokeongetById = (id, callback) => {
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pokeongetById = void 0;
//     const url = `https://pokeapi.co/api/v2/pokemon/${id}`
//     fetch(url).then((response) => {
//         response.json().then((data) => {
//             // Las promesas en javascripp por defecto siempre regrensan un undefined
//             /* Para poder regresar el valore obtenido mediante nuestras promesas, es recomendable uasr callbacks */
//             /* La siguiente linea veirica que exista un callback, si es asi, devolvera nuestro vaor obtenido */
//             callback && callback (data.name)
//         })
//     })
// }
// Promesas con .then en cadena y sin callback
// const pokeongetById = (id) => {
//     const url = `https://pokeapi.co/api/v2/pokemon/${id}`
//     return fetch(url)
//         .then((response) => response.json())
//         // .then(() => {throw new Error("Ocurrio un problema en el proceso de la solicitud")})
//         .then((pokemonm)=> pokemonm.name);
// }
// module.exports = {
//     pokeongetById
// }
//ASYNC - AWAIT: 
// async es un funcion que regresa implicitamente una promesa
// const pokeongetById = async (id) => {
//     const url = `https://pokeapi.co/api/v2/pokemon/${id}`
//     const data = await fetch(url)
//     const pokemon = await data.json()
//     return pokemon.name
//     // return fetch(url)
//     //     .then((response) => response.json())
//     //     // .then(() => {throw new Error("Ocurrio un problema en el proceso de la solicitud")})
//     //     .then((pokemonm)=> pokemonm.name);
// }
// FETCH CON PATRON DE ADAPTADOR
//const {http} = require('../plugins/http_client')
const http_client_1 = require("../plugins/http_client");
const pokeongetById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const pokemon = yield http_client_1.httpRequest.get(url);
        return pokemon.name;
    }
    catch (error) {
        throw "Ocurrio un problema en el proceso de la solicitud";
    }
});
exports.pokeongetById = pokeongetById;
// module.exports = {
//     pokeongetById
// }

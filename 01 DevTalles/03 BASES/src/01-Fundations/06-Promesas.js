
// PROMSESAS
// const pokeongetById = (id, callback) => {

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

const {http} = require('../plugins/http_client')

const pokeongetById = async (id) => {

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`

    const data = await http.get(url)
    return data
    // return fetch(url)
    //     .then((response) => response.json())
    //     // .then(() => {throw new Error("Ocurrio un problema en el proceso de la solicitud")})
    //     .then((pokemonm)=> pokemonm.name);
}

module.exports = {
    pokeongetById
}
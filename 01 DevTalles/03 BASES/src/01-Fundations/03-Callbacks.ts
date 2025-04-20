
interface Usuarios {
    id: number,
    nombre: string,
    apellidos: string
}


const usuarios: Usuarios[] = [
    {
        id: 1,
        nombre: "Lauren",
        apellidos: "Eve Mayberry"
    },
    {
        id:2,
        nombre: "Keila Elizabeth",
        apellidos: "Villanueva Perez"
    }
]

// Las callbacks son funciones que se ejcutan dentro de otro funcion
// Para definir que una funcion es de tipo callback, definimos la palabra reservada seguido de los paraemtro que va a recibir la funcion
export const getUserById = (id: number, callback: (error?: string, usuario?:Usuarios)=> void) => {

    // Para el callback, indicamos que regreasr una funcion que puede lanzar un error, un usuario

    const user = usuarios.find(user => user.id === id)

    if(!user){

        //Si le usurio no existe, devolveremos un error a nuestro callback
        setTimeout(() => {
            return callback("El usuario no ha sido encontrado")

        }, 2500);
        return
        // return callback("El usuario no ha sido encontrado")

    }

    // Si el usurio existe, entonces enviarmos como null el error, y despues el valor que va a devolver nuestro callback
    return callback(undefined, user)
}

/*NOTA: Generalmente node se desarolla mucho utlizado callnacks, asi mismo muchas de sus librearias se basan de esta manera*/

// module.exports = {
//     getUserById
// }
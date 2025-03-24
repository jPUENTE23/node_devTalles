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

export const getUserById = (id: number, callback: (error?: string, usuario?:Usuarios)=> void )=>{
    const user = usuarios.find(user => user.id === id)

    if(!user){

        return callback("El usuario no ha sido encontrado")
    }

    return callback(undefined, user)
}


// module.exports = {
//     getUserById
// }
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = void 0;
const usuarios = [
    {
        id: 1,
        nombre: "Lauren",
        apellidos: "Eve Mayberry"
    },
    {
        id: 2,
        nombre: "Keila Elizabeth",
        apellidos: "Villanueva Perez"
    }
];
const getUserById = (id, callback) => {
    const user = usuarios.find(user => user.id === id);
    if (!user) {
        return callback("El usuario no ha sido encontrado");
    }
    return callback(undefined, user);
};
exports.getUserById = getUserById;
// module.exports = {
//     getUserById
// }

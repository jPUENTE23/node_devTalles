"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findUserById = void 0;
const users_1 = require("../data/users");
const findUserById = (id) => {
    return users_1.usuarios.find(user => user.id === id);
};
exports.findUserById = findUserById;

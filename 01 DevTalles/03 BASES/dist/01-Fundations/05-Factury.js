"use strict";
// El meotod factory function es metodo que crea una funcion
// const { v4 } = require('uuid')
// const { getAge } = require('../plugins/get_Age')
// const { getUuid } = require('../plugins/get_uuid')
Object.defineProperty(exports, "__esModule", { value: true });
exports.MakeBuildPerson = void 0;
const MakeBuildPerson = ({ getAge, getUuid }) => {
    return ({ nombre, nacimiento }) => {
        return {
            id: getUuid(),
            nombre,
            nacimiento,
            edad: getAge(nacimiento)
        };
    };
};
exports.MakeBuildPerson = MakeBuildPerson;
// module.exports = {
//     MakeBuildPerson
// }

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAge = void 0;
const getAge = (nacimiento) => {
    //if(!nacimiento) return new Error("No se ha espesificado una fecha de nacimiento") //
    return new Date().getFullYear() - new Date(nacimiento).getFullYear();
};
exports.getAge = getAge;
// export const getAgeActual = (nacimiento: string) => {
//     let dateFormat = new Date(nacimiento)
//     // let horMexico = moment(dateFormat).tz("America/Mexico_City").format("YYYY-MM-DD")
//     // console.log(dateFormat)
//     // console.log(horMexico)
//     let edad = new Date().getFullYear() - new Date(nacimiento).getFullYear()
//     // const diaN = dateFormat.getDate()
//     // const mesN = dateFormat.getMonth() + 1
//     // const dia = new Date().getDate()
//     // const mes = new Date().getMonth() + 1
//     if(dateFormat.getMonth() + 1 < new Date().getMonth() + 1 && new Date().getDate() < dateFormat.getDate() ){
//         edad -= 1
//     }
//     return edad
// }

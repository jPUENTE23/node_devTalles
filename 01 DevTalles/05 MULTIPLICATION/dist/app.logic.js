"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fs_1 = __importDefault(require("node:fs"));
// const nombre: string = "Lauren Eve Mayberry";
// const tabla: number = 5
// const contetText: string[] = [
//     '=================================================================== \n',
//     `                       Tabla del ${tabla}                           \n`,
//     "=================================================================== \n"
// ]
// for(let num = 1; num<=10; num++){
//     contetText.push(`${tabla} * ${num} = ${tabla * num} \n`) 
// }
// const generarTabla = async( content: string[]) => {
//     let contador = 0
//     do {
//         await fs.writeFile('src/outputs/tabla-5.txt', content[contador], {
//             flag: 'a'
//         })
//         contador += 1
//     } while( contador < content.length )
//     // contador += 1
// }
// (async() => {
//     await generarTabla(contetText)
//     const data = await fs.readFile('src/outputs/tabla-5.txt', {
//         encoding: 'utf-8'
//     })
//     console.log(data)
// })()
// ---------------------------------------- CORECCION -------------------------------------------------------------------
const tabla = 5;
let contentBody = '';
const contentHeader = `
==================================================
                TABLA DEL ${tabla}
================================================== \n
`;
for (let num = 1; num <= 10; num++) {
    contentBody += `${tabla} * ${num} = ${tabla * num} \n`;
}
const contenteTxt = contentHeader + contentBody;
console.log(contenteTxt);
// Si nuestro directorio outputs/ no existe, hacemos que node lo creee 
const outPutPath = 'outputs';
// fs.mkadirSync, crar nuestro directorio
/* recursive: Hace referencia a si nuestro directorio contendra subcarpetas, es decir outputs/tablas/numer.. */
node_fs_1.default.mkdirSync(outPutPath, { recursive: true });
node_fs_1.default.writeFileSync(`outputs/tabla-${tabla}.txt`, contenteTxt);

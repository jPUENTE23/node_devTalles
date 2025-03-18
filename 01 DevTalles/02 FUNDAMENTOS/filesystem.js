// Librearia de File system: Lectura y manipulacion de archivos de texto
const fs = require('node:fs')

// Lectura de archivo / Forma sinrcona y bloqueante
const data = fs.readFileSync('README.md', 'utf-8')
console.log(data)

// Replazar datos dentro de un arhivo
const newdata = data.replace(/React/ig, 'NextJS')

// Escribrir un nuevo archivo de texto
fs.writeFileSync("README-NextJs.md", newdata)


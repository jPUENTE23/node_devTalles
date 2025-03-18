
const fs = require('node:fs')

const contenido = fs.readFileSync('README.md', 'utf-8')

const words = contenido.split(' ').length
console.log(`Palabras: ${words}`)
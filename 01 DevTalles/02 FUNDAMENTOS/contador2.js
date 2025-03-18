
const fs = require('node:fs')

const contenido = fs.readFileSync('README.md', 'utf-8')

const words = contenido.split(' ')

// const reactwords = words.filter(word => word.toLowerCase() === 'react')

// Encuentra todas las palabras que sean igual a react ya se con minusula o mayuscula
// Utilza expreiones regulares
const reactwords = contenido.match(/react/gi ?? []).length

console.log(`Palabras: ${words.length}`)
console.log(`Palabras react: ${reactwords}`)
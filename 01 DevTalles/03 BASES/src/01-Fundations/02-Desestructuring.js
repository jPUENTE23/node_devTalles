

/* process en es un proceso de node que esta corriendo, el cuall tiene mucha informacion acerca de la computadora
, procesos que se encuentren ejecutando, entre otras csoas
*/


// procesoes.env en donde generalmente estan todas nuestras variblaes de entorno
// console.log(process.env)

// DESESRTUCTURACION

const { PORT, SHELL } = process.env
// console.log(`${PORT} | ${SHELL}`)


// Desestructurar un arreglo

const nombres = ['Lauren', 'Eve', 'Mayberry', 'Keila']

const [Lauren] = nombres
// console.log(Lauren)

// METODOS DE DEBBUG
/* 1- Ir a packager.json
   2- Click en Debug que se encuentra encima de scripts 
*/
// Orden de ejecucion



console.log('Inicio de programa'); // 1

setTimeout( () => {
    console.log('Primer Timeout'); //5
}, 3000 );


setTimeout( () => {
    console.log('Segundo Timeout'); //4
}, 1 );


setTimeout( () => {
    console.log('Tercer Timeout');// 3
}, 0 );


console.log('Fin de programa'); //2


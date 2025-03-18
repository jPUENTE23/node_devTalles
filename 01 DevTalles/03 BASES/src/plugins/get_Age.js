const getage = require('get-age')


const getAge = (nacimiento) => {
    if(!nacimiento) return new Error("No se ha espesificado una fecha de nacimiento")

    return getage(nacimiento)
}


module.exports = {
    getAge
}
import { getUserById } from "../../src/01-Fundations/03-Callbacks";

describe('Callbacks', () => {

    test('getUserById - El usuario no ha sido encontrado - Caso de error', (done) => {

        /* Por defecto, un test, no esperara una funcion de tipo bloqueante, independientemente si la funcion
        tarda un cierto tiempo en devolver un valor, este siempre se realizara como una tarea satisfactoriamente
        
        Para hacer que nuestra test, espere a que nuestra funcion termine de ejecutarsem, debemos agregar el agumento done
        dentro de nuestro test, y llamarlo dentro de nuestra funcion de callback
        
        */

        const id = 3
        getUserById(id, (error, user) => {

            expect(error).toBe("El usuario no ha sido encontrado")
            expect(user).toBeUndefined()


            done() 
            /* Una vez que nuestra callback termine de ejecurse correctamente
            nuestro test indicara si se ejecuto o no correctamente
            */
        })

        /* Tambien podemos hacer una prueba lanzando una excepcion, si lo colocamos fuera de nuestro callback
        este se mostrar en consola y tendremos nuestro test fallido
        
        Si lo colocamos dentro de nuestro callback, el test saltara por completamente el error, y no indicare que 
        se ha ejeutado correctamente*/
        //throw new Error("El usuario no ha sido encontrado")


    })

    // REVISION DE CASO DE EXITO
    test('getUserById - El usuario ha sido encontrado - Caso de exito', (done) => {

        const id = 2
        getUserById(id, (error, user) => {

            expect(error).toBeUndefined
            expect(user).toEqual({ id: 2, nombre: "Keila Elizabeth", apellidos: "Villanueva Perez" })

            done()
        })
    })

})
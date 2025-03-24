

import { pokeongetById } from "../../src/01-Fundations/06-Promesas";

describe('Promesas', () => {

    test("pokemon por id - Caso de exito", async() => {

        const pokemonId = 1
        const pokemonName = await pokeongetById(pokemonId)

        expect(pokemonName).toBe("bulbasaur")

    })


    test("pokemon por id - Caso de error", async() => {

        const pokemonId = 100000000000000000000
        try {
            await pokeongetById(pokemonId)
            expect(true).toBeFalsy() /* Se ejecuta si no se lanza un error, lo que en este caso seria incorrecto

            Aunque la solicitud no falla, este se esfuerza en hacer que falle, ya que no existe el registro con ese ID
            

            Si colocamos un id que si exista, el test fallara, ya que el esta esperando que no exista el registro

            */
        } catch (error) {
            expect(error).toBe("Ocurrio un problema en el proceso de la solicitud")
        }

    })

})
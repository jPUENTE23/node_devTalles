
import { nombres } from "../../src/01-Fundations/02-Desestructuring";


describe('desestructuracion de datos', () => {

    test("El arreglo debe contener Lauren y Keila", () => {

        expect(nombres).toContain('Lauren')
        expect(nombres).toContain('Keila')
    })

})


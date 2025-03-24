
// Describe: Es una forma de indicarle el nombre o describir todo los que estamos realizando dentrdeo de nuestra prueba
// A cada archivo .test.ts o .js se le conoce como test suite, cada unos de estos puede contener uno o mas test

describe("app", ()=> {
    test("Calculo con suma", ()=> {

        /* Dentrod de nuesto cada test es donde aplicaremos los terminos de AAA */

        // 1. Arrange
        const num1 = 20
        const num2 = 20

        // 2. Act

        const suma = num1 + num2 +1

        // 3. Assert

        // toBe: Indica que el valor que esperamos sea igual al valor que estamos obteniendo
        // toEqual: Indica que el valor que esperamos sea igual al valor que estamos obteniendo
        expect(suma).toBe(41)

    })
})

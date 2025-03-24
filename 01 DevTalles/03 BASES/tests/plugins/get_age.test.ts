import { getAge } from '../../src/plugins/get_Age';


describe('getAge', () => {

    test('getAge - Calcular la edad de una persona', () => {

        const nacimiento = '2002-04-02'
        const edad = getAge(nacimiento)

        expect(edad).toBe(23)

    })

    test('getAge - Calcular la edad actual de una persona', () => {
    
        const nacimiento = '2002-04-02'
        const edad = getAge(nacimiento)
    
        const edadActual = new Date().getFullYear() - new Date(nacimiento).getFullYear()
        expect(edad).toBe(edadActual)

    
    })
})
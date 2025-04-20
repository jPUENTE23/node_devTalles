

import { httpRequest } from "../../src/plugins/http_client";


describe('httpRequest - Objeto literal para realizar peticiones http', () => {


    test("peticion http get", async () => {

        const resposne = await httpRequest.get("https://jsonplaceholder.typicode.com/todos/1")

        // Veririficamos que el obteto obtenido mediante la api, cuente con las propiedades que esperamos
        expect(resposne).toEqual({

            // Para cada valor de una propiedad tambiien podemos indicar el tipo dato que queremos esperar
            userId: expect.any(Number),
            id: 1,
            title: expect.any(String),
            completed: expect.any(Boolean)

        })
    })

    test("Verificando los demas metodos http", async()=> {

        const {post, put, del } = httpRequest
        console.log(post)

        expect( typeof post).toBe(typeof Function) // or 'function'
        expect( typeof put).toBe(typeof Function) // or 'function'
        expect( typeof del).toBe(typeof del) // or 'function'
        // expect(typeof put ).toBe(Function)
        // expect(typeof del).toBe(Function)

    })


})
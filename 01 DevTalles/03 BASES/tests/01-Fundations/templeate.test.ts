import { text } from "stream/consumers"
import { emailTemplate } from "../../src/01-Fundations/template"


describe("01-Fundations/template", ()=> {

    test("emailTemplate debe contener los corchetes con la palabra nombre", ()=> {

        // toContain: Veirifica que contenga el valor indicado
        expect(emailTemplate).toContain("{{nombre}}") 

    })

    test("emailTemplate debe contener la palabra registrarse", ()=> {

        expect(emailTemplate).toContain("registratre")
    })
})
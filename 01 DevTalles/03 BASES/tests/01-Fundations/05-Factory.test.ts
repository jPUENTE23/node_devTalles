
import { MakeBuildPerson } from "../../src/01-Fundations/05-Factury";
import { getAge } from "../../src/plugins/get_Age";
// import { getUuid } from "../../src/plugins/get_uuid";


describe('Factory Functions', () => {

    // const getAge = ()=>"20"
    const getUuid = ()=>"1234"

    test('MakeBuildPerson - Crear una persona', () => {

        const makePeron = MakeBuildPerson({getAge, getUuid})
        const person = makePeron({nombre: "Keila Elizabeth", nacimiento: '2002-04-02'})

        console.log(person)
        expect(person).toEqual({id: "1234", nombre: "Keila Elizabeth", nacimiento: '2002-04-02', edad: 23})


    })

})
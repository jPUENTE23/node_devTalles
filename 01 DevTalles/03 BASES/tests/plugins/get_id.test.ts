import { getUuid } from "../../src/plugins/get_uuid";

describe('valor devuelto de getUuid', () => {

    test("generar un uuid", () => {

        const uuid: string = getUuid()

        // Veirifcmos que el uuid devuleto se de tipo string
        expect( typeof uuid).toBe("string")

        // Veirificamos que el uuid devuelto tenga 36 cacarcteres
        expect(uuid.length).toBe(36)
    })

})
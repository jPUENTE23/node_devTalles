
import { CreateTable } from "../domain/uses-cases/create-table-use-case"
import { SaveFile } from "../domain/uses-cases/save-file-case-use"

/* CAPA DE PRESENTACION: La capa de presnetacion en una arquitectura limpia, se econtrara todo los que otros usuario o clientes
van a poder consumir de nuestra aplicacion*/


// Definicion de intefaz que recibita los argumetos delcarados en los parametros de del metodo run()
interface RunOptions {

    base: number,
    limite: number,
    showTable: boolean,
    nombre?: string,
    destino?: string
}


export class ServerApp {

    static run(opciones: RunOptions) {

        console.log("Servidor ejecutandose")

        // Mostramos en consola los argumentos recibidos de los parametros recibos en el metodo
        console.log(opciones)

        const { base, limite, showTable, nombre, destino} = opciones

        /* -------------------------------------------------------------------------------------------------------------- */
        /* ------------------------------ IMPLEMENTACION DE LOS ACSOS DE USO -------------------------------------------- */

        // CASO DE USO: CreateTable
        const table = new CreateTable().execute({ base, limite, showTable })
                // // Si el usuario manda el argumento -s, se mostrara la tabla en la consola
        // if(showTable) console.log(table)

        // -----------------------------------------------------------------------------------------------------------------
        // CASO DE USO: SaveFile
        const file = new SaveFile().execute(
            {
                fileContent: table, // Pasamos el contenido generado del metodo CreateTable

                
                fileDest: `${destino}`, /* Indicamos el destino en donde se almacenara
                nuestro archivo con la tabla generada, NOTA: La propiedad del objeto es opcional  */


                fileName: `${nombre}` /* Indicamos el nomrbe que se le asignara a nuestro archivo a crear
                NOTA: La propiedad del objeto es opcional 
                */
            }
        )




    }

}
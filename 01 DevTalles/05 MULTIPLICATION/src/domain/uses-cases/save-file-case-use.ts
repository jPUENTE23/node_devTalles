
import fs from "node:fs"

export interface SaveFileUseCase {

    execute: ({fileContent, fileDest, fileName}: SaveFileOptions)  => boolean
}

export interface SaveFileOptions {

    fileContent: string,
    fileDest?: string,
    fileName?: string
}


// Caso de uso para la creacion de archivo en el directorio
export class SaveFile implements SaveFileUseCase {

    constructor(){

        // DI: Denpendency Injection
        // Repositpio para al almacenamiento de la iformacion en file system
    }

    execute ({ fileContent, fileDest = "outputs", fileName = "Table" }: SaveFileOptions) : boolean {

        try {

            // Creamos el directorio en caso de que no exista
            fs.mkdirSync(fileDest, {recursive: true})

            // Creamos el archvo con el contenido recibido
            fs.writeFileSync(`/${fileDest}/${fileName}.txt`, fileContent )
            console.log("El archivo se ha creado correctamete")
            return true
        }
        catch(error){
            console.log(error)
            return false
        }

    }
}

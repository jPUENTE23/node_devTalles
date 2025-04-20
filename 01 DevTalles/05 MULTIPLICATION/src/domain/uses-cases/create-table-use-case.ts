export interface ICreateTableUseCase {

    execute: ({base, limite, showTable}: ExecuteOptions)=> string
}

export interface ExecuteOptions {
    base: number,
    limite?: number,
    showTable?: boolean
}



// Caseo de uso solo para crear la tabla medienate la base que el usuario quiere que se calcule
export class CreateTable implements ICreateTableUseCase {


    constructor(){
        // DI - Dependecy Injection
        // Respositories, Metodos, etc...
    }

    execute({base, limite = 10, showTable = false} : ExecuteOptions) {

        let outPutMessage = ''
        for(let num = 1; num<=limite; num++){

            outPutMessage += `${base} * ${num} = ${base * num} \n`
        }

        // Si showTable contiene true, mostramos la tabla en consola
        showTable ? console.log(outPutMessage) : ''

        return outPutMessage;
    }

}
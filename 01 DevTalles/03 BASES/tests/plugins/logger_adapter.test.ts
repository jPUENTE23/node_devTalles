import { buildLogger, logger as winstonLogger } from "../../src/plugins/logger_adapter";



describe("adapater/Logger", ()=> {

    test("Verificando nuestros logger sean de tipo funcion", () => {


        const logger = buildLogger('test')

        // Verificamos que os meotodos de nuestro loger sean de tipo function
        expect( typeof logger.log).toBe('function')
        expect( typeof logger.error).toBe('function')

    })

    test("El logger deberia mandar un mensaje", ()=>{

        const winstonLoggerMock = jest.spyOn(winstonLogger,'log')

        // Creamos un mensaje para registrar en el lo
        const message = "test message"

        // Indicamos el servicio con el cual se creara nuestro logger
        const service = "test service"

        const logger = buildLogger(service)

        logger.log(message)

        // Veirica que nuestro logger haya sido llamado al menos una vez
        // expect( winstonLoggerMock).toHaveBeenCalled();

        /*  toHaveBeenCalledWith: Nos ayuda ha identificar con que argumentos debe ser llamado nuestro logger
            Al usar esto esto, la prueba pasa, pero nos obliga a que psemos todos los argumentos por los cuales
            nuestro logger se conforma */
        // expect(winstonLoggerMock).toHaveBeenCalledWith(
        //     'info',
        //     {   level: 'info',
        //         message,
        //         service
        //     }
        // )

        /* Si queremos ididcar solo los argumentos necesarios con los que se conforma nuestro logger
        podemos utilizar expect.objectContaining() */

        expect(winstonLoggerMock).toHaveBeenCalledWith(
            'info',
            expect.objectContaining({   
                level: 'info',
                message,
                service
            })
        )

    })

})
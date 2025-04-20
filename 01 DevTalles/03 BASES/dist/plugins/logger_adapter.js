"use strict";
// WINSTON : Libreria para loggin
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildLogger = exports.logger = void 0;
//const winston = require('winston')
const winston_1 = __importDefault(require("winston"));
// Biblioteca para configuracion de zona horaria
const moment = require('moment-timezone');
const { combine, json, timestamp } = winston_1.default.format;
exports.logger = winston_1.default.createLogger({
    level: 'info',
    format: combine(timestamp({
        // Indicamos que formee la hora de acuerdo a la zona horaria de mexico
        format: () => moment().tz('America/Mexico_City').format('YYYY-MM-DD HH:mm:ss')
    }), json()),
    // format: winston.format.json(),
    // defaultMeta: { service: 'user-service' },
    transports: [
        //
        // - Write all logs with importance level of `error` or higher to `error.log`
        //   (i.e., error, fatal, but not other levels)
        //
        // Crear un un archvivo dentro de nuestro poryecto con el el nombre de error.log y nivel error
        // Es decir, solo se guardaran los logs que hayan sido generado un error
        new winston_1.default.transports.File({ filename: 'error.log', level: 'error' }),
        //
        // - Write all logs with importance level of `info` or higher to `combined.log`
        //   (i.e., fatal, error, warn, and info, but not trace)
        //
        // Crea un archvo dentro de nuestro proyecto con el nombre de combined.log
        // Almacena cualquier tipo de log generado, ya sea un mensaje o un error lanzado
        new winston_1.default.transports.File({ filename: 'combined.log' }),
    ],
});
//La siguiente configuracion te puestra el log generado dentro de la consola de desarrollo
exports.logger.add(new winston_1.default.transports.Console({
    format: winston_1.default.format.simple(),
}));
const buildLogger = (service) => {
    return {
        log: (message) => {
            // message: Es el mensaje generado por el error
            // service: Inica el archivo en el que esta sucediendo el problema
            exports.logger.log('info', { message, service });
        },
        // Log para errores generados
        error: (message) => {
            // Dentro de nuestro log, tambien podemos agregar una propied que incluya la fecha y hora en el que se registro el  error
            // Winston tambien inclute una forma por defecto de registrar la hora en el log
            // logger.error('error', {message, service, Fecha: new Date().toISOString()})
            exports.logger.error('error', { message, service });
        }
    };
};
exports.buildLogger = buildLogger;


//const axios = require('axios')
import axios from "axios"
import { error } from "console";


export const httpRequest = {

    // FETCH
    // get: async(url) => {
    //     const data = await fetch(url)
    //     return await data.json()
    // }

    //AXIOS

    get: async(url: string) => {

        const {data } = await axios.get(url)
        
        console.log("Petiion desde axios")

        return await data;
    },
    post: async(url: string) => {
        throw new Error("Funcion no implementada")
    },
    put: async(url: string, id: number) =>{
        throw new Error("Funcion no implementada")
    },
    del: async(url:string, id: number)=> {
        throw new Error("Funcion no implementada")
    }
}




//const axios = require('axios')
import axios from "axios"


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
    }
}



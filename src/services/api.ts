import axios from 'axios'

export const api = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: '1e501bc5b5bb01c3cf51b4be49054bb9',
        include_adult: false
        //language: 'pt-BR'
    }
})
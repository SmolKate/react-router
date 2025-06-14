import axios from 'axios'

const baseApi = axios.create({ baseURL: 'https://rickandmortyapi.com/api/' })

export {
    baseApi
}
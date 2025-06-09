import baseApi from '../baseApi'

export type Character = {
    id: number
    name: string
    status: string
    species: string
    type: string
    gender: string
    image: string
    created: string
}

export const getCharacter = (id: string) => baseApi.get<Character>(`character/${id}`)
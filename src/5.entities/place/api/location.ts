import { baseApi } from '../../../6.shared/api'

export type Place = {
    id: number
    name: string
    type: string
    dimension: string
    created: string
}

export const getPlace = (id: string) => baseApi.get<Place>(`location/${id}`)
import { baseApi } from '../../../6.shared/api'

export type Episode = {
    id: number
    name: string
    air_date: string
    episode: string
    created: string
}

export const getEpisode = (id: string) => baseApi.get<Episode>(`episode/${id}`)
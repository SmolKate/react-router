import { useParams } from 'react-router-dom'
import type { Episode } from '../types'
import baseApi from '../utils/baseApi'
import NotFound from './NotFound'
import { useEffect, useState } from 'react'

const EpisodeView = () => {
    const { id } = useParams()
    const [data, setData] = useState<Episode | null>(null)

    useEffect(() => {
        if (id) {
            baseApi.get<Episode>(`episode/${id}`).then((res) => setData(res.data))
        }
    }, [id])

    if (!data) return <NotFound />
    const { name, air_date, episode } = data
    
    return (
        <div>
            <h3>{name}</h3>
            <p>Дата выхода на экран: {air_date}</p>
            <p>Серия: {episode}</p>
        </div>
    )
}

export default EpisodeView
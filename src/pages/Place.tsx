import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import baseApi from '../utils/baseApi'
import type { Place } from '../types'
import NotFound from './NotFound'

const PlaceView = () => {
    const { id } = useParams()
    const [data, setData] = useState<Place | null>(null)

    useEffect(() => {
        if (id) {
            baseApi.get<Place>(`location/${id}`).then((res) => setData(res.data))
        }
    }, [id])

    if (!data) return <NotFound />
    const { name, type, dimension } = data

    return (
        <div>
            <h3>{name}</h3>
            <p>Тип: {type}</p>
            <p>Измерение: {dimension}</p>
        </div>
    )
}

export default PlaceView
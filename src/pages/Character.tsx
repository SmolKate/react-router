import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import baseApi from '../utils/baseApi'
import type { Character } from '../types'
import NotFound from './NotFound'

const CharacterView = () => {
    const { id } = useParams()
    const [data, setData] = useState<Character | null>(null)

    useEffect(() => {
        if (id) {
            baseApi.get<Character>(`character/${id}`).then((res) => setData(res.data))
        }
    }, [id])

    if (!data) return <NotFound />
    const { name, status, gender, type, image } = data

    return (
        <div>
            <h3>{name}</h3>
            <img src={image} />
            <p>Статус: {status}</p>
            {type && <p>Тип: {type}</p>}
            <p>Пол: {gender}</p>
        </div>
    )
}

export default CharacterView
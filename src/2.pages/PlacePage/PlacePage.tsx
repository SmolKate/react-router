import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { NotFound } from '../../6.shared/ui'
import { PlaceView } from '../../5.entities/place/ui'
import { getPlace, type Place } from '../../5.entities/place/api'

const PlacePage = () => {
    const { id } = useParams()
    const [data, setData] = useState<Place | null>(null)

    useEffect(() => {
        if (id) {
            getPlace(id).then((res) => setData(res.data))
        }
    }, [id])

    if (!data) return <NotFound />
    const { name, type, dimension } = data

    return <PlaceView name={name} type={type} dimension={dimension} />
}

export {
    PlacePage
}
import { useParams } from 'react-router-dom'
import { getPlace } from '../utils/helpers'
import NotFound from './NotFound'

const PlaceView = () => {
    const { id } = useParams()
    const data = getPlace(Number(id))

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
import { useParams } from 'react-router-dom'
import { getCharacter } from '../utils/helpers'
import NotFound from './NotFound'

const CharacterView = () => {
    const { id } = useParams()
    const data = getCharacter(Number(id))

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
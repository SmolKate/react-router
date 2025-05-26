import { useLocation } from "react-router-dom"
import type { Character } from "../types"

const CharacterView = () => {
    const location = useLocation()
    const data = location.state as Character
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
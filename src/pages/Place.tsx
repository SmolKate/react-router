import { useLocation } from "react-router-dom"
import type { Place } from "../types"

const PlaceView = () => {
    const location = useLocation()
    const data = location.state as Place
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
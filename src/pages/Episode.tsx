import { useLocation } from "react-router-dom"
import type { Episode } from "../types"

const EpisodeView = () => {
    const location = useLocation()
    const data = location.state as Episode
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
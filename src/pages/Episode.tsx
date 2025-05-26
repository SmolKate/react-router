import { useParams } from "react-router-dom"
import NotFound from "./NotFound"
import { getEpisode } from "../utils/helpers"

const EpisodeView = () => {
    const { id } = useParams()
    const data = getEpisode(Number(id))
    
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
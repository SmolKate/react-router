import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { NotFound } from '../../6.shared/ui'
import { EpisodeView } from '../../5.entities/episode/ui'
import { getEpisode, type Episode } from '../../5.entities/episode/api'

const EpisodePage = () => {
    const { id } = useParams()
    const [data, setData] = useState<Episode | null>(null)

    useEffect(() => {
        if (id) {
            getEpisode(id).then((res) => setData(res.data))
        }
    }, [id])

    if (!data) return <NotFound />
    const { name, air_date, episode } = data
    
    return <EpisodeView name={name} air_date={air_date} episode={episode} />
}

export {
    EpisodePage
}
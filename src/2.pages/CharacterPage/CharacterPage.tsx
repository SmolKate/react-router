import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { NotFound } from '../../6.shared/ui'
import { CharacterView } from '../../5.entities/character/ui'
import { getCharacter, type Character } from '../../5.entities/character/api'

const CharacterPage = () => {
    const { id } = useParams()
    const [data, setData] = useState<Character | null>(null)

    useEffect(() => {
        if (id) {
            getCharacter(id).then((res) => setData(res.data))
        }
    }, [id])

    if (!data) return <NotFound />
    const { name, status, gender, type, image } = data

    return <CharacterView name={name} status={status} gender={gender} type={type} image={image} />
}

export {
    CharacterPage
}
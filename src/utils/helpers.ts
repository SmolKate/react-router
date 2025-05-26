import charactersJson from "../mocks/characters.json"
import episodesJson from "../mocks/episodes.json"
import locationsJson from "../mocks/locations.json"
import type { Category, Character, Episode, Place } from "../types"

const categories = {
    characters: charactersJson,
    episodes: episodesJson,
    locations: locationsJson,
}

const getCategoryData = (categoryName: Category) => {
    const data = categories[categoryName]
    return data
}

const getData = (category: Category, id?: number) => categories[category].find(item => item.id === id)

const getCharacter = (id?: number) => getData('characters', id) as Character | undefined
const getEpisode= (id?: number) => getData('episodes', id) as Episode | undefined
const getPlace= (id?: number) => getData('locations', id) as Place | undefined

export {
    getCategoryData,
    getCharacter,
    getEpisode,
    getPlace,
}
import charactersJson from "../mocks/characters.json"
import episodesJson from "../mocks/episodes.json"
import locationsJson from "../mocks/locations.json"
import type { Category } from "../types"

const categories = {
    characters: charactersJson,
    episodes: episodesJson,
    locations: locationsJson,
}

const getCategoryData = (categoryName: Category) => {
    const data = categories[categoryName]
    return data
}

export {
    getCategoryData,
}
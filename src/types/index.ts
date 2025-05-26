const CATEGORIES = ['characters', 'episodes', 'locations'] as const
type Category = typeof CATEGORIES[number]

type Character = {
    id: number
    name: string
    status: string
    species: string
    type: string
    gender: string
    image: string
    created: string
}

type Episode = {
    id: number
    name: string
    air_date: string
    episode: string
    created: string
}

type Place = {
    id: number
    name: string
    type: string
    dimension: string
    created: string
}

const isCategory = (value: string): value is Category => {
    return CATEGORIES.includes(value as Category)
}

export {
    type Category,
    type Character,
    type Episode,
    type Place,
    isCategory,
}
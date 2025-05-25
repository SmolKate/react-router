const CATEGORIES = ['characters', 'episodes', 'locations'] as const
type Category = typeof CATEGORIES[number]

const isCategory = (value: string): value is Category => {
    return CATEGORIES.includes(value as Category)
}

export {
    type Category,
    isCategory,
}
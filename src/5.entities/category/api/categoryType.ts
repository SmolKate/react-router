import { baseApi } from '../../../6.shared/api'
import type { Character } from '../../character/api'
import type { Episode } from '../../episode/api'
import type { Place } from '../../place/api'

export type Data = (Character | Episode | Place)[]

interface CategoryResponse {
    results: Data,
    info: {
        pages: number,
    },
}

const CATEGORIES = ['characters', 'episodes', 'locations'] as const
export type Category = typeof CATEGORIES[number]

export const isCategory = (value: string): value is Category => {
    return CATEGORIES.includes(value as Category)
}

export const getCategory = (categoryName: Category, pageNamber: number) => baseApi.get<CategoryResponse>(categoryName, { params: { page: pageNamber } })
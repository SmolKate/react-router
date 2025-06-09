import baseApi from '../baseApi'
import type { Character } from './character'
import type { Episode } from './episode'
import type { Place } from './location'

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
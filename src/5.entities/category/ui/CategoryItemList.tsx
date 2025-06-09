import { useCallback, useRef } from 'react'
import { Link } from 'react-router-dom'
import type { Data } from '../../../6.shared/api'

interface ICategoryItemListProps {
    data: Data
    catergoryLink: string
    loading: boolean
    hasMore: boolean
    callback: () => void
}

const CategoryItemList = ({ data, catergoryLink, loading, hasMore, callback }: ICategoryItemListProps) => {
    const observer = useRef<IntersectionObserver | null>(null)

    const lastNodeRef = useCallback((node: Element | null) => {
        if (loading) return
        if (observer.current) {
            observer.current.disconnect()
        }
        observer.current = new IntersectionObserver((entries)=> {
            if (entries[0].isIntersecting && hasMore) {
                callback()
            }
        })
        if (node) {
            observer.current.observe(node)
        }
    }, [loading, hasMore])

    return data.map((item, index) => (
        <li key={item.id}>
            {index === data.length - 1 ? <div ref={lastNodeRef}>{item.name}</div> : <div>{item.name}</div>}
            <Link to={`/${catergoryLink}/${item.id}`} state={item}>{'  подробнее'}</Link>
        </li>
    ))
}

export {
    CategoryItemList
}
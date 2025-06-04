import { Link, useParams } from 'react-router-dom'
import { useEffect, useState, useRef, useCallback } from 'react'
import { isCategory, type CategoryResponse, type Data } from '../types'
import baseApi from '../utils/baseApi'
import '../styles/category-styles.css'

const categoryLinks = {
    characters: 'character',
    episodes: 'episode',
    locations: 'location',
}

const Category = () => {
    const { name: categoryName } = useParams()
    const [data, setData] = useState<Data>([])
    const [pageNamber, setPageNumber] = useState(1)
    const [hasMore, setHasMore] = useState(true)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        setData([])
    }, [categoryName])

    useEffect(() => {
        if (categoryName && isCategory(categoryName) && hasMore) {
            setLoading(true)
            setError(false)
            baseApi.get<CategoryResponse>(categoryLinks[categoryName], { params: { page: pageNamber } })
                .then((res) => {
                    const results = res.data.results

                    setData(prevState => {
                        const commonData = [...prevState]
                        results.forEach((result) => {
                            const hasResult = prevState.find(elem => elem.id === result.id)
                            if (!hasResult) commonData.push(result)
                        })
                       return commonData 
                    })
                    setHasMore(res.data.info.pages > pageNamber)
                })
                .catch(() => setError(true))
                .finally(() => setLoading(false))
        }
    }, [categoryName, pageNamber, hasMore])

    let catergoryLink = ''
    if (categoryName && isCategory(categoryName)) {
        catergoryLink = categoryLinks[categoryName]
    }

    const observer = useRef<IntersectionObserver | null>(null)

    const lastNodeRef = useCallback((node: Element | null) => {
        if (loading) return
        if (observer.current) {
            observer.current.disconnect()
        }
        observer.current = new IntersectionObserver((entries)=> {
            if (entries[0].isIntersecting && hasMore) {
                setPageNumber(prevState => prevState + 1)            }
        })
        if (node) {
            observer.current.observe(node)
        }
    }, [loading, hasMore])


    return (
        <div className="category">
            <ol>
                {data.map((item, index) => (
                    <li key={item.id}>
                        {index === data.length - 1 ? <div ref={lastNodeRef}>{item.name}</div> : <div>{item.name}</div>}
                        <Link to={`/${catergoryLink}/${item.id}`} state={item}>{'  подробнее'}</Link>
                    </li>
                ))}
            </ol>
            {loading && <h2>Загрузка ...</h2>}
            {error && <div>Произошла ошибка</div>}
        </div>
        
    )
}

export default Category
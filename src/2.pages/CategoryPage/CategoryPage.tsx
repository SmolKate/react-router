import { useParams } from 'react-router-dom'
import { useEffect, useState} from 'react'
import { isCategory, type Data, getCategory, type Category } from '../../6.shared/api'
import { CategoryItemList } from '../../5.entities/category/ui'
import './styles.css'

const categoryLinks = {
    characters: 'character',
    episodes: 'episode',
    locations: 'location',
}

const CategoryPage = () => {
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
            const endpoint = categoryLinks[categoryName] as Category
            getCategory(endpoint, pageNamber)
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

    return (
        <div className="category">
            <ol>
                <CategoryItemList
                    data={data} 
                    catergoryLink={catergoryLink}
                    loading={loading}
                    hasMore={hasMore}
                    callback={() => setPageNumber(prevState => prevState + 1)}
                />
            </ol>
            {loading && <h2>Загрузка ...</h2>}
            {error && <div>Произошла ошибка</div>}
        </div>
        
    )
}

export {
    CategoryPage
}
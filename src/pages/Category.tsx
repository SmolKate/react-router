import { Link, useParams } from "react-router-dom"
import { getCategoryData } from "../utils/helpers"
import { isCategory } from "../types"

const categoryLinks = {
    characters: 'character',
    episodes: 'episode',
    locations: 'location',
}

const Category = () => {
    const { name: categoryName } = useParams()

    let data
    let catergoryLink = ''
    // почему возвращаемый тип функции getCategoryData не присваивается автоматически для data? без использования as тип будет data: any
    if (categoryName && isCategory(categoryName)) {
        data = getCategoryData(categoryName) as ReturnType<typeof getCategoryData>
        catergoryLink = categoryLinks[categoryName]
    }

    return (
        <ol>
            {data?.map((item) => (
                <li key={item.id}>
                    {item.name}
                    <Link to={`/${catergoryLink}/${item.id}`} state={item}>{'  подробнее'}</Link>
                </li>
            ))}
        </ol>
    )
}

export default Category
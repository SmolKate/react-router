import { useParams } from "react-router-dom"
import { getCategoryData } from "../utils/helpers"
import { isCategory } from "../types"

const Category = () => {
    const { name: categoryName } = useParams()
    let data
    // почему возвращаемый тип функции getCategoryData не присваивается автоматически для data? без использования as тип будет data: any
    if (categoryName && isCategory(categoryName)) data = getCategoryData(categoryName) as ReturnType<typeof getCategoryData> 

    return (
        <ol>{data?.map(({id, name}) => <li key={id}>{name}</li>)}</ol>
    )
}

export default Category
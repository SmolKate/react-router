import { NavLink } from 'react-router-dom'
import { appPaths } from '../../../6.shared/config'

const CategoryList = () => (
    <ul>
        <li><NavLink to={appPaths.home}>Главная</NavLink></li>
        <li><NavLink to={appPaths.category('characters')}>Персонажи</NavLink></li>
        <li><NavLink to={appPaths.category('locations')}>Локации</NavLink></li>
        <li><NavLink to={appPaths.category('episodes')}>Эпизоды</NavLink></li>
    </ul>
)

export {
    CategoryList
}
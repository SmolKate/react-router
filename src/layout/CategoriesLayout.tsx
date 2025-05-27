import { NavLink, Outlet } from 'react-router-dom'
import { appPaths } from '../utils/appPaths'

const CategoriesLayout = () => {
    return (
        <>
            <ul>
                <li><NavLink to={appPaths.home}>Главная</NavLink></li>
                <li><NavLink to={appPaths.category('characters')}>Персонажи</NavLink></li>
                <li><NavLink to={appPaths.category('locations')}>Локации</NavLink></li>
                <li><NavLink to={appPaths.category('episodes')}>Эпизоды</NavLink></li>
            </ul>
            <Outlet />
        </>
    )
}

export default CategoriesLayout
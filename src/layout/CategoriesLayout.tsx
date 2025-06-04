import { NavLink, Outlet } from 'react-router-dom'
import { appPaths } from '../utils/appPaths'
import { Suspense } from 'react'
import ErrorBoundary from '../components/ErrorBoundary'

const CategoriesLayout = () => {
    return (
        <>
            <ul>
                <li><NavLink to={appPaths.home}>Главная</NavLink></li>
                <li><NavLink to={appPaths.category('characters')}>Персонажи</NavLink></li>
                <li><NavLink to={appPaths.category('locations')}>Локации</NavLink></li>
                <li><NavLink to={appPaths.category('episodes')}>Эпизоды</NavLink></li>
            </ul>
            <ErrorBoundary>
                 <Suspense fallback={<h3>загрузка ...</h3>}>
                    <Outlet />
                </Suspense>
            </ErrorBoundary>
        </>
    )
}

export default CategoriesLayout
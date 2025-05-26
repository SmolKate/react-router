import { NavLink, Outlet } from "react-router-dom"

const CategoriesLayout = () => {
    return (
        <>
            <ul>
                <li><NavLink to="/">Главная</NavLink></li>
                <li><NavLink to="/category/characters">Персонажи</NavLink></li>
                <li><NavLink to="/category/locations">Локации</NavLink></li>
                <li><NavLink to="/category/episodes">Эпизоды</NavLink></li>
            </ul>
            <Outlet />
        </>
    )
}

export default CategoriesLayout
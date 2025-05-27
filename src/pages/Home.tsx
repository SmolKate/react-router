import { Link } from 'react-router-dom'
import { appPaths } from '../utils/appPaths'

const Home = () => {
    return (
        <>
            <h1>Категории</h1>
            <Link to={appPaths.category('characters')}><h2>Персонажи</h2></Link>
            <Link to={appPaths.category('episodes')}><h2>Эпизоды</h2></Link>
            <Link to={appPaths.category('locations')}><h2>Локации</h2></Link>
        </>
        
    )
}

export default Home
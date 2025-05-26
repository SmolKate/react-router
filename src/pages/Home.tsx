import { Link } from "react-router-dom"

const Home = () => {
    return (
        <>
            <h1>Категории</h1>
            <Link to="/category/characters"><h2>Персонажи</h2></Link>
            <Link to="/category/locations"><h2>Эпизоды</h2></Link>
            <Link to="/category/episodes"><h2>Локации</h2></Link>
        </>
        
    )
}

export default Home
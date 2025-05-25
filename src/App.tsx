import './App.css'
import { NavLink, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Category from './pages/Category'
import Character from './pages/Character'
import Episode from './pages/Episode'
import Place from './pages/Place'

function App() {

  return (
    <>
      <ul>
        <li><NavLink to="/">Главная</NavLink></li>
        <li><NavLink to="/category/characters">Герои</NavLink></li>
        <li><NavLink to="/category/locations">Локации</NavLink></li>
        <li><NavLink to="/category/episodes">Эпизоды</NavLink></li>

      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:name" element={<Category />} />
        <Route path="/character/:id" element={<Character />} />
        <Route path="/location/:id" element={<Place />} />
        <Route path="/episode/:id" element={<Episode />} />
      </Routes>
    </>
  )
}

export default App

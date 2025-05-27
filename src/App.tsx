import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Category from './pages/Category'
import Character from './pages/Character'
import Episode from './pages/Episode'
import Place from './pages/Place'
import CategoriesLayout from './layout/CategoriesLayout'
import NotFound from './pages/NotFound'
import { appPaths } from './utils/appPaths'

function App() {

  return (
    <>
      <Routes>
        <Route path={appPaths.home}element={<Home />} />
        <Route path={appPaths.contentRoot} element={<CategoriesLayout />}>
          <Route path={appPaths.category(':name')} element={<Category />} />
          <Route path={appPaths.character} element={<Character />} />
          <Route path={appPaths.location} element={<Place />} />
          <Route path={appPaths.episode} element={<Episode />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App

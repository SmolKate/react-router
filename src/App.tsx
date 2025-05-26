import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Category from './pages/Category'
import Character from './pages/Character'
import Episode from './pages/Episode'
import Place from './pages/Place'
import CategoriesLayout from './layout/CategoriesLayout'
import NotFound from './pages/NotFound'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<CategoriesLayout />}>
          <Route path="/category/:name" element={<Category />} />
          <Route path="/character/:id" element={<Character />} />
          <Route path="/location/:id" element={<Place />} />
          <Route path="/episode/:id" element={<Episode />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App

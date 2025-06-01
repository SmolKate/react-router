import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Category from '../pages/Category'
import Character from '../pages/Character'
import Episode from '../pages/Episode'
import Place from '../pages/Place'
import CategoriesLayout from '../layout/CategoriesLayout'
import NotFound from '../pages/NotFound'
import { appPaths } from '../utils/appPaths'
import Login from '../pages/Login'
import PrivateRoute from './PrivateRoute'

const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path={appPaths.home}element={<Home />} />
                <Route path={appPaths.login}element={<Login />} />
                <Route path={appPaths.contentRoot} element={<CategoriesLayout />}>
                    <Route path={appPaths.category(':name')} element={<PrivateRoute><Category /></PrivateRoute>} />
                    <Route path={appPaths.character} element={<PrivateRoute><Character /></PrivateRoute>} />
                    <Route path={appPaths.location} element={<PrivateRoute><Place /></PrivateRoute>} />
                    <Route path={appPaths.episode} element={<PrivateRoute><Episode /></PrivateRoute>} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </>
    )
}

export default AppRoutes
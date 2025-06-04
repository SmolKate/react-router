import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import CategoriesLayout from '../layout/CategoriesLayout'
import NotFound from '../pages/NotFound'
import { appPaths } from '../utils/appPaths'
import Login from '../pages/Login'
import PrivateRoute from './PrivateRoute'
import { lazy } from 'react'

const Category = lazy(() => import('../pages/Category'))
const Character = lazy(() => import('../pages/Character'))
const Episode = lazy(() => import('../pages/Episode'))
const Place = lazy(() => import('../pages/Place'))

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
import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from '../../../2.pages/HomePage'
import { LoginPage } from '../../../2.pages/LoginPage'
import { NotFoundPage } from '../../../2.pages/NotFoundPage'
import { CategoriesLayout, PrivateRouteLayout } from '../../../3.widgets/layout'
import { appPaths } from '../../../6.shared/config'
import { BaseLayout } from '../../../3.widgets/layout/BaseLayout'

const CategoryPage = lazy(() => import('../../../2.pages/CategoryPage').then((module) => ({default: module.CategoryPage})))
const CharacterPage = lazy(() => import('../../../2.pages/CharacterPage').then((module) => ({default: module.CharacterPage})))
const EpisodePage = lazy(() => import('../../../2.pages/EpisodePage').then((module) => ({default: module.EpisodePage})))
const PlacePage = lazy(() => import('../../../2.pages/PlacePage').then((module) => ({default: module.PlacePage})))

const Routing = () => (
    <Routes>
        <Route path={appPaths.home} element={<BaseLayout />}>
            <Route path={appPaths.home} element={<HomePage />} />
            <Route path={appPaths.login} element={<LoginPage />} />
            <Route path={appPaths.contentRoot} element={<CategoriesLayout />}>
                <Route path={appPaths.category(':name')} element={<PrivateRouteLayout><CategoryPage /></PrivateRouteLayout>} />
                <Route path={appPaths.character} element={<PrivateRouteLayout><CharacterPage /></PrivateRouteLayout>} />
                <Route path={appPaths.location} element={<PrivateRouteLayout><PlacePage /></PrivateRouteLayout>} />
                <Route path={appPaths.episode} element={<PrivateRouteLayout><EpisodePage /></PrivateRouteLayout>} />
                <Route path="*" element={<NotFoundPage />} />
        </Route>
        </Route>
    </Routes>
)

export {
    Routing
}
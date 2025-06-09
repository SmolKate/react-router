import { Outlet } from 'react-router-dom'
import { Suspense } from 'react'
import { ErrorBoundary } from '../../4.features/error'
import { CategoryList } from '../../5.entities/category/ui'

const CategoriesLayout = () => {
    return (
        <>
            <CategoryList />
            <ErrorBoundary>
                 <Suspense fallback={<h3>загрузка ...</h3>}>
                    <Outlet />
                </Suspense>
            </ErrorBoundary>
        </>
    )
}

export {
    CategoriesLayout
}
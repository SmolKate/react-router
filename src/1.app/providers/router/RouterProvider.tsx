import { BrowserRouter } from 'react-router-dom'

const RouterProvider = ({ children }: {children: React.ReactNode}) => (
    <BrowserRouter>
        {children}
    </BrowserRouter>
)

export {
    RouterProvider
}
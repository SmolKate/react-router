import { Outlet } from 'react-router-dom'
import { AuthStatus } from '../../5.entities/auth/ui'

const BaseLayout = () => {
    return (
        <>
            <AuthStatus />
            <Outlet />
        </>
    )
}

export {
    BaseLayout
}
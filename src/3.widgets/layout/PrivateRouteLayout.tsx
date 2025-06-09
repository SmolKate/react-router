import { Navigate, useLocation } from 'react-router-dom'
import { appPaths } from '../../6.shared/config'
import { useAuth } from '../../5.entities/auth/model'

export interface PrivateRouteState {
    from: string
}

const PrivateRouteLayout = ({ children }: {children: React.ReactNode}) => {
    const auth = useAuth()
    const location = useLocation()

    if (!auth?.userId) return <Navigate to={appPaths.login} state={{ from: location.pathname }} replace/>
    return children
}

export {
    PrivateRouteLayout
}
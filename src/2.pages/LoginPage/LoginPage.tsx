import { useLocation } from 'react-router-dom'
import type { PrivateRouteState } from '../../3.widgets/layout'
import { LoginForm } from '../../5.entities/auth/ui'

const LoginPage = () => {
    const location = useLocation() 
    const state = location.state as PrivateRouteState

    return <LoginForm from={state?.from} />
}

export {
    LoginPage
}
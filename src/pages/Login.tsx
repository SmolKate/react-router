import type { FormEvent } from "react"
import { useAuth } from "../context/AuthProvider"
import { useLocation, useNavigate } from "react-router-dom"
import type { PrivateRouteState } from "../components/PrivateRoute"

const Login = () => {
    const auth = useAuth()
    const navigate = useNavigate()
    const location = useLocation() 
    const state = location.state as PrivateRouteState

    const handleSubmit = (event: FormEvent<HTMLFormElement | undefined>) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const userName = formData.get('username') as string
        auth?.signin(userName, () => {
            navigate(state?.from ?? '/')
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Имя пользователя: <input type="text" name="username" />
            </label>
            <button type="submit">Подтвердить</button>
        </form>
    )
}

export default Login
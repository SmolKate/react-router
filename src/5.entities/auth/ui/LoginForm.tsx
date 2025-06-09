import { useNavigate } from 'react-router-dom'
import type { FormEvent } from 'react'
import { useAuth } from '../model'

const LoginForm = ({from}: {from: string} ) => {
    const auth = useAuth()
    const navigate = useNavigate()

    const handleSubmit = (event: FormEvent<HTMLFormElement | undefined>) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const userName = formData.get('username') as string
        auth?.signin(userName, () => {
            navigate(from ?? '/')
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

export {
    LoginForm
}
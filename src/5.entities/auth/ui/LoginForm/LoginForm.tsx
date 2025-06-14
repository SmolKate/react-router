import { useNavigate } from 'react-router-dom'
import type { FormEvent } from 'react'
import { Button, TextField } from '../../../../6.shared/ui/kit'
import { useAuth } from '../../model'
import './styles.css'

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
            <TextField
                type="text"
                name="username"
                label="Имя пользователя"
                focused
                variant="standard"
                required
                color="success"
                className="login-form-input"
            />
            <Button variant="contained" color="success" type="submit">Подтвердить</Button>
        </form>
    )
}

export {
    LoginForm
}
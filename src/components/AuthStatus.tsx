import { useAuth } from "../context/AuthProvider"

const AuthStatus = () => {
    const auth = useAuth()
    const user = auth?.userId

    if (!user) return null

    return (
        <>
            <div>Пользователь: {user}</div>
            <button onClick={() => auth.signout()}>Выйти</button>
        </>
        
    )
}

export default AuthStatus
import {  useState } from 'react'
import { AuthContext } from '../../5.entities/auth/model'

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [userId, setUserId] = useState(localStorage.getItem('user'))

    const signin = (newUserId: string, callback?: VoidFunction) => {
        setUserId(newUserId)
        localStorage.setItem('user', newUserId)
        callback?.()
    }
    const signout = (callback?: VoidFunction) => {
        setUserId(null)
        localStorage.removeItem('user')
        callback?.()
    }
    const value = {
        userId,
        signin,
        signout,
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export {
    AuthProvider,
}
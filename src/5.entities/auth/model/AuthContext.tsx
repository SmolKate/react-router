import { createContext } from 'react'

interface AuthContextState {
    userId: string | null
    signin: (newUserId: string, callback?: VoidFunction) => void
    signout: (callback?: VoidFunction) => void
}
const AuthContext = createContext<AuthContextState | null>(null)

export {
    AuthContext
}
import './App.css'
import AppRoutes from './components/AppRoutes'
import AuthStatus from './components/AuthStatus'
import { AuthProvider } from './context/AuthProvider'

function App() {

  return (
    <AuthProvider>
      <AuthStatus />
      <AppRoutes />
    </AuthProvider>
  )
}

export default App

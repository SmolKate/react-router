import { RouterProvider, Routing, AuthProvider } from './providers'
import './styles/index.css'

function App() {

  return (
    <RouterProvider>
      <AuthProvider>
        <Routing />
      </AuthProvider>
    </RouterProvider>
  )
}

export {
  App
}

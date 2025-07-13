import './App.css'
import { AuthProvider } from './context/ThemeContext'
import { Perfil } from './Perfil'

function App() {


  return (
    <>
      <AuthProvider >
        <Perfil />
      </AuthProvider>
    </>
  )
}

export default App

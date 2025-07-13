
import { useAuth } from "../context/ThemeContext"

export function Perfil() {

    const { user, login, logOut } = useAuth()

    if (!user) {
        <button onClick={() => login({
            name: "Leirisson souza",
            email: "leirisson@exemplo.com"
        })}>
            Fazer login
        </button>
    }
    return (
        <>
            <div>
                <p>Bem-vindo, {user?.name}</p>
                <button onClick={() => logOut}>Sair</button>
            </div>
        </>
    )
}
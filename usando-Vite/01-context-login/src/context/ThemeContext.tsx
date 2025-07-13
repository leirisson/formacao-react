import React, { createContext, useContext, useState } from "react"


// criando o contexto
export const themeContext = createContext(null)

interface User {
    name: string;
    email: string;
}

interface AuthContextProps {
    user: User | null
    login: (user: User) => void
    logOut: () => void
}

const authContext = createContext<AuthContextProps | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null)

    function login(user: User) {
         setUser(user)
    }

    function logOut() {
         setUser(null)
    }

    return (
        <authContext.Provider value={{ user, login, logOut }}>
            {children}
        </authContext.Provider>
    )


}

//hook de contexto personalizado
export function useAuth() {
    const context = useContext(authContext)
     if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider")
    }

    return context
}


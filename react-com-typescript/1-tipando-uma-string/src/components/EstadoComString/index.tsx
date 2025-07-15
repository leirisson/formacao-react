import { useState } from "react"


export function EstadoComString() {
    const [nome, setNome] = useState<string>('')


    return (
        <>

            Nome: {nome}

            <input type="text"
                value={nome}
                onChange={e => setNome(e.target.value)}
                placeholder="Digite seu nome"
            />

        </>
    )
}
import { useState } from "react"





export function VisibilidadeTexto() {
    const [estaVisivel, setEstaVisivel] = useState<boolean>(true)
    return (
        <>

            {
                estaVisivel ? <p>texto em exibição</p> : <p>Texto oculto</p>
            }

            <button onClick={() => setEstaVisivel(false)}>Ocutar</button>
            <button onClick={() => setEstaVisivel(true)}>Exibir</button>

        </>
    )
}
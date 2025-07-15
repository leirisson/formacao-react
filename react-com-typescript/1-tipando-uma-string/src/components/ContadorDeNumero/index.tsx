import { useState } from "react"



export function ContadorDeNumero() {
    const [contador, setContador] = useState<number>(0)

    return (
        <>
            <div>
                <p>Contador: {contador} </p>
                <button onClick={() => setContador(prev => prev + 1)}>somar  + 1 </button>
                {
                    contador === 0 ? '' :
                    <button onClick={() => setContador(prev => prev - 1)}>Diminuir - 1</button>
                }

            </div>
        </>
    )
}


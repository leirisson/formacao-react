

interface BotaoProps {
    texto: string
}


export function BotaoComTextoDinamico({ texto }: BotaoProps) {
    return (
        <>

            <button type="button">
                {texto}
            </button>
        </>
    )
}

type Props = {
    nome: string
}

export function NomeComponent({ nome }: Props) {
    return (
        <>

        <h2>
            olá, {nome} !
        </h2>

        </>
    )
}
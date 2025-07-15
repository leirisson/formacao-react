

type Props = {
    idade: number,
    nome: string,
}

export function MostrarIdade({ nome, idade }: Props) {
    return (
        <>

            <h2>Olá, {nome}, sua idade é {idade}</h2>


        </>
    )
}
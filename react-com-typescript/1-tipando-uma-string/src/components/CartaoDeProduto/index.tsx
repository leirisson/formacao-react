

type ProdutoProps = {
    nome: string,
    preco: number
}


export function CartaoDeProduto({ nome, preco }: ProdutoProps) {
    return (
        <>
        <div>
            <p>
                {nome} custa R$ {preco}
            </p>
        </div>
        </>
    )
}
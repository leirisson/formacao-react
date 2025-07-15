

type UserCardProps = {
    nome: string
    email: string
    idade: number
    url: string
    alt: string
}

export function UserCard({
    nome,
    email,
    idade,
    url,
    alt
}: UserCardProps) {
    return (
        <>
            <div>
                <div>
                    <img src={url} alt={alt} />
                </div>
                <div>
                    <p>nome: {nome}</p>
                    <p>email: {email}</p>
                    <p>idade: {idade}</p>
                </div>
            </div>
        </>
    )
}
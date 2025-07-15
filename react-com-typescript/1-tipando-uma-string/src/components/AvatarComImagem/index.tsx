

type AvavatarProps = {
    url: string
    alt: string
}


export function AvatarComImagem({ url, alt }: AvavatarProps) {
    return (
        <>
                
            <img
                src={url}
                alt={alt} />
        </>
    )
}
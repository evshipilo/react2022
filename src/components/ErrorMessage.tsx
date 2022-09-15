interface ErrorMassegeProps{
    error?: string
}

export function ErrorMessage({error}:ErrorMassegeProps){
    return(
        <p className="text-center text-red-600">{error}</p>
    )
}
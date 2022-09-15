interface ButtonProps{
    buttonText:string
}
export function Button({buttonText}:ButtonProps){
    return(
        <button type="submit" className="p-2 rounded mb-2 ml-2 bg-blue-300 text-white">{buttonText}</button> 
    )
}
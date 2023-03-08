const Button =({children, onclick})=>{
    return(
        <>
            <button onClick={onclick} className="upload-button">{children}</button>
        </>
    )
}

export default Button
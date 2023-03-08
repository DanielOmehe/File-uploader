const Input =({type, onchange})=>{
    return(
        <>
            <input type={type} id='input-file-upload' onChange={onchange} />
        </>
    )
}

export default Input